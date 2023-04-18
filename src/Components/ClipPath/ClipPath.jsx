import React from "react";
import Marquee from "react-fast-marquee";
import { useLocation } from "react-router-dom";
const ClipPath = () => {
  const location = useLocation();
  return (
    <div className="max-w-container mx-auto">
      {/********************* Clip path section start  here **************************/}
      <div className="max-w-full pt-8 pb-8 overflow-hidden min-h-max">
        <div
          className={`bg-[#3657CD] h-16  ${
            location.pathname == "/home-two" ? "-rotate-3 " : "rotate-3"
          } overflow-hidden my-12`}
        >
          <Marquee speed={100} gradient={false}>
            <div className="flex flex-wrap justify-center items-center gap-3 py-2">
              <p className="text-textYellow text-[35px]"> * </p>
              <p className="text-white font-Cuprum text-[20px] uppercase font-bold">
                We are always ready to protect your data
              </p>
              <p className="text-textYellow text-[35px]">*</p>
              <p className="text-white font-Cuprum text-[20px] uppercase font-bold">
                We are always ready to protect your data
              </p>
              <p className="text-textYellow text-[35px]">*</p>
              <p className="text-white font-Cuprum text-[20px] uppercase font-bold">
                We are always ready to protect your data
              </p>
              <p className="text-textYellow text-[35px] "> * </p>
              <p className="text-white font-Cuprum text-[20px] uppercase font-bold">
                We are always ready to protect your data
              </p>
            </div>
          </Marquee>
        </div>
      </div>

      {/********************* Clip path section end  here **************************/}
    </div>
  );
};

export default ClipPath;
