"use client";
import React from "react";
import { Zoom } from "react-awesome-reveal";

import HeadingOne from "../Headings/HeadingOne";

const AboutUs = () => {
  return (
    <section
      className="px-4 pt-16 lg:pt-20 lg:px-20 space-y-3 lg:space-y-5"
      id="about-us"
    >
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <HeadingOne>
          What is Boompanda<span className="text-primary">Sampling </span>
        </HeadingOne>
        <Zoom>
          <p className="font-semibold text-gray-6 test-sm lg:text-lg w-full max-w-screen-lg">
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
