import React from "react";
import icon1 from "../../assets/approach/approach1.svg";
import icon2 from "../../assets/approach/approach2.svg";
import icon3 from "../../assets/approach/approach3.svg";
import icon4 from "../../assets/approach/approach4.svg";
import ArrowRight from "../../assets/ArrowRight.svg";

import ApproachCard from "./ApproachCard";
function Approaches() {
  const datas = [
    {
      _id: 1,
      icon: icon1,
      title: "Increased & Evolving Threat",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat",
    },
    {
      _id: 2,
      icon: icon2,
      title: "Continuous Monitoring",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat",
    },
    {
      _id: 3,
      icon: icon3,
      title: "Structural Weaknesses",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat",
    },
    {
      _id: 4,
      icon: icon4,
      title: "Widening Attack Surface",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat",
    },
  ];
  return (
    <div className=" bg-bodyColor w-full  py-16 px-4  font-Cuprum text-white">
      {/******************************* approaches start here *******************************/}
      <h1 className="text-center text-3xl lg:text-5xl">
        Effective Approach for Your <br /> Cyber Security
      </h1>
      <div className="grid grid-cols-2  max-w-4xl mx-auto content-center items-center py-12">
        {datas?.map((data) => (
          <ApproachCard key={data._id} data={data} />
        ))}
      </div>
      <div className="w-full  flex items-center justify-center my-4">
        <button className="px-5 flex  items-center gap-4 max-w-max py-3 md:mx-0 mx-auto mt-3 bg-[#3657cd] text-lg text-white hover:text-[#3657cd] hover:bg-[#f9c747] duration-150 ">
          Explore all
          <img
            className="w-4  inline-block text-left transition-all duration-300 ease-in"
            src={ArrowRight}
            alt=""
          />
        </button>
      </div>
      {/******************************* approaches end here *******************************/}
    </div>
  );
}

export default Approaches;
