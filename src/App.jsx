import './App.css'
import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import ProgramsPreview from './components/ProgramsPreview'
import TrainersSection from './components/PersonalTraining'

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <WhyChooseUs/>
    <ProgramsPreview/>
    <TrainersSection/>

    </>
  )
}

export default App
