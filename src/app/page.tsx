"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const featuresY = useTransform(scrollYProgress, [0.3, 0.7], [100, 0]);
  const ctaScale = useTransform(scrollYProgress, [0.7, 1], [0.8, 1]);

  return (
    <div ref={containerRef} className="min-h-[300vh] ">
      {/* Fixed Header */}
      {/* <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white"
          >
            AI Front
          </motion.h1>
          <nav className="hidden md:flex space-x-8">
            <motion.button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              기능 소개
            </motion.button>
            <motion.button
              onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
              className="text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              통계
            </motion.button>
            <motion.button
              onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}
              className="text-white/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              시작하기
            </motion.button>
          </nav>
        </div>
      </motion.header> */}

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="text-center z-10">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            AI의 미래를
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              경험하세요
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            혁신적인 인공지능 기술로 새로운 가능성을 탐험하고, 더 스마트한
            미래를 만들어가세요.
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            시작하기
          </motion.button>
        </div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.section>

      {/* Features Section */}
      <motion.section
        style={{ y: featuresY }}
        className="min-h-screen py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            주요 기능
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "스마트 분석",
                description:
                  "고급 AI 알고리즘으로 데이터를 분석하고 인사이트를 제공합니다.",
                icon: "🧠",
              },
              {
                title: "자동화 솔루션",
                description:
                  "반복적인 작업을 자동화하여 생산성을 극대화합니다.",
                icon: "⚡",
              },
              {
                title: "실시간 처리",
                description:
                  "실시간으로 데이터를 처리하고 즉각적인 결과를 제공합니다.",
                icon: "🚀",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "10M+", label: "활성 사용자" },
              { number: "99.9%", label: "가동률" },
              { number: "24/7", label: "고객 지원" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-purple-400 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        style={{ scale: ctaScale }}
        className="h-screen flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 시작해보세요
          </h2>
          <p className="text-white/70 text-lg mb-8">
            AI의 무한한 가능성을 탐험하고 비즈니스를 다음 단계로 끌어올리세요.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg"
          >
            무료로 시작하기
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}
