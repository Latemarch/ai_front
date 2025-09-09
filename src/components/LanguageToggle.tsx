"use client";

import { useLanguageActions } from "@/stores/clientSessionStore";
import { Language } from "@/types/i18n";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

const languageOptions = [
  { code: "ko" as Language, name: "한국어", flag: "🇰🇷" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "ja" as Language, name: "日本語", flag: "🇯🇵" },
  { code: "zh" as Language, name: "中文", flag: "🇨🇳" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "de" as Language, name: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageActions();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languageOptions.find((lang) => lang.code === language) ||
    languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        {/* Current Language Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 text-white hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm">{currentLanguage.flag}</span>
          <span className="text-sm font-medium">{currentLanguage.name}</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.button>

        {/* Language Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden"
          >
            {languageOptions.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/20 transition-all ${
                  language === lang.code ? "bg-white/10" : ""
                }`}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="text-sm font-medium text-white">
                  {lang.name}
                </span>
                {language === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto w-2 h-2 bg-green-400 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
