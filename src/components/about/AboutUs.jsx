import React from "react";
// import ProcessTimeline from "../ProcessTimeline";
import AboutStorySection from "./AboutStorySection";
import CareerOpportunities from "./CareerOpportunities";
import GovernmentRecognition from "./GovernmentRecognition";

function AboutUs() {
  return (
    <div id="about-us" className="pt-30">
      <AboutStorySection/>
      <CareerOpportunities/>
      {/* <ProcessTimeline /> */}
      <GovernmentRecognition/>
    </div>
  );
}

export default AboutUs;
