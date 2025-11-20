"use client";
import { ChevronDown } from "lucide-react";
import AnimatedText from "../animation/animation";
import * as motion from "motion/react-client";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <motion.section className="relative top-0 min-h-screen flex items-center justify-center overflow-hidden z-40 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24">
      <div className="absolute inset-0 bg-linear-to-br from-[#282f36] via-[#6a7a8c] to-[#282f36]">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
        >
          <AnimatedText text="Хөрөнгөө Өсгөх" />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-transparent bg-clip-text bg-linear-to-r from-[#ffd7c8] via-[#f9a48c] to-[#d92e2e] mt-1 sm:mt-2"
          >
            <AnimatedText text="Найдвартай Боломж" />
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-rose-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
        >
          14 тэрбум төгрөгийн хөрөнгөөр баталгаажсан үнэт цаас • 19.2% жилийн
          өгөөж • 24 сарын хугацаа
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Холбогдох
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
          onClick={() => scrollToSection("features")}
        >
          <span className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">
            Дэлгэрэнгүй
          </span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
