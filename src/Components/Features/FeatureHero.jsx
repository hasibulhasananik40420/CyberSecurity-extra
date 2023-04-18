import React from "react";
import heroimg from "../../assets/syber1.svg";
import tickmark from "../../assets/tickmark.svg";

function FeatureHero() {
  return (
   <div className="bg-bodyColor">
     <div className="max-w-container mx-auto  w-full px-4 py-16   font-Cuprum bg-[url('https://i.ibb.co/V32mt3G/first.png')] bg-no-repeat bg-left">
      <div className="lg:flex w-full items-center flex-wrap mb-6">
      {/******************************* Hero Image *******************************/}
      <div className="lg:w-2/4 flex items-center justify-center mb-10 lg:mb-0">
          <img className="md:w-3/5 w-4/5" src={heroimg} alt="" />
        </div>
        {/******************************* Hero Text *******************************/}
        <div className="lg:w-2/4 flex flex-col ">
          <h1 className="lg:text-5xl  mb-4 text-3xl  xl:text-left  text-white  ">
            Our Agency Experts in <br className="hidden lg:block" /> Cyber Security & Data <br className="hidden lg:block" /> Management
          </h1>
          <h2 className="text-lg text-white  max-w-md mt-5">
            Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus
            quod maxime placeat facere possimus assumenda omnis dolor repellendu
            sautem Temporibus quibusdam et aut officiis nam libero tempore omnis
          </h2>
          <ul className="mt-5">
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Understand security and compliance
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Extremely low response time
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Always ready for your growth
            </li>
          </ul>
          {/******************************* Hero Button *******************************/}
          <button className="px-5 max-w-max py-2 mt-6 bg-[#3657cd] text-lg text-white hover:text-[#3657cd] hover:bg-white duration-300">More About us</button>
        </div>
        
      </div>
    </div>
   </div>
  );
}

export default FeatureHero;