'use client'
import React, { useRef, useState } from "react";
import HeadingOne from "../Headings/HeadingOne";
import { FaRegPlayCircle } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import { Zoom } from "react-awesome-reveal";

const SamplingExperience = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(false);

  // Function to handle play/pause
  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setIsControlsVisible(true); // Show video controls after play
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="px-4 pt-16 lg:px-20 space-y-5 lg:space-y-10">
      <HeadingOne>The sampling experience</HeadingOne>

      {/* Video container */}
      <div className="relative w-full h-56 lg:h-[600px] overflow-hidden rounded-xl lg:rounded-3xl shadow-white mx-auto">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-10"
          loop
          muted
          controls={isControlsVisible} // Display controls once video starts playing
        >
          <source src="/party.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Play Button Overlay */}
        {!isControlsVisible && (

          <div className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer">
            <Zoom> 
              <Button
              isIconOnly
              variant="ghost"
              color="primary"
              onClick={handlePlayClick}
              className="h-36 w-36 text-6xl bg-primary/25"
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
