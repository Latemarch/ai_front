import Link from "next/link";

export default function Header() {
  return (
    // <div className="fixed flex w-full items-center justify-center gap-10 h-10">
    <div className="flex h-20 text-white font-semibold items-center justify-center gap-10 top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
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
  );
}
