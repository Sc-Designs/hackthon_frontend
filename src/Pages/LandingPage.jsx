import React from 'react'

import HeroSection from '../Components/HeroSection'
import ServicesSection from '../Components/ServicesSection'
import ReviewSection from '../Components/ReviewSection'
import Footer from '../Components/Footer'
import BlogList from '../Components/BlogList'

const LandingPage = () => {
  return (
   <div>
        <HeroSection />
        <ServicesSection />
        <BlogList/>
        <ReviewSection />
 

    
   </div>
   
    
  )
}

export default LandingPage