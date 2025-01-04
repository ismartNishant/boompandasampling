'use client'
import React from 'react';
import { Slide } from 'react-awesome-reveal';

const HeadingOne: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Slide direction='down'>
      <h1 className="text-2xl lg:text-4xl tracking-wide bebas-neue-regular">
        {children}
      </h1>
    </Slide>
  );
};

export default HeadingOne;
