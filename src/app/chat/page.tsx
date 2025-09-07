import AIChatCard from "@/components/AIChatCard";
import SymbolSelector from "./components/SymbolSelector";

export default function Home() {
  return (
    <div className="flex w-full h-full text-white">
      {/* Left Panel - AI Chat */}
      <div className="w-1/2 p-4">
        <AIChatCard />
      </div>

      {/* Right Panel - Backtest Tools */}
      <div className="w-1/2 p-4">
        <div className="h-full">
          <SymbolSelector />
        </div>
      </div>
    </div>
  );
}
