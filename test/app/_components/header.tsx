"use client";
import { EnterAnimation } from "./animation/entryAnimationHeader";
import * as motion from "motion/react-client";

interface HeaderProps {
  scrollToSection?: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const navItems = [
    { label: "Нэвтрэх", action: () => scrollToSection?.("contact") },
    { label: "Бүртгүүлэх", action: () => scrollToSection?.("contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-black/20"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-12 md:h-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0"
          >
            <EnterAnimation />
            <span className="shrink-0">
              <p
                style={{ fontFamily: "Oswald, serif" }}
                className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white whitespace-nowrap"
              >
                OMNI ASSET II
              </p>
            </span>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 shrink-0"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={i}
                onClick={item.action}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-[10px] sm:text-xs md:text-sm text-white hover:text-white font-bold transition-colors duration-300 px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg hover:bg-white/10 whitespace-nowrap"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
