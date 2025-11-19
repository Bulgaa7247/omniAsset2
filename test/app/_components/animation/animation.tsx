"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -5, scale: 1.05, color: "#ffffff" },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover="hover"
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
