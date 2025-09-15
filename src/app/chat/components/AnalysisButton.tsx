"use client";

import { drawdownFromPeak } from "@/lib/service/rebalancing";
import { useHistoricalData } from "@/hooks/useHistoricalData";

export default function AnalysisButton() {
  const { mutate: fetchHistoricalData, isPending, error } = useHistoricalData();

  const handleAnalysis = () => {
    console.log("Fetching TQQQ data...");
    
    fetchHistoricalData(
      { symbol: "TQQQ" },
      {
        onSuccess: (result) => {
          console.log("TQQQ historical data:", result);
          console.log(`Symbol: ${result.symbol}`);
          console.log(`Period: ${result.startDate} to ${result.endDate}`);
          console.log(`Total data points: ${result.count}`);

          if (result.data && result.data.length > 0) {
            console.log("Latest data:", result.data[result.data.length - 1]);
            console.log("Oldest data:", result.data[0]);
          }
          
          console.log("TQQQ data fetch complete.");
          console.log("Analyzing TQQQ data...");
          
          drawdownFromPeak({
            origin: result.data,
            target: result.data,
            thresholds: [0.1, 0.2, 0.3, 0.4, 0.5],
          });
        },
        onError: (error) => {
          console.error("Error fetching TQQQ data:", error);
        },
      }
    );
  };

  return (
    <div
      onClick={handleAnalysis}
      className={`
        cursor-pointer border rounded-md backdrop-blur-md h-10 w-30 flex items-center justify-center text-md transition-colors
        ${isPending 
          ? 'bg-white/10 text-gray-400 cursor-not-allowed' 
          : 'bg-white/20 hover:bg-white/30'
        }
        ${error ? 'border-red-300' : ''}
      `}
    >
      {isPending ? "분석 중..." : "분석"}
    </div>
  );
}
