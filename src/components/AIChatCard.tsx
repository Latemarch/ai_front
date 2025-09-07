"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChat } from "@/hooks/useChat";
import ReactMarkdown from "react-markdown";

export default function AIChatCard({ className }: { className?: string }) {
  const { messages, isLoading, error, sendMessage } = useChat([
    { sender: "ai", text: "👋 안녕하세요! 저는 당신의 AI 어시스턴트입니다." }
  ]);
  const [input, setInput] = useState("");

  // 파티클 속성을 메모화하여 SSR 하이드레이션 불일치 방지
  const particleProps = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: (i * 5) % 100, // 고정된 값 사용
      delay: i * 0.5,
      duration: 5 + (i % 3), // 고정된 패턴 사용
      xOffset: (i % 3 - 1) * 50, // -50, 0, 50 패턴
    })), []
  );

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    await sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleSend();
    }
  };

  return (
    <div
      className={cn(
        "relative w-full h-full rounded-2xl overflow-hidden p-[2px]",
        className
      )}
    >
      {/* Animated Outer Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-white/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner Card */}
      <div className="relative flex flex-col w-full h-full rounded-xl border border-white/10 bg-black/30 overflow-hidden backdrop-blur-xl">
        {/* Inner Animated Background */}
        {/* <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        /> */}

        {/* Floating Particles */}
        {particleProps.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-white/10"
            animate={{
              y: ["0%", "-140%"],
              x: [particle.xOffset, -particle.xOffset],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            style={{ left: `${particle.left}%`, bottom: "-10%" }}
          />
        ))}

        {/* Header */}
        <div className="px-4 py-3 border-b border-white/10 relative z-10">
          <h2 className="text-lg font-semibold text-white">🤖 AI Assistant</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "px-3 py-2 rounded-xl max-w-[80%] shadow-md backdrop-blur-md",
                msg.sender === "ai"
                  ? "bg-white/10 text-white self-start"
                  : "bg-white/30 text-black font-semibold self-end",
                msg.error && "border border-red-500/50"
              )}
            >
              {msg.sender === "ai" ? (
                <div className="prose prose-sm prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                      ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
                      li: ({ children }) => <li className="mb-1">{children}</li>,
                      h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-sm font-bold mb-2">{children}</h3>,
                      code: ({ children }) => <code className="bg-white/10 px-1 py-0.5 rounded text-xs">{children}</code>,
                      pre: ({ children }) => <pre className="bg-white/10 p-2 rounded mb-2 overflow-x-auto">{children}</pre>,
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              ) : (
                msg.text
              )}
            </motion.div>
          ))}

          {/* AI Typing Indicator */}
          {isLoading && (
            <motion.div
              className="flex items-center gap-1 px-3 py-2 rounded-xl max-w-[30%] bg-white/10 self-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-200"></span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-400"></span>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              className="px-3 py-2 rounded-xl bg-red-500/20 text-red-300 text-xs self-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 p-3 border-t border-white/10 relative z-10">
          <input
            className="flex-1 px-3 py-2 text-sm bg-black/50 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/50"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isLoading
                ? "bg-white/5 cursor-not-allowed"
                : "bg-white/10 hover:bg-white/20"
            )}
          >
            <Send className={cn(
              "w-4 h-4",
              isLoading ? "text-white/50" : "text-white"
            )} />
          </button>
        </div>
      </div>
    </div>
  );
}
