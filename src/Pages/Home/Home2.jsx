import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header2 from "../../Components/HomeHeaders/Headers2";
import Approaches from "../../Components/Approaches/Approaches";
import FeatureHero from "../../Components/Features/FeatureHero";
import ClipPath from "../../Components/ClipPath/ClipPath";
import FollowingThreeSteps from "../AboutUs/FollowingThreeSteps";
import ExpertTeam from "../AboutUs/ExpertTeam";
import PricingPlanCard from "../PricingPlan/PricingPlanCard";
import Videos from "../../Components/HomeHeaders/videos";
import ScrollToTop from "../../hooks/ScrollToTop";
import Trusted from "../../Components/HomeHeaders/HeaderBottoms/Trusted";
import OurBlogCard from "../AboutUs/OurBlogCard";

const Home2 = () => {
  return (
    <div className="cuystom-gradient">
      <ScrollToTop />
      <Navbar></Navbar>
      <Header2 />
      <Approaches />
      <FeatureHero />
      <div className="bg-[#00172F]">
        <ClipPath />
      </div>
      <div className="bg-[#00172F]">
        <FollowingThreeSteps />
      </div>
      <ExpertTeam />
      <Videos />
      <div className="bg-bodyColor">
        <div className="text-center py-12 lg:w-1/3 w-full mx-auto">
          <h1 className="lg:text-4xl text-2xl text-white font-Cuprum font-bold">
            The Simplest Pricing Plan to Secure Your Data
          </h1>
        </div>
        <PricingPlanCard />
        <Trusted />
      </div>

      {/********************* blog  section start  here **************************/}
      <div className="bg-bodyColor">
        <div className="text-center pt-16 p-4">
          <h1 className="lg:text-4xl text-2xl text-white font-Cuprum font-bold">
            Get the Latest Articles and{" "}
          </h1>
          <h1 className="lg:text-4xl text-2xl pt-1 text-white font-Cuprum font-bold">
            News From Our Blog{" "}
          </h1>
        </div>

        {/********************* blog card section start  here **************************/}
        <div className="pt-8">
          <OurBlogCard />
        </div>

        {/********************* blog card section end  here **************************/}
      </div>
    </div>
  );
};

export default Home2;
