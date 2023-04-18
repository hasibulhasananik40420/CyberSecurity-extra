import React from "react";
import ArrowRight from "../../assets/ArrowRight.svg";

function Header3() {
  return (
    // Header section Container
    <div className="w-full min-h-screen  xl:min-h-max max-h-screen  bg-bodyColor pt-24 bg-[url('https://i.ibb.co/H7cJSLd/background-1.png')] bg-cover bg-no-repeat bg-fixed  ">
      <div className="w-full max-w-container mx-auto min-h-max pb-[200px] font-Cuprum  py-[30px] text-white   ">
        {/* Header content */}
        <div className="lg:flex w-full justify-center mx-auto items-center  mb-8 pt-10 mt-6 ">
          {/* Header Text */}
          <div className="max-w-6xl w-full px-2 flex flex-col items-center justify-center ">
            <h1 className="lg:text-7xl xl:text-7xl 2xl:text-[90px] mb-4 text-4xl text-center  font-bold">
            We Help to Protect <br className="hidden lg:block" /> Modern  <span className="text-[#f9c747]"> Information </span>
              <br className="hidden lg:block" />
              From Hackers
            </h1>
            <h2 className="text-sm text-center max-w-md ">
            Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat facere possimus assumenda omnis repellendu
            </h2>
            <button className="px-5 flex md:mx-auto items-center gap-4  max-w-max py-3 lg:mx-0 mx-auto mt-10 bg-bodyBlue text-lg  hover:text-[#3657cd] hover:bg-white duration-300 ">
            Chat With Us
              <img
                className="w-4 fill-black  inline-block text-left transition-all duration-300 ease-in"
                stroke="black"
                src={ArrowRight}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header3;