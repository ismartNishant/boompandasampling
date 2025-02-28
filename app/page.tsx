'use client'
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/Sections/AboutUs'
import CustomeraJourney from '@/components/Sections/CustomeraJourney'
import EnquireNow from '@/components/Sections/EnquireNow'
import Faq from '@/components/Sections/Faq'
import Ourclients from '@/components/Sections/OurClients'
import PerksOfSampling from '@/components/Sections/PerksOfSampling'
import SamplingExperience from '@/components/Sections/SamplingExperience'
import WhyPartnerWithUs from '@/components/Sections/WhyPartnerWithUs'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <WhyPartnerWithUs />
      <PerksOfSampling />
      <SamplingExperience />
      <CustomeraJourney />
      <Ourclients />
      <Faq />
      <EnquireNow />
    </>
  )
}

export default page