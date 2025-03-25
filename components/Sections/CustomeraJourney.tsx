'use client'
import React from 'react'
import HeadingOne from '../Headings/HeadingOne'
import Image from 'next/image';
import { Zoom } from 'react-awesome-reveal';

const CustomeraJourney = () => {

    const JourneyData = [
        {
            id: 1,
            title: "QR code scan",
            description: "Customers seamlessly begin their journey by scanning a QR code at designated sampling points or online platforms.",
            image: "/Images/journey/scan.webp",
            gradient: "from-[#FF6B6B] to-[#FF8E8E]",
            lightGradient: "from-[#FFE8E8] to-[#FFF0F0]",
        },
        {
            id: 2,
            title: "Fill Out a Form",
            description: " A quick, user-friendly form captures their details, ensuring a personalized experience while keeping the process effortless.",
            image: "/Images/journey/form.webp",
            gradient: "from-[#4ECDC4] to-[#6CDDD6]",
            lightGradient: "from-[#E8F8F7] to-[#F0FBFA]",
        },
        {
            id: 3,
            title: "Experience the Product",
            description: "Customers receive and try the product, immersing themselves in its features and benefits.",
            image: "/Images/journey/sample.webp",
            gradient: "from-[#9B5DE5] to-[#B07EFF]",
            lightGradient: "from-[#F2E8FF] to-[#F7F0FF]",
        },
        {
            id: 4,
            title: "Share Feedback",
            description: " After experiencing the product, they provide valuable feedback through an intuitive digital platform, empowering brands with actionable insights.",
            image: "/Images/journey/review.webp",
            gradient: "from-[#FF9F45] to-[#FFB067]",
            lightGradient: "from-[#FFF0E3] to-[#FFF4EA]",
        },
    ];



    return (
        <section className='px-4 pt-16 pb-10 lg:py-20  lg:px-20 space-y-10' id='how-it-works'>
            <HeadingOne>Your customer&apos;s journey</HeadingOne>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-5 items-stretch p-2 xl:p-0 mt-5">
                {JourneyData.map((perk, index) => (
                    <Zoom key={perk.id} delay={index * 100} className={`rounded-xl p-4 h-full flex flex-col items-center  group  bg-gradient-to-r ${perk.lightGradient}`}>
                        <div className="overflow-visible px-2 lg:px-4 ">
                            <div className={`absolute -top-4 text-xl -left-2 w-16 h-16 rounded-2xl 
                             bg-gradient-to-r ${perk.gradient} 
                             flex items-center justify-center text-white font-bold
                             shadow-lg transform -rotate-12 group-hover:rotate-0
                             transition-all duration-300 z-10`}>
                                {index + 1}
                            </div>
                            <div className='w-full h-56  relative'>
                                <Image
                                    alt={perk.title}
                                    className=" rounded-xl object-contain group-hover:scale-105 duration-300 ease-in-out"
                                    src={perk.image}
                                    fill
                                />
                            </div>
                            <h1 className=" text-2xl mt-2 font-bold text-center">{perk.title}</h1>
                        </div>
                    </Zoom>
                ))}
            </div>
        </section>
    )
}

export default CustomeraJourney