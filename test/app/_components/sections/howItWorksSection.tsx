"use client";
import { CheckCircle2, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

interface HowItWorksSectionProps {
  scrollVariants: {
    hidden: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
        ease: readonly [number, number, number, number];
      };
    };
    visible: {
      opacity: number;
      y: number;
      transition: {
        duration: number;
        ease: readonly [number, number, number, number];
      };
    };
  };
}

const HowItWorksSection = ({ scrollVariants }: HowItWorksSectionProps) => {
  const steps = [
    {
      step: "01",
      title: "Бүртгүүлэх",
      desc: "Apex Capital-д хөрөнгө оруулагчаар бүртгүүлэх",
      icon: CheckCircle2,
    },
    {
      step: "02",
      title: "Хөрөнгө оруулах",
      desc: "100,000₮-ээс эхлэн үнэт цаас худалдан авах",
      icon: CheckCircle2,
    },
    {
      step: "03",
      title: "Өгөөж авах",
      desc: "3 сар тутам тогтмол хүү хүлээн авах",
      icon: CheckCircle2,
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={scrollVariants}
      className="py-12 sm:py-16 md:py-24 lg:py-28 bg-linear-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-red-200/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="text-xs sm:text-sm md:text-base font-semibold text-red-600 bg-red-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              Ажлын үйл явц
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-2">
            Хэрхэн ажилладаг вэ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Гурван энгийн алхамаар хөрөнгө оруулалтаа эхлүүлээрэй
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-red-100 via-red-400 to-red-100 rounded-full"
            style={{ transformOrigin: "left" }}
          />
          {steps.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-linear-to-br from-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group-hover:border-red-200 text-center h-full flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative mb-4 sm:mb-6"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-red-500 to-red-700 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-linear-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl font-bold shadow-2xl group-hover:shadow-red-500/50 transition-shadow duration-300">
                    {item.step}
                  </div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15 + 0.4,
                      duration: 0.5,
                      type: "spring",
                    }}
                    className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 rounded-full p-1.5 sm:p-2 shadow-lg"
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="md:hidden my-4 sm:my-6">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.6 }}
                    >
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 rotate-90" />
                    </motion.div>
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 px-1">
                  {item.desc}
                </p>
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-linear-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
