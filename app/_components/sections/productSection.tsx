"use client";
import * as motion from "motion/react-client";

interface ProductData {
  value: string;
  unit: string;
  label: string;
  icon: string;
}

interface KeyMetricsSectionProps {
  productData: ProductData[];
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

const KeyMetricsSection = ({
  productData,
  scrollVariants,
}: KeyMetricsSectionProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
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
      className="py-12 sm:py-16 md:py-20 bg-white relative "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
            Бүтээгдэхүүн танилцуулга
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {productData.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-red-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <img
                    src={item.icon}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    alt={item.label}
                  />
                </div>

                {/* Value and unit */}
                <div className="mb-2 sm:mb-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    {item.value}
                  </span>
                  <span className="text-sm sm:text-base md:text-lg font-medium text-red-600 ml-1 sm:ml-1.5">
                    {item.unit}
                  </span>
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-1">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default KeyMetricsSection;
