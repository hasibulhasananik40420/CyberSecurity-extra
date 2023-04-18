import React from "react";
import Servicesgrid from "../../Components/Services/Servicesgrid";
import ScrollToTop from "../../hooks/ScrollToTop";

const OurServices = () => {
  return (
    <div>
      <ScrollToTop />
      {/***************** our service section start here ***********************/}
      <div className="text-center pt-28 p-4">
        <h1 className="lg:text-5xl text-2xl text-white font-Cuprum font-bold">
          Our Services{" "}
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Our Services
        </p>
      </div>

      <div className="text-white text-md">
        <Servicesgrid />
      </div>
    </div>
  );
};

export default OurServices;
