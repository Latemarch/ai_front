import React from "react";
import SymbolSelector from "./SymbolSelector";
import { DateRangeSelector } from "./DateRangeSelector";
import LineChart from "@/components/D3/LineChart";

export default function RightPenel() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Symbol</h3>
        <SymbolSelector />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Date Range</h3>
        <DateRangeSelector />
      </div>

      <LineChart width={400} height={200} />
    </div>
  );
}
