import React from "react";
import Hero from "@/components/landing/Hero";
import Category from "@/components/landing/Category";
import Recommendation from "@/components/landing/Recommendation";
import Etc from "@/components/landing/Etc";

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
