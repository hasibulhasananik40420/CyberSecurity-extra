import React from "react";
import { Link } from "react-router-dom";
function FeatureCard({data}) {
  return (
    <div className=" font-Cuprum rounded-md hover:bg-bodyColor cursor-pointer scale-105 duration-500 p-4 transition-all ease-linear">
      {/******************************* Icon Here *******************************/}
      <img className="w-4/12" src={data?.icon} alt="" />

      {/******************************* Title *******************************/}
      <h3 className="ml-3 text-2xl ">{data?.title}</h3>

      {/******************************* Short Descriptions *******************************/}
      <h3 className="ml-3 text-sm mt-3 ">
      {data?.shortDescription}
      </h3>
      {/******************************* Learn More Link *******************************/}
      <Link className="border-b mt-4 text-sm ml-3" to={`${data?.link}`}>Learn More</Link>
    </div>
  );
}

export default FeatureCard;