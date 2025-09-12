"use client";

import { drawdownFromPeak } from "@/lib/service/rebalancing";

export default function AnalysisButton() {
  const handleAnalysis = async () => {
    try {
      console.log("Fetching SOXL data...");

      const response = await fetch("/api/historical-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol: "SOXL",
          // startDate와 endDate를 생략하면 기본값 2010-01-01 ~ 2024-12-31 사용
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch data");
      }

      console.log("SOXL historical data:", result);
      console.log(`Symbol: ${result.symbol}`);
      console.log(`Period: ${result.startDate} to ${result.endDate}`);
      console.log(`Total data points: ${result.count}`);

      if (result.data && result.data.length > 0) {
        console.log("Latest data:", result.data[result.data.length - 1]);
        console.log("Oldest data:", result.data[0]);
      }
      console.log("SOXL data fetch complete.");
      console.log("Analyzing SOXL data...");
      drawdownFromPeak({
        origin: result.data,
        target: result.data,
        thresholds: [0.1, 0.2, 0.3, 0.4, 0.5],
      });
    } catch (error) {
      console.error("Error fetching SOXL data:", error);
    }
  };

  return (
    <div
      onClick={handleAnalysis}
      className="cursor-pointer border rounded-md backdrop-blur-md bg-white/20 h-10 w-30 flex items-center justify-center text-md hover:bg-white/30 transition-colors"
    >
      분석
    </div>
  );
}
