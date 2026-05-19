import React from "react";
import AboutStorySection from "../about/AboutStorySection";
import CareerOpportunities from "../about/CareerOpportunities";
import GovernmentRecognition from "../about/GovernmentRecognition";
import CampusCollab from "../about/CampusCollab";
import StatsSection from "../StatsSection";
import CustomerReviewsSection from "../about/CustomerReviewsSection";
import ProcessTimeline from "../about/ProcessTimeline";
import ProcessSection from "../about/ProcessSection";
import Teams from "../about/Teams";
import JourneyHero from "../about/JourneyHero";

function AboutUs() {
  return (
    <>
      <JourneyHero />
      <AboutStorySection />
      <StatsSection />
      <CareerOpportunities />
      <GovernmentRecognition />
      <ProcessTimeline />
      <CampusCollab />
      <ProcessSection />
      <Teams />
      <CustomerReviewsSection />
    </>
  );
}

export default AboutUs;
