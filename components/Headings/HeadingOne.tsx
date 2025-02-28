'use client'
import React from 'react';
import { Slide } from 'react-awesome-reveal';

const HeadingOne: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Slide direction='down'>
      <h1 className="text-2xl lg:text-3xl  font-semibold uppercase">
        {children}
      </h1>
    </Slide>
  );
};

export default HeadingOne;
