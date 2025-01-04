'use client'
import React from 'react';
import HeadingOne from '../Headings/HeadingOne';
import { Player } from '@lottiefiles/react-lottie-player';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const perksData = [
    {
        id: 1,
        title: "Millions within reach",
        description:
            " Connect with a vast network of youth across schools, colleges, and events curated by BoomPanda, creating unmatched brand visibility.",
        image: "/Images/perks/reach.json", // Replace with actual image path
    },
    {
        id: 2,
        title: "Real-time tracking",
        description:
            " Leverage data insights through personalized dashboards to monitor your sampling campaigns' impact in real-time.",
        image: "/Images/perks/analytics.json", // Replace with actual image path
    },
    {
        id: 3,
        title: "Awareness and re-marketing",
        description:
            "Engage with an active Gen Z audience at multiple touchpoints and reconnect seamlessly via Instagram, WhatsApp, and email campaigns.",
        image: "/Images/perks/awareness.json", // Replace with actual image path
    },
    {
        id: 4,
        title: "Genuine feedback",
        description:
            "Collect actionable feedback from young testers. Enthusiastic users often turn into brand ambassadors, driving organic buzz for your product.",
        image: "/Images/perks/reviews.json", // Replace with actual image path
    },
];

const PerksOfSampling = () => {
    return (
        <section className="px-4 pt-14 lg:px-20 lg:space-y-5">
            <HeadingOne>Perks of Sampling</HeadingOne>
            <div className="space-y-10">
                <Fade>
                    <p className="text-gray-600 font-extrabold  w-full lg:w-1/2  test-base lg:text-lg">
                        Strategised campaigns to target the right audience, understand sentiments, and use those findings for a cost-effective launch.
                    </p>
                </Fade>
                <div className="grid  mx-auto justify-center gap-5 lg:gap-0">
                    {perksData.map((perk, index) => (
                        <div key={perk.id}
                            className={`max-w-screen-xl gap-5 border-2 lg:border-none p-2 lg:p-0 rounded-2xl lg:gap-10  flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center space-y-4 lg:space-y-0 justify-between`} >

                            <Zoom> <Player
                                className="w-full max-w-lg  "
                                autoplay
                                loop
                                src={perk.image}
                            >
                            </Player>
                            </Zoom>

                            {/* Content Section */}
                            <Fade  className='w-full lg:w-1/2'>
                                <div className="flex flex-col gap-3 lg:gap-5 justify-center  bg-gradient-to-br from-primary-300  px-2 lg:px-5 py-5 lg:py-16 to-primary text-white rounded-xl">
                                    <Slide direction='down'> <h2 className="text-4xl lg:text-5xl font-semibold font-bubblegum">{perk.title}</h2></Slide>
                                    <Slide direction='down'><p className="text-lg">{perk.description}</p></Slide>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PerksOfSampling;
