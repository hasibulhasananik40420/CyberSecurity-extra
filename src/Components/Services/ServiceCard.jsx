import React, { useState } from "react";
import ArrowRight from "../../assets/ArrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
function ServiceCard({ data }) {
  const [active, setActive] = useState();
  const navigate = useNavigate("");
  return (
    <div
      onMouseLeave={() => setActive("")}
      onMouseEnter={() => setActive(`${data?._id}`)}
      onClick={() => navigate(`service/${data?._id}`)}
      className={`shadow bg-[#00172f] max-w-[240px] max-h-[278px] sm:border md:border xl:border-0 z-50 p-4  xl:px-6 xl:py-14  hover:shadow-2xl hover:bg-hoverColor hover:custom-shadow duration-500 h-[278px] flex flex-col justify-center items-center hover:border-none border-[#192E44]
      ${data?._id == 1 && "xl:border-r  xl:border-b "}
      ${data?._id == 2 && "xl:border-r  xl:border-b"}
      ${data?._id == 3 && "xl:border-r  xl:border-b"}
      ${data?._id == 4 && "xl:border-r  xl:border-b"}
      ${data?._id == 5 && " xl:border-b"}
      ${data?._id == 6 && "xl:border-r  xl:border-b"}
      ${data?._id == 7 && "xl:border-r  xl:border-b"}
      ${data?._id == 8 && "xl:border-r  xl:border-b"}
      ${data?._id == 9 && "xl:border-r  xl:border-b"}
      ${data?._id == 10 && " xl:border-b"}
      ${data?._id == 11 && " xl:border-r"}
      ${data?._id == 12 && " xl:border-r"}
      ${data?._id == 13 && " xl:border-r"}
      ${data?._id == 14 && " xl:border-r"}
      `}
    >
      <img className="w-3/4 block mx-auto" src={data?.icon} alt="" />
      <h3 className="text-center -mt-4 text-md">{data?.title}</h3>
      <div className="min-h-[30px] ">
        {active == `${data?._id}` && (
          <Link>
            <img
              className="w-4 mt-3 text-left transition-all duration-300 ease-in"
              src={ArrowRight}
              alt=""
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;