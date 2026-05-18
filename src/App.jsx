import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import LatestWork from "./components/LatestWork";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import StatsSection from "./components/StatsSection";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/about/AboutUs";


function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-bg-dark relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <StatsSection/>
      <LatestWork />
      <Teams />
      <AboutUs/>
      <Contact />
      <FAQ />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
