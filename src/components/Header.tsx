import Link from "next/link";
import LanguageSelector from "./LanguageToggle";

export default function Header() {
  return (
    <div className="flex h-16 shrink-0 text-white font-semibold items-center justify-between px-6 top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        <Link prefetch={false} href="/">
          <div className="cursor-pointer p-2">MAIN</div>
        </Link>
        <Link prefetch={false} href="/chat">
          <div className="cursor-pointer p-2">CHAT</div>
        </Link>
        <div className="cursor-pointer p-2">BACKTEST</div>
        <div className="cursor-pointer p-2">DASHBOARD</div>
        <div className="cursor-pointer p-2">PRICING</div>
      </div>
      
      {/* Language Selector */}
      <div className="relative">
        <LanguageSelector />
      </div>
    </div>
  );
}
