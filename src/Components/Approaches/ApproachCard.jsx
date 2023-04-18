import React, { useState } from "react";
import ArrowRight from "../../assets/ArrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
function ApproachCard({ data }) {
  const [active, setActive] = useState();
  const navigate = useNavigate("");
  return (
    <div
      onMouseLeave={() => setActive("")}
      onMouseEnter={() => setActive(`${data?._id}`)}
      onClick={() => navigate(`service/${data?._id}`)}
      className={` md:h-48 bg-[#00172f] sm:border md:border xl:border-0 z-50 p-4  hover:shadow-lg hover:custom-shadow hover:scale-105 duration-500 py-14  flex flex-col  hover:border-none border-blue-900 
      ${data?._id == 1 && "xl:border-r  xl:border-b "}
      ${data?._id == 2 && "  xl:border-b"}
      ${data?._id == 3 && "xl:border-r  "}
      `}
    >
      {/******************************* approaches card start here *******************************/}
      <div
        className={`md:flex md:text-right  gap-3 justify-between ${
          data?._id == 2 && "md:flex-row-reverse md:text-start"
        } ${data?._id == 4 && "md:flex-row-reverse md:text-start"} `}
      >
        <div>
          <img
            className=" w-5/12 lg:w-3/12 md:hidden block"
            src={data?.icon}
            alt=""
          />
          <h3 className="  text-md">{data?.title}</h3>
          <h3 className=" text-sm mt-5">{data?.shortDescription}</h3>
        </div>
        <img className="w-3/12 hidden md:block" src={data?.icon} alt="" />
      </div>
      <div className="min-h-[10px] hidden w-full md:flex justify-end px-7">
        {active == `${data?._id}` && (
          <Link>
            {/* <img
              className="w-4 mt-3 text-left transition-all duration-300 ease-in"
              src={ArrowRight}
              alt=""
            /> */}
            {/* not need */}
          </Link>
        )}
      </div>
      {/******************************* approaches card end here *******************************/}
    </div>
  );
}

export default ApproachCard;
