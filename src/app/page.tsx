import Hero from '@/components/Hero'
import React from 'react'
import Skills from '@/components/Skills'

import AboutMe from '@/components/AboutMe'
import ThankYouSection from '@/components/ThankYou'
import Services from '@/components/Services'
import Education from '../app/../components/Education'

const page = () => {
  return (
    <div>
      <Hero/>
      <Skills/>
      <AboutMe/>
    <Education/>
      <ThankYouSection/>
      <Services/>

    </div>
  )
}

export default page
