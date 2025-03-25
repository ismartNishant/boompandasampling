'use client'
import React from 'react';
import { Slide } from 'react-awesome-reveal';

interface HeadingOneProps {
  children: React.ReactNode;
  className?: string;
}

const HeadingOne: React.FC<HeadingOneProps> = ({ children, className = "text-center" }) => {
  return (
    <Slide direction='down'>
      <h1 className={`text-2xl md:text-5xl font-bold w-auto  mb-5 lg:mb-16 relative ${className}`}>
        {children}
        <span className={`absolute -bottom-4 ${className?.includes("text-center") ? "inset-x-0 mx-auto" : "left-0"} w-24 h-1 bg-gradient-to-r from-primary to-pink-200 rounded-full`}></span>
      </h1>
    </Slide>
  );
};

export default HeadingOne;
