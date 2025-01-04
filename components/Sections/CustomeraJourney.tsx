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
        },
        {
            id: 2,
            title: "Fill Out a Form",
            description: " A quick, user-friendly form captures their details, ensuring a personalized experience while keeping the process effortless.",
            image: "/Images/journey/form.webp",
        },
        {
            id: 3,
            title: "Experience the Product",
            description: "Customers receive and try the product, immersing themselves in its features and benefits.",
            image: "/Images/journey/sample.webp",
        },
        {
            id: 4,
            title: "Share Feedback",
            description: " After experiencing the product, they provide valuable feedback through an intuitive digital platform, empowering brands with actionable insights.",
            image: "/Images/journey/review.webp",
        },
    ];



    return (
        <section className='px-4 pt-16 pb-10 lg:py-20  lg:px-20 space-y-5 lg:space-y-10' id='how-it-works'>
            <HeadingOne>Your customer&apos;s journey</HeadingOne>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
                {JourneyData.map((perk,index) => (
                    <Zoom key={perk.id} delay={index * 100} className="rounded-xl p-4 h-full flex flex-col items-center  group  bg-gradient-to-br from-primary-100/20 to-secondary-100/20">
                        <div className="overflow-visible px-2 lg:px-4 ">
                            <div className='w-full h-56  relative'>
                                <Image
                                    alt={perk.title}
                                    className=" rounded-xl object-contain group-hover:scale-105 duration-300 ease-in-out"
                                    src={perk.image}
                                    fill
                                />
                            </div>
                            <h1 className=" text-3xl mt-2 font-bubblegum text-center">{perk.title}</h1>
                        </div>
                    </Zoom>
                ))}
            </div>
        </section>
    )
}

export default CustomeraJourney