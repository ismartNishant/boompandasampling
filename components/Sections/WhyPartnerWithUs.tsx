'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Slide, Zoom } from "react-awesome-reveal";


const HeadingOne = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl md:text-5xl font-bold text-center relative mb-16">
    {children}
    <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
  </h1>
);

const WhyPartnerWithUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      title: "Direct Access to Gen Z & Millennials",
      description:
        "Reach 5M+ active students and young professionals across 100+ colleges and cities",
      imgSrc: "/Images/icons/target.png",
      color: "#FFE5E5",
      hoverColor: "#FFDADA",
    },
    {
      id: 2,
      title: "Vibrant Sampling Campaigns",
      description:
        "Engage users through personalized, high-energy sampling events tailored for youth interests.",
      imgSrc: "/Images/icons/rocket.png",
      color: "#E5F4FF",
      hoverColor: "#D3ECFF",
    },
    {
      id: 3,
      title: "High Conversion Rates",
      description:
        "80%+ product adoption and user engagement driven by trust and peer recommendations",
      imgSrc: "/Images/icons/increase.png",
      color: "#E5FFEA",
      hoverColor: "#D1FFD9",
    },
    {
      id: 4,
      title: "Social Media Amplification",
      description:
        "Boost your brand with 500K+ social media shares and viral campaigns.",
      imgSrc: "/Images/icons/social-media.png",
      color: "#F4E5FF",
      hoverColor: "#ECD3FF",
    },
    {
      id: 5,
      title: "Community-Driven Growth",
      description:
        "Leverage authentic word-of-mouth marketing through our strong campus ambassador network.",
      imgSrc: "/Images/icons/community.png",
      color: "#FFF5E5",
      hoverColor: "#FFECD3",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 px-4 pt-14 lg:py-14 lg:px-20 space-y-10">

      <Slide direction="up">
        <HeadingOne>Why partner with us</HeadingOne>
      </Slide>
      <motion.div
        className="flex flex-wrap items-stretch justify-center gap-6 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {data.map((item, index) => (
          <Zoom key={item.id} delay={index * 100}  className="w-full max-w-sm">
            <motion.div

              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="flex flex-col p-6 rounded-2xl w-full h-full shadow-lg"
              style={{
                backgroundColor: hoveredCard === item.id ? item.hoverColor : item.color,
                transition: "all 0.3s ease"
              }}
            >
              <div className="flex flex-col items-center gap-10 justify-center h-full">
                <motion.div
                  className="relative w-32 h-32"
                  animate={{
                    y: hoveredCard === item.id ? [0, -8, 0] : 0
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredCard === item.id ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                >
                  <Image
                    fill
                    alt={item.description}
                    className="object-contain drop-shadow-md"
                    priority={true}
                    src={item.imgSrc}
                  />

                  <motion.div
                    className="absolute -inset-4 rounded-full opacity-50 -z-10"
                    style={{ backgroundColor: "white" }}
                    animate={{
                      scale: hoveredCard === item.id ? [0.8, 1, 0.8] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: hoveredCard === item.id ? Infinity : 0,
                    }}
                  />
                </motion.div>

                <div className="space-y-3 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="font-medium text-gray-700">{item.description}</p>
                </div>
              </div>
            </motion.div>
          </Zoom>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyPartnerWithUs;