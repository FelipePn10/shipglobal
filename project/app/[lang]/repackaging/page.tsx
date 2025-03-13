"use client";

import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProcessSteps from "./components/ProcessSteps";

import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Statistics from "./components/Statistics";

const RepackagingPage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <Benefits />
      <ProcessSteps />
      <Statistics />
      <FAQ />
      <CallToAction />
      <Testimonials />
    </div>
  );
};

export default RepackagingPage;