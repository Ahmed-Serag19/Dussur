import React from "react";

import { GlobeDemo } from "./GlobeComponent";
import Header from "./ui/Header";

const HeroSection = () => {
  return (
    <div className="z-10 mt-3 lg:mt-20" id="home">
      <GlobeDemo />
      <Header />
    </div>
  );
};

export default HeroSection;
