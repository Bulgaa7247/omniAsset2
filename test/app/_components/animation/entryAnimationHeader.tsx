import * as motion from "motion/react-client";

export const EnterAnimation = () => {
  return (
    <motion.img
      src="/images/omni.svg" // ← энд зургаа хийнэ
      alt="ball"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
    />
  );
};
