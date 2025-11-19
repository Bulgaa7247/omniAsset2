"use client";
import { TrendingUp, Shield, Award, Percent } from "lucide-react";
import Header from "./_components/header";
import { HeroSection } from "./_components/sections/heroSection";
import KeyMetricsSection from "./_components/sections/productSection";
import FeaturesSection from "./_components/sections/featuresSection";
import HowItWorksSection from "./_components/sections/howItWorksSection";
import FooterSection from "./_components/sections/footerSection";

const LandingPage = () => {
  const productData = [
    {
      value: "14",
      unit: "тэрбум ₮ ",
      label: "Татан төвлөрүүлэх дүн",
      icon: "/images/money-bag.png",
    },
    {
      value: "100,000",
      unit: "₮",
      label: "Hэгжийн үнэ",
      icon: "/images/price-tag.png",
    },
    {
      value: "19.2",
      unit: "%",
      label: "Жилийн өгөөж",
      icon: "/images/interest-rate.png",
    },
    {
      value: "24",
      unit: "сар",
      label: "Хугацаа",
      icon: "/images/clock.png",
    },
    {
      value: "3",
      unit: "сар тутам",
      label: "Хүү төлөлт",
      icon: "/images/loop.png",
    },
    {
      value: "5",
      unit: "%",
      label: "Орлогын татвар",
      icon: "/images/taxable.png",
    },
  ];
  const feature = [
    {
      title: "Баталгаат хөрөнгө",
      desc: "Үл хөдлөх хөрөнгийн зээлийн багцаар баталгаажсан.Тус зээлүүд нь санхүүгийн болон хуулийн шалгуурыг хангасан байхаас гадна 100% хэвийн төлөлттэй зээлүүд байдаг",
      color: "from-[#d92e2e] to-[#fec76f]",
      icon: Shield,
    },
    {
      title: "Тогтмол орлого",
      desc: "3 сар тутам 19.2% жилийн хүүгээр тогтмол төлбөр хүлээн авах",
      color: "from-[#d92e2e] to-[#fec76f]",
      icon: TrendingUp,
    },
    {
      title: "Мэргэжлийн удирдлага",
      desc: "Apex Capital андеррайтер — Таны итгэлийн түнш",
      color: "from-[#d92e2e] to-[#fec76f]",

      icon: Award,
    },
    {
      title: "Татварын хөнгөлөлт",
      desc: "Жилийн 19.2% өгөөж нь татварын хөнгөлөлттэй бөгөөд татварын дараах 18.24% буюу биржийн бус зах зээл дээр байгаа 20%-тай бондоос илүү өндөр өгөөжтэй.",
      color: "from-[#d92e2e] to-[#fec76f]",
      icon: Percent,
    },
  ];
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#fdf6f4] to-white">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <KeyMetricsSection
        productData={productData}
        scrollVariants={scrollVariants}
      />
      <FeaturesSection features={feature} scrollVariants={scrollVariants} />
      <HowItWorksSection scrollVariants={scrollVariants} />
      <FooterSection scrollVariants={scrollVariants} />
    </div>
  );
};

export default LandingPage;
