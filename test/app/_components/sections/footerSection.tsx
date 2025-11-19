"use client";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

interface FooterSectionProps {
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

const FooterSection = ({ scrollVariants }: FooterSectionProps) => {
  const contacts = [
    { icon: Phone, text: "+976 7510-7500", label: "Утас" },
    { icon: Mail, text: "info@apexcapital.mn", label: "Имэйл" },
    {
      icon: MapPin,
      text: "N-Tower 403 тоот,8-р хороо,Сүхбаатар дүүрэг,Улаанбаатар",
      label: "Хаяг",
    },
  ];

  const contactCardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <motion.footer
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={scrollVariants}
      className="relative overflow-hidden"
    >
      <div className="bg-linear-to-br from-[#3b1f1f] via-[#8a2b2b] to-[#d92e2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 px-2">
                Хөрөнгө оруулалтаа эхлүүлэхэд бэлэн үү?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-rose-100 mb-4 sm:mb-6 px-2">
                Манай мэргэжилтнүүд танд дэлгэрэнгүй мэдээлэл өгөхөд бэлэн байна
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                {contacts.map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 md:p-4 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mx-auto mb-1.5 sm:mb-2" />
                    <p className="text-white text-[10px] sm:text-xs md:text-sm font-semibold mb-0.5 sm:mb-1 wrap-break-word">
                      {contact.text}
                    </p>
                    <p className="text-rose-100 text-[9px] sm:text-xs">
                      {contact.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#3b1f1f] rounded-full font-bold text-sm sm:text-base hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Холбогдох
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-right flex flex-col h-full"
            >
              <div className="flex flex-col lg:items-end gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
                <div className="flex flex-col lg:items-end gap-3 sm:gap-4">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={"/images/apexCapital.png"}
                    className="w-24 sm:w-32 md:w-40 h-fit opacity-90 hover:opacity-100 transition-opacity duration-300 mx-auto lg:mx-0"
                    alt="Apex Capital"
                  />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={"/images/omniCapital.png"}
                    className="w-28 sm:w-36 md:w-44 h-fit opacity-90 hover:opacity-100 transition-opacity duration-300 mx-auto lg:mx-0"
                    alt="Omni Capital"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">
                    Холбоосууд
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-300">
                    <li>
                      <a className="hover:text-white transition-colors text-xs sm:text-sm">
                        Бидний тухай
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white transition-colors text-xs sm:text-sm">
                        Үйлчилгээ
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white transition-colors text-xs sm:text-sm">
                        Холбоо барих
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">
                    Хууль эрх зүй
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-300">
                    <li>
                      <a className="hover:text-white transition-colors text-xs sm:text-sm">
                        Үйлчилгээний нөхцөл
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-white transition-colors text-xs sm:text-sm">
                        Нууцлалын бодлого
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-white/20 pt-4 sm:pt-6 mt-6 sm:mt-8 text-center text-gray-300 text-[10px] sm:text-xs md:text-sm px-2"
          >
            <p>
              © 2025 Omni Asset 2 × Apex Capital. Бүх эрх хуулиар хамгаалагдсан.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
