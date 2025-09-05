export default function GradientEffectsDemo() {
  return (
    <div className=" bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
          <h1 className="text-3xl font-bold text-slate-100 drop-shadow-lg">
            글래스모피즘 효과 예제
          </h1>
        </div>

        {/* 글래스모피즘 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Full Body Burn 스타일 카드 */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/20 p-6 text-slate-100 shadow-xl">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-slate-100 drop-shadow-md">
                Full Body Burn 🔥
              </h3>
              <p className="text-sm text-slate-200 mb-4 drop-shadow-sm">
                Balanced AI-crafted workout combining push, pull, and legs to
                maximize overall fitness.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-slate-100 drop-shadow-sm">
                    5.0
                  </span>
                  <span className="text-yellow-400 drop-shadow-sm">⭐</span>
                </div>
                <button className="bg-slate-800/90 backdrop-blur-sm border border-white/30 text-slate-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700/90 transition-all duration-300 drop-shadow-md">
                  Try Now
                </button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-emerald-500/10 to-green-400/20 pointer-events-none"></div>
          </div>

          {/* Pull Force 스타일 카드 */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 text-slate-100 shadow-xl">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-slate-100 drop-shadow-md">
                Pull Force 💪
              </h3>
              <p className="text-sm text-slate-200 mb-4 drop-shadow-sm">
                Strengthen your back & biceps.
              </p>
              <button className="bg-slate-800/80 backdrop-blur-sm border border-white/20 text-slate-100 px-3 py-1 rounded-lg text-xs hover:bg-slate-700/80 transition-all duration-300 drop-shadow-sm">
                Save
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-slate-600/5 pointer-events-none"></div>
          </div>

          {/* 진행률 차트 카드 */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 text-slate-100 shadow-xl">
            <h3 className="text-lg font-bold mb-4 text-slate-100 drop-shadow-md">
              Daily Progress
            </h3>

            {/* 원형 진행률 차트 */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 120 120"
              >
                {/* 배경 원 */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-slate-700"
                />
                {/* 그라데이션 진행률 원 */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.65} ${
                    2 * Math.PI * 50
                  }`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-100 drop-shadow-md">
                    1200
                  </div>
                  <div className="text-xs text-slate-300 drop-shadow-sm">
                    Kcal
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-slate-300 drop-shadow-sm">
              Carbo: 420 Kcal (35%)
            </div>
          </div>
        </div>

        {/* 다양한 글래스모피즘 효과 예제 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="col-span-full bg-slate-900/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
            <h2 className="text-xl font-bold text-slate-100 drop-shadow-lg">
              다양한 글래스모피즘 효과
            </h2>
          </div>

          {/* 기본 글래스 */}
          <div className="h-32 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-slate-100 font-medium shadow-xl">
            <div className="text-center">
              <div className="text-sm font-bold text-slate-100 drop-shadow-md">
                Basic Glass
              </div>
              <div className="text-xs text-slate-300 drop-shadow-sm">
                bg-slate-900/60
              </div>
            </div>
          </div>

          {/* 진한 글래스 */}
          <div className="h-32 rounded-xl bg-slate-800/70 backdrop-blur-lg border border-white/30 flex items-center justify-center text-slate-100 font-medium shadow-xl">
            <div className="text-center">
              <div className="text-sm font-bold text-slate-100 drop-shadow-md">
                Strong Glass
              </div>
              <div className="text-xs text-slate-300 drop-shadow-sm">
                bg-slate-800/70
              </div>
            </div>
          </div>

          {/* 컬러 글래스 */}
          <div className="h-32 rounded-xl bg-blue-900/60 backdrop-blur-md border border-blue-400/30 flex items-center justify-center text-slate-100 font-medium shadow-xl">
            <div className="text-center">
              <div className="text-sm font-bold text-slate-100 drop-shadow-md">
                Colored Glass
              </div>
              <div className="text-xs text-slate-300 drop-shadow-sm">
                bg-blue-900/60
              </div>
            </div>
          </div>

          {/* 그라데이션 글래스 */}
          <div className="relative h-32 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-slate-100 font-medium shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-red-500/20"></div>
            <div className="relative text-center">
              <div className="text-sm font-bold text-slate-100 drop-shadow-md">
                Gradient Glass
              </div>
              <div className="text-xs text-slate-300 drop-shadow-sm">
                + gradient overlay
              </div>
            </div>
          </div>
        </div>

        {/* 글래스모피즘 버튼 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
              <h2 className="text-xl font-bold text-slate-100 drop-shadow-lg">
                글래스모피즘 버튼
              </h2>
            </div>

            {/* 글래스 버튼들 */}
            <div className="space-y-3">
              <button className="w-full h-12 rounded-lg bg-slate-800/80 backdrop-blur-md border border-white/20 text-slate-100 font-medium hover:bg-slate-700/80 transition-all duration-300 shadow-lg drop-shadow-md">
                Primary Glass Button
              </button>

              <button className="w-full h-12 rounded-lg bg-teal-800/70 backdrop-blur-md border border-teal-400/30 text-slate-100 font-medium hover:bg-teal-700/80 transition-all duration-300 shadow-lg drop-shadow-md">
                Colored Glass Button
              </button>

              <button className="w-full h-12 rounded-lg bg-slate-800/80 backdrop-blur-md border border-white/20 text-slate-100 font-medium hover:bg-slate-700/80 transition-all duration-300 shadow-lg drop-shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
                <span className="relative">Gradient Glass Button</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
              <h2 className="text-xl font-bold text-slate-100 drop-shadow-lg">
                글래스 텍스트 효과
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-900/60 backdrop-blur-md border border-white/10">
                <h3
                  className="text-2xl font-bold text-slate-100 drop-shadow-lg"
                  style={{
                    background: "linear-gradient(to right, #2dd4bf, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  투명한 배경 위의 그라데이션 텍스트
                </h3>
              </div>

              <div className="p-4 rounded-lg bg-purple-900/60 backdrop-blur-md border border-purple-400/20">
                <h3
                  className="text-2xl font-bold text-slate-100 drop-shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to right, #a855f7, #ec4899, #ef4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  컬러 글래스 배경
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* 코드 예제 */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-xl">
          <h2 className="text-xl font-bold text-slate-100 mb-4 drop-shadow-lg">
            글래스모피즘 Tailwind 클래스
          </h2>
          <div className="space-y-2 text-sm font-mono text-slate-200">
            <div>
              <span className="text-teal-400 drop-shadow-sm">
                bg-slate-900/60
              </span>{" "}
              - 60% 투명도 어두운 배경 (강한 대비)
            </div>
            <div>
              <span className="text-teal-400 drop-shadow-sm">
                backdrop-blur-md
              </span>{" "}
              - 중간 강도 블러 효과
            </div>
            <div>
              <span className="text-teal-400 drop-shadow-sm">
                text-slate-100
              </span>{" "}
              - 밝은 회색 텍스트 (높은 대비)
            </div>
            <div>
              <span className="text-teal-400 drop-shadow-sm">
                drop-shadow-md
              </span>{" "}
              - 텍스트 그림자로 가독성 향상
            </div>
            <div>
              <span className="text-teal-400 drop-shadow-sm">
                border border-white/20
              </span>{" "}
              - 20% 투명도 테두리
            </div>
            <div>
              <span className="text-teal-400 drop-shadow-sm">
                WebkitTextFillColor
              </span>{" "}
              - 그라데이션 텍스트 fallback
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
