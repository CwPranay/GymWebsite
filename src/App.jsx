import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Plans from "./pages/plans/plans";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact"
import PersonalTraining from "./pages/personalTraining/PersonalTraining";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/personalTraining" element={<PersonalTraining/>}/>
        
      </Routes>
    </>
  );
}

export default App;
