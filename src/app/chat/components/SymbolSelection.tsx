"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import { Search, X, TrendingUp, TrendingDown } from "lucide-react";

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

export default function SymbolSelection() {
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allStocks, setAllStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);

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

  // Debounce search term to avoid excessive filtering
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Memoized filtering with performance optimization
  const filteredStocks = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return allStocks.slice(0, 50); // Show first 50 when no search
    }

    const term = debouncedSearchTerm.toLowerCase();
    return allStocks
      .filter((stock) => {
        // Early return for performance
        const symbolMatch = stock.symbol.toLowerCase().includes(term);
        if (symbolMatch) return true;
        return stock.name.toLowerCase().includes(term);
      })
      .slice(0, 100); // Limit search results to 100 for performance
  }, [allStocks, debouncedSearchTerm]);

  // Search handler - just updates the search term
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const toggleSymbol = (symbol: string) => {
    setSelectedSymbols((prev) =>
      prev.includes(symbol)
        ? prev.filter((s) => s !== symbol)
        : [...prev, symbol]
    );
  };

  const removeSymbol = (symbol: string) => {
    setSelectedSymbols((prev) => prev.filter((s) => s !== symbol));
  };

  return (
    <div className="w-full h-full rounded-lg shadow-lg p-6 bg-black/20 backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold  mb-4">종목 선택</h2>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100 w-4 h-4" />
          <input
            type="text"
            placeholder="종목명 또는 심볼 검색..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Selected Symbols */}
        {selectedSymbols.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              선택된 종목 ({selectedSymbols.length}개)
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedSymbols.map((symbol) => (
                <motion.div
                  key={symbol}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  <span className="font-medium">{symbol}</span>
                  <button
                    onClick={() => removeSymbol(symbol)}
                    className="ml-2 hover:bg-blue-200 rounded-full p-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-2 text-gray-600">종목 데이터 로딩중...</span>
        </div>
      )}

      {/* Stock Cards */}
      {!loading && (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredStocks.map((stock) => {
            const isSelected = selectedSymbols.includes(stock.symbol);
            const isPositive = stock.change >= 0;

            return (
              <motion.div
                key={stock.symbol}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 m-2 drop-shadow-xl bg-black/20 rounded-lg cursor-pointer transition-all ${
                  isSelected ? "border border-gray-500" : ""
                }`}
                onClick={() => toggleSymbol(stock.symbol)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg ">{stock.symbol}</span>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {stock.name}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-gray-800">
                      ${stock.price.toFixed(2)}
                    </div>
                    <div
                      className={`flex items-center text-sm ${
                        isPositive ? "text-green-600" : "text-red-600"
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
        </div>
      )}

      {!loading && filteredStocks.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
