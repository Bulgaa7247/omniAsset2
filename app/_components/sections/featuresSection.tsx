"use client";
import { Shield, LucideIcon } from "lucide-react";
import * as motion from "motion/react-client";

interface Feature {
  title: string;
  desc: string;
  color: string;
  icon?: LucideIcon;
}

interface FeaturesSectionProps {
  features: Feature[];
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

const FeaturesSection = ({
  features,
  scrollVariants,
}: FeaturesSectionProps) => {
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
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <motion.section
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={scrollVariants}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white via-rose-50/30 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-red-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-red-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="text-xs sm:text-sm md:text-base font-semibold text-red-600 bg-red-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              Онцлог шинж чанарууд
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-2">
            Яагаад Omni Asset 2 вэ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Найдвартай, ил тод, өндөр өгөөжтэй хөрөнгө оруулалтын шийдэл
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-red-600 via-red-500 to-red-700 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-linear-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/10 group-hover:to-red-500/5 rounded-3xl transition-all duration-500"></div>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-6 sm:p-7 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 h-full flex flex-col overflow-hidden "
              >
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-red-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-linear-to-br ${feature.color} mb-4 sm:mb-5 md:mb-6 flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${feature.color} rounded-xl sm:rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10">
                    {feature.icon ? (
                      <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    ) : (
                      <Shield className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    )}
                  </div>
                </motion.div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed grow relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.desc}
                </p>
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-linear-to-r from-red-500 to-red-600 rounded-full transition-all duration-500 relative z-10"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
