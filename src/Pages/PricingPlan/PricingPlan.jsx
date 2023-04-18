import React from "react";
import PricingPlanCard from "./PricingPlanCard";
import ScrollToTop from "../../hooks/ScrollToTop";

const PricingPlan = () => {
  return (
    <div className="bg-bodyColor">
      <ScrollToTop />
      {/* pricingplan section start here */}
      <div className="text-center pt-28">
        <h1 className="lg:text-6xl text-white font-Cuprum font-bold">
          Pricing Plan
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Pricing Plan
        </p>
      </div>

      {/*pricing Card  here*/}
      <div className="pt-12 pb-16 ">
        <PricingPlanCard />
      </div>
    </div>
  );
};

export default PricingPlan;
