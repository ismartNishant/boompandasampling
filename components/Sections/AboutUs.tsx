"use client";
import React from "react";
import { Zoom } from "react-awesome-reveal";

import HeadingOne from "../Headings/HeadingOne";

const AboutUs = () => {
  return (
    <section
      className="p-5 pt-16 sm:pt-0 lg:p-24 "
      id="about-us"
    >
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 text-center">
        <HeadingOne>
          What is BOOM<span className="text-primary uppercase">Sampling </span>
        </HeadingOne>
        <Zoom>
          <p className="font-medium text-gray-6 text-sm lg:text-lg w-full max-w-screen-lg">
            Boom Sampling is a cutting-edge product sampling platform tailored
            for youth-focused brands. It connects you with a dynamic,
            ready-to-engage audience while offering real-time insights through
            sleek digital dashboards. From tracking inventory and campaign
            spending to capturing authentic youth feedback, Boom Sampling helps
            you create impactful connections and drive results seamlessly.
          </p>
        </Zoom>
      </div>
    </section>
  );
};

export default AboutUs;
