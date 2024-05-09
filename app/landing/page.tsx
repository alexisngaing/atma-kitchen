import Category from "@/components/landing/Category";
import Etc from "@/components/landing/Etc";
import Hero from "@/components/landing/Hero";
import Recommendation from "@/components/landing/Recommendation";
import React from "react";

const Landing = () => {
  return (
    <>
      <Hero />
      <Category />
      <Recommendation />
      <Etc />
    </>
  );
};

export default Landing;
