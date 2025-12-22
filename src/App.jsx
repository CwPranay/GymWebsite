import './App.css'
import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import ProgramsPreview from './components/ProgramsPreview'
import TrainersSection from './components/PersonalTraining'
import PlansSection from './components/PlansSection'
import TestimonialsSection from './components/TestimonialSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <WhyChooseUs/>
    <ProgramsPreview/>
    <TrainersSection/>
    <PlansSection/>
    <TestimonialsSection/>
    <FinalCTASection/>
    <Footer/>

    </>
  )
}

export default App
