import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Plans from "./pages/plans/plans";
import Services from "./pages/services/Services";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/services" element={<Services/>}/>
        
      </Routes>
    </>
  );
}

export default App;
