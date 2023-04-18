import React from "react";
import ExpertTeam from "./ExpertTeam";
import FollowingSteps from "./FollowingSteps";
import HeroFeaturContent from "./HeroFeaturContent";
import ScrollToTop from "../../hooks/ScrollToTop";

const AboutUs = () => {
  return (
    <div>
      <ScrollToTop />
      <HeroFeaturContent />
      <ExpertTeam />
      <FollowingSteps />
    </div>
  );
};

export default AboutUs;
