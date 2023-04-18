import React from "react";
import headerimg from "../../assets/header-img.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import Analize from "./HeaderBottoms/Analize";
import {BsArrowRightShort} from 'react-icons/bs'
function Header2() {
  return (
    // Header section Container
    <div className="w-full  min-h-max bg-bodyBlue bg-[url('https://i.ibb.co/3kWkNdd/background-2.png')] bg-no-repeat bg-left-bottom  sm:pt-20 md:pt-4 bg-fixed">
      <div className="w-full max-w-container mx-auto min-h-max pb-[200px] font-Cuprum py-[10px] lg:py-[110px] text-white   ">
        {/* Header content */}
        <div className="md:flex items-center max-w-6xl mx-auto  mb-6 p-2 lg:p-0 py-16">
          {/* Header Image */}
          <div className="lg:w-2/4 flex items-center justify-center mb-10 lg:mb-0 ">
            <img
              className="xs:w-5/5  sm:w-4/5 md:w-3/5 lg:w-4/5"
              src={headerimg}
              alt=""
            />
          </div>
          {/* Header Text */}
          <div className="lg:w-2/4 flex flex-col  justify-center">
            <h1 className="lg:text-7xl mb-4 text-3xl text-center lg:text-left font-bold">
            Defend Your <br className="hidden lg:block" /> <span className="text-[#f9c747]"> Business</span> Against
              <br className="hidden lg:block" />
              the Latest Cyber
              <br className="hidden lg:block" /> Threats
            </h1>
            <h2 className="text-sm max-w-md xs:mx-auto md:mx-auto lg:mx-0 lg:text-left text-center ">
              Nam libero tempore, cum soluta nobis eligendi optio cumque nihil
              impedit minus quod maxime placeat facere possimus quo assumenda
              omnis
            </h2>
            <button className="px-5 flex md:mx-auto items-center gap-2  max-w-max py-3 lg:mx-0 mx-auto mt-10 bg-[#f9c747] text-lg  hover:text-[#3657cd] hover:bg-white duration-300 ease-in">
              More About us
               <BsArrowRightShort size={25}/>
             
            </button>
          </div>
        </div>
        {/* Additional Header Content */}
        <Analize/>
      </div>
    </div>
  );
}

export default Header2;