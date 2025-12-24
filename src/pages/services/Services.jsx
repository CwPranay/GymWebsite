import React from "react";
import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";

import ServicesFor from "./ServicesFor";
import ServicesCTA from "./ServicesCTA";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesFor />
      <ServicesCTA />
    </>
  );
};

export default Services;
