import AIChatCard from "@/components/AIChatCard";
import SymbolSelection from "./components/SymbolSelection";

export default function Home() {
  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Left Panel - AI Chat */}
      <div className="w-1/2 p-4">
        <AIChatCard />
      </div>
      
      {/* Right Panel - Backtest Tools */}
      <div className="w-1/2 p-4">
        <div className="h-full">
          <SymbolSelection />
        </div>
      </div>
    </div>
  );
}
