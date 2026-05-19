import React from "react";
import Services from "../Services";
import Hero from "../Hero";
import TrustedBy from "../TrustedBy";
import LatestWork from "../LatestWork";
import FAQ from "../FAQ";
import Contact from "../Contact";
import { company_logos } from "../../assets/assets";

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy
        badge="Trusted Worldwide"
        title="Trusted by Leading Companies"
        logos={company_logos}
      />
      <Services />
      <LatestWork />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
