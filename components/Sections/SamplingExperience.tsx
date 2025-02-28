'use client';
import React, { useRef, useState } from "react";
import HeadingOne from "../Headings/HeadingOne";
import { FaRegPlayCircle } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { Zoom } from "react-awesome-reveal";


const SamplingExperience = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="px-4 pt-16 lg:px-20 space-y-5 lg:space-y-10">
      <HeadingOne>The sampling experience</HeadingOne>

      {/* Video container */}
      <div className="relative w-full h-56 lg:h-[600px] overflow-hidden rounded-xl lg:rounded-3xl shadow-white mx-auto">
        {/* Video */}
        <video loop ref={videoRef} className="absolute inset-0 w-full h-full object-cover z-10" onClick={handlePlay}>
          <source src="/BoomSampling.mp4" type="video/mp4" />
          <track kind="captions" src="/captions.vtt" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay with Play Button (only when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-primary/10 flex items-center justify-center z-20">
            <Zoom>
              <Button
                isIconOnly
                variant="ghost"
                color="default"
                onClick={handlePlay}
                className="h-36 w-36 text-6xl bg-black/25 pointer-events-auto"
                radius="full"
              >
                <FaRegPlayCircle />
              </Button>
            </Zoom>
          </div>
        )}
      </div>
    </section>
  );
};

export default SamplingExperience;
