'use client'
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";

import HeadingOne from "../Headings/HeadingOne";
import { Zoom } from "react-awesome-reveal";
const WhyPartnerWithUs = () => {
  const data = [
    {
      id: 1,
      title: "Direct Access to Gen Z & Millennials",
      description:
        "Reach 5M+ active students and young professionals across 100+ colleges and cities",
      imgSrc: "/Images/icons/target.png",
    },
    {
      id: 2,
      title: "Vibrant Sampling Campaigns",
      description:
        "Engage users through personalized, high-energy sampling events tailored for youth interests.",
      // icon: <HiOutlineRocketLaunch  className="" />,
      imgSrc: "/Images/icons/rocket.png",
    },
    {
      id: 3,
      title: "High Conversion Rates",
      description:
        "80%+ product adoption and user engagement driven by trust and peer recommendations",
      // icon: <PiChartLineUpBold className="" />,
      imgSrc: "/Images/icons/increase.png",
    },
    {
      id: 4,
      title: "Social Media  Amplification",
      description:
        "Boost your brand with 500K+ social media shares and viral campaigns.",
      // icon: <BsFuelPump  className="text-5xl" />,
      imgSrc: "/Images/icons/social-media.png",
    },
    {
      id: 5,
      title: "Community-Driven Growth",
      description:
        " Leverage authentic word-of-mouth marketing through our strong campus ambassador network.",
      // icon: <RiShoppingCart2Line className="" />,
      imgSrc: "/Images/icons/community.png",
    },
  ];

  return (
    <section className="px-4  pt-14 lg:py-14 lg:px-20 space-y-5 lg:space-y-10 ">
      <HeadingOne>Why partner with us</HeadingOne>

      <div className="flex flex-wrap items-stretch justify-center gap-8">
        {data.map((item,index) => (
          <Zoom key={item.id} delay={index * 100} className="flex flex-col p-4  group  rounded-xl w-full max-w-[430px] hover:bg-gradient-to-bl bg-gradient-to-br from-primary-400/5 to-secondary-400/10">
            <div className="flex flex-col items-center gap-10 justify-center h-full ">
              <div className="relative w-40 h-40 ">
                <Image
                  fill
                  alt={item.description}
                  className="object-cover group-hover:scale-105 duration-300 ease-in-out"
                  priority={true} // Optional: Ensures the image loads quickly
                  src={item.imgSrc}
                />
              </div>
              <div className="space-y-2 ">
                <h1 className="text-3xl leading-8 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent font-bubblegum">  {item.title} </h1>
                <p className=" font-extrabold text-gray-700">{item.description}</p>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
      {/* <div className="flex flex-wrap items-stretch justify-center gap-5">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        className=" flex flex-col p-1 hover:scale-105 duration-300 ease-in-out w-full max-w-sm bg-gradient-to-br from-primary-500/50 to-secondary-400/50"
                    >
                        <CardBody className="flex flex-col items-center gap-5 justify-center h-full bg-white rounded-xl">
                            <div className="relative w-40 h-40 ">
                                <Image
                                    fill
                                    alt={item.description}
                                    className="object-cover"
                                    priority={true} // Optional: Ensures the image loads quickly
                                    src={item.imgSrc}
                                />
                            </div>
                            <div className="space-y-2 ">

                                {item.title}

                                <p className=" text-gray-600">{item.description}</p>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div> */}
    </section>
  );
};

export default WhyPartnerWithUs;

//
