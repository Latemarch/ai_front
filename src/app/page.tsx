import AIChatCard from "@/components/AIChatCard";
import GradientEffectsDemo from "@/components/GradientEffectsDemo";
import Spiner from "@/components/Loading";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      {/* <Spiner /> */}
      {/* <GradientEffectsDemo /> */}
      <div className="w-1/2">
        <AIChatCard />
      </div>
      <div>something</div>
    </div>
  );
}
