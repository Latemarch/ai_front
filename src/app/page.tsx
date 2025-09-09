"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useI18n } from "@/stores/clientSessionStore";

function HomeContent() {
  const { translations } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
            {translations.hero.title.split("\n")[0]}
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {translations.hero.title.split("\n")[1]}
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            {translations.hero.subtitle}
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
          >
            {translations.hero.cta}
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
            {translations.features.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: translations.features.smartAnalysis.title,
                description: translations.features.smartAnalysis.description,
                icon: "🧠",
              },
              {
                title: translations.features.automation.title,
                description: translations.features.automation.description,
                icon: "⚡",
              },
              {
                title: translations.features.realtime.title,
                description: translations.features.realtime.description,
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
              { number: "10M+", label: translations.stats.activeUsers },
              { number: "99.9%", label: translations.stats.uptime },
              { number: "24/7", label: translations.stats.support },
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
            {translations.cta.title}
          </h2>
          <p className="text-white/70 text-lg mb-8">
            {translations.cta.description}
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg"
          >
            {translations.cta.button}
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
