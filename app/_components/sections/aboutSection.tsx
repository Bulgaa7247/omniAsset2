"use client";
import * as motion from "motion/react-client";

interface AboutSectionProps {
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

const AboutSection = ({ scrollVariants }: AboutSectionProps) => {
  const companyCardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const reverseCompanyCardVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const reverseImageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={scrollVariants}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white via-gray-50/30 to-white relative overflow-hidden"
    >
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-2">
            Бидний тухай
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto text-base sm:text-lg md:text-[15px] lg:text-xl text-gray-700 leading-relaxed space-y-4 px-2"
          >
            <p>
              Omni Asset 2 нь Монголын үнэт цаасны зах зээлд хөрөнгөөр
              баталгаажсан үнэт цаасны шинэ үеийн шийдлийг нэвтрүүлж буй
              хамтарсан төсөл юм. Энэхүү бүтээгдэхүүнийг Omni Capital (2016
              оноос) болон Apex Capital ҮЦК (2018 оноос) стратегийн түншлэлээр
              гаргаж, ил тод, найдвартай, тогтвортой өгөөжтэй хөрөнгө оруулалтын
              боломжийг бий болгож байна.
            </p>
            <p>
              Omni Asset цуврал нь Монголын санхүүгийн зах зээлд амжилттай
              хэрэгжиж байгаа хөрөнгөөр баталгаажсан үнэт цаасны жишиг
              бүтээгдэхүүн бөгөөд Omni Asset 2 бол энэхүү цувралын 3 дахь
              удаагийн амжилттай бүтэцлэсэн ХБҮЦ юм.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-28"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Text Content - Left */}
            <motion.div
              variants={companyCardVariants}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Apex Capital — Бидний тухай
              </h3>
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  Apex Capital ҮЦК нь 2018 оноос Монголын үнэт цаасны зах зээлд
                  брокер, диллер, андерайтерийн тусгай зөвшөөрөлтэйгөөр
                  мэргэжлийн үйлчилгээ үзүүлж буй санхүүгийн байгууллага юм.
                  Компанийн менежментийн баг нь санхүү, хөрөнгө оруулалтын
                  салбарт 20+ жилийн туршлагатай, 37,000 гаруй харилцагчтай
                  бөгөөд үнэт цаасны андеррайтинг, захиалга авах, хөрөнгө
                  оруулалтын зөвлөх үйлчилгээний тэргүүлэгч компаниудын нэг.
                </p>
                <p>
                  Apex Capital нь Omni Asset 2 төслийн үнэт цаасыг олон нийтэд
                  санал болгох, захиалга авах, хөрөнгө оруулагчдад мэргэжлийн
                  мэдээлэл хүргэх үндсэн брокер андеррайтерийн үүргийг гүйцэтгэж
                  байна.
                </p>
              </div>
            </motion.div>
            <motion.div variants={imageVariants} className="relative group">
              <div className="absolute -inset-4 bg-linear-to-br from-amber-300/30 to-amber-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/aboutApex.png"
                  alt="Apex Capital"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 sm:mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <motion.div
              variants={reverseImageVariants}
              className="relative group order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-linear-to-br from-red-500/20 to-red-700/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/aboutOmni.webp"
                  alt="Omni Capital"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div
              variants={reverseCompanyCardVariants}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Omni Capital — Бидний тухай
              </h3>
              <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  Omni Capital нь 2016 оноос хойш Монголын санхүүгийн зах зээлд
                  финтек суурьтай, хүртээмжтэй, хурдтай санхүүгийн үйлчилгээг
                  бий болгох зорилготойгоор тасралтгүй үйл ажиллагаа явуулж буй
                  байгууллага юм. Компанийн гол давуу тал нь технологид
                  суурилсан зээлийн үйлчилгээ, актив удирдлага, хөрөнгөөр
                  баталгаажсан бүтээгдэхүүний бүтэцлэлт бөгөөд 65,000+
                  хэрэглэгч, 120+ хөрөнгө оруулагчтай.
                </p>
                <p>
                  Omni Asset цувралын бүтэцлэлт нь Omni Capital-ийн үндсэн
                  мэргэжлийн чиглэл бөгөөд тэд Omni Asset 1, Omni Asset Active,
                  болон одоо гарч буй Omni Asset 2 зэрэг хөрөнгөөр баталгаажсан
                  үнэт цаасыг амжилттай гаргасан туршлагатай.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
