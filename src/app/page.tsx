import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import PartnerCTA from "@/components/home/PartnerCTA";
import PopularServices from "@/components/home/PopularServices";
import ServiceCategories from "@/components/home/ServiceCategories";
import ServiceSearch from "@/components/home/ServiceSearch";
import Stats from "@/components/home/Stats";
import WhySevaNex from "@/components/home/WhySevaNex";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceSearch />
      <PopularServices />
      <ServiceCategories />
      <HowItWorks />
      <WhySevaNex />
      <Stats />
      <PartnerCTA />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Home;
