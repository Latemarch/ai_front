"use client";

import { useState } from "react";
import AIChatCard from "@/components/AIChatCard";
import SymbolSelector from "./SymbolSelector";

export default function ResizablePanels() {
  const [leftWidth, setLeftWidth] = useState(50);

  const handleResize = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startLeftWidth = leftWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const containerWidth = window.innerWidth;
      const deltaPercent = (deltaX / containerWidth) * 100;
      const newLeftWidth = Math.min(
        Math.max(startLeftWidth + deltaPercent, 20),
        80
      );
      setLeftWidth(newLeftWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex w-full h-full text-white">
      {/* Left Panel - AI Chat */}
      <div className="p-4" style={{ width: `${leftWidth}%` }}>
        <AIChatCard />
      </div>

      {/* Resizer */}
      <div
        className="w-1 bg-gray-600 hover:bg-gray-400 cursor-col-resize flex-shrink-0"
        onMouseDown={handleResize}
      />

      {/* Right Panel - Backtest Tools */}
      <div className="p-4" style={{ width: `${100 - leftWidth}%` }}>
        <div className="h-full">
          <SymbolSelector />
        </div>
      </div>
    </div>
  );
}