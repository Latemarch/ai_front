"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion } from "motion/react";
import { Search, X, TrendingUp, TrendingDown } from "lucide-react";
import { useSymbolsActions } from "@/stores/clientSessionStore";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketMaker?: string;
}

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Function to generate random price data for display
const generateMockPrice = () => {
  const basePrice = Math.random() * 500 + 50;
  const change = (Math.random() - 0.5) * 20;
  const changePercent = (change / basePrice) * 100;

  return {
    price: parseFloat(basePrice.toFixed(2)),
    change: parseFloat(change.toFixed(2)),
    changePercent: parseFloat(changePercent.toFixed(2)),
  };
};

// Function to parse CSV data
const parseCSVData = async (): Promise<Stock[]> => {
  try {
    const response = await fetch("/finance/bxo_lmm.csv");
    const text = await response.text();
    const lines = text.split("\n").slice(4); // Skip header lines

    const stocks: Stock[] = [];

    for (const line of lines) {
      if (line.trim() && !line.startsWith(",")) {
        const [symbol, name, marketMaker] = line.split(",");
        const cleanSymbol = symbol?.replace(/"/g, "").trim();
        const cleanName = name?.replace(/"/g, "").trim();
        const cleanMarketMaker = marketMaker?.replace(/"/g, "").trim();

        if (cleanSymbol && cleanName) {
          const mockPrice = generateMockPrice();
          stocks.push({
            symbol: cleanSymbol,
            name: cleanName,
            marketMaker: cleanMarketMaker,
            ...mockPrice,
          });
        }
      }
    }

    return stocks;
  } catch (error) {
    console.error("Error loading CSV data:", error);
    return [];
  }
};

export default function SymbolSelector() {
  const { symbols: selectedSymbols, toggleSymbol, removeSymbol } = useSymbolsActions();
  const [searchTerm, setSearchTerm] = useState("");
  const [allStocks, setAllStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load CSV data on component mount
  useEffect(() => {
    const loadStocks = async () => {
      setLoading(true);
      const stocks = await parseCSVData();
      setAllStocks(stocks);
      setLoading(false);
    };

    loadStocks();
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounce search term to avoid excessive filtering
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Memoized filtering with performance optimization
  const filteredStocks = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return []; // Don't show results when no search term
    }

    const term = debouncedSearchTerm.toLowerCase();
    return allStocks
      .filter((stock) => {
        // Early return for performance
        const symbolMatch = stock.symbol.toLowerCase().includes(term);
        if (symbolMatch) return true;
        return stock.name.toLowerCase().includes(term);
      })
      .slice(0, 10); // Limit search results to 10 for dropdown
  }, [allStocks, debouncedSearchTerm]);

  // Search handler - updates the search term and opens dropdown
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, []);

  const handleInputFocus = () => {
    if (searchTerm.trim()) {
      setIsDropdownOpen(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredStocks.length > 0) {
      e.preventDefault();
      const firstStock = filteredStocks[0];
      handleToggleSymbol(firstStock.symbol);
    }
  };

  const handleToggleSymbol = (symbol: string) => {
    toggleSymbol(symbol);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="w-full h-full rounded-lg shadow-lg p-6 bg-black/20 backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">종목 선택</h2>

        {/* Search Bar with Dropdown */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="종목명 또는 심볼 검색..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={handleInputFocus}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-black/10 backdrop-blur-xl text-white placeholder-white/50"
          />

          {/* Dropdown Results */}
          {isDropdownOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-1 bg-black/20 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
            >
              {loading && (
                <div className="flex justify-center items-center py-4">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                  <span className="ml-2 text-white/70 text-sm">검색중...</span>
                </div>
              )}

              {!loading && filteredStocks.length === 0 && searchTerm.trim() && (
                <div className="text-center py-4 text-white/50 text-sm">
                  검색 결과가 없습니다.
                </div>
              )}

              {!loading &&
                filteredStocks.map((stock) => {
                  const isSelected = selectedSymbols.includes(stock.symbol);
                  const isPositive = stock.change >= 0;

                  return (
                    <motion.div
                      key={stock.symbol}
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      className={`p-3 cursor-pointer border-b border-white/10 last:border-b-0 hover:bg-white/10 ${
                        isSelected ? "bg-white/20" : ""
                      }`}
                      onClick={() => handleToggleSymbol(stock.symbol)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">
                              {stock.symbol}
                            </span>
                            {isSelected && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            )}
                          </div>
                          <p className="text-sm text-white/70 truncate">
                            {stock.name}
                          </p>
                        </div>

                        <div className="text-right">
                          <div className="font-medium text-white text-sm">
                            ${stock.price.toFixed(2)}
                          </div>
                          <div
                            className={`flex items-center text-xs ${
                              isPositive ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {isPositive ? (
                              <TrendingUp className="w-3 h-3 mr-1" />
                            ) : (
                              <TrendingDown className="w-3 h-3 mr-1" />
                            )}
                            {isPositive ? "+" : ""}
                            {stock.change.toFixed(2)} ({isPositive ? "+" : ""}
                            {stock.changePercent.toFixed(2)}%)
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          )}
        </div>

        {/* Selected Symbols */}
        {selectedSymbols.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              선택된 종목 ({selectedSymbols.length}개)
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedSymbols.map((symbol) => (
                <motion.div
                  key={symbol}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium"
                >
                  <span>{symbol}</span>
                  <button
                    onClick={() => removeSymbol(symbol)}
                    className="ml-2 hover:bg-blue-200 rounded-full p-1 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedSymbols.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            검색창에서 종목을 검색하고 선택해보세요.
          </div>
        )}
      </div>
    </div>
  );
}
