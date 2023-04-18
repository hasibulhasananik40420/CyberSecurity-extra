import React from "react";
import Trusted from "./HeaderBottoms/Trusted";
import syber from "../../assets/syber.svg";
import ArrowRight from "../../assets/ArrowRight.svg";

function Header1() {
  return (
    // Header section Container
    <div className="w-full  min-h-max bg-[url('https://i.ibb.co/FVJtgPj/headerbackground.jpg')] bg-no-repeat bg-right bg-cover bg-bodyColor sm:pt-20 md:pt-4 bg-fixed">
      <div className="w-full max-w-container mx-auto min-h-max pb-[200px] font-Cuprum py-[10px] lg:py-[110px] text-white   ">
        {/* Header content */}
        <div className="lg:flex max-w-6xl mx-auto items-center flex-wrap flex-row-reverse mb-8 lg:pb-16 pt-10 mt-6">
          {/* Header Image */}
          <div className="lg:w-2/4 flex items-center justify-center mb-10 lg:mb-0 ">
            <img
              className="xs:w-5/5  sm:w-4/5 md:w-3/5 lg:w-4/5"
              src={syber}
              alt=""
            />
          </div>
          {/* Header Text */}
          <div className="lg:w-2/4 flex flex-col  justify-center">
            <h1 className="lg:text-7xl mb-4 text-3xl text-center lg:text-left font-bold">
              We Can Be Your <br className="hidden lg:block" /> Partner in{" "}
              <br className="hidden lg:block" />
              <span className="text-[#f9c747]"> Reducing</span> Cyber
              <br className="hidden lg:block" /> Security Risk
            </h1>
            <h2 className="text-sm max-w-md xs:mx-auto md:mx-auto lg:mx-0 lg:text-left text-center ">
              Nam libero tempore, cum soluta nobis eligendi optio cumque nihil
              impedit minus quod maxime placeat facere possimus quo assumenda
              omnis
            </h2>
            <button className="px-5 flex md:mx-auto items-center gap-4  max-w-max py-2 lg:mx-0 mx-auto mt-10 bg-bodyBlue text-lg  hover:text-white hover:bg-textYellow duration-300 ">
              More About us
              <img
                className="w-4 fill-black  inline-block text-left transition-all duration-300 ease-in"
                stroke="black"
                src={ArrowRight}
                alt=""
              />
            </button>
          </div>
        </div>
        {/* Company logos */}
        <Trusted />
      </div>
    </div>
  );
}

export default Header1;