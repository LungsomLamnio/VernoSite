import React from "react";
import Hero from "../components/home/Hero";
import TrafficSolutions from "../components/home/TrafficSolutions";
import WhatWeBuild from "../components/home/WhatWeBuild";
import Services from "../components/home/Services";
import About from "../components/home/About";
import MeetTheTeam from "../components/team/MeetTheTeam";
const Home = () => {
  return (
    <>
      <Hero />
      <TrafficSolutions />
      <WhatWeBuild />
      <Services />
      <About />
      <MeetTheTeam />
    </>
  );
};

export default Home;