import React from "react";
import FeatureCard from "./FeatureCard";
import icon1 from "../../assets/features/icon1.svg";
import icon2 from "../../assets/features/icon2.svg";
import icon3 from "../../assets/features/icon3.svg";
import icon4 from "../../assets/features/icon4.svg";

function Features() {
  const datas = [
    {
      _id: 1,
      title: "Malware Detection Removal",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque nihil impedit quo minus quod ",
      icon: icon1,
      link: `/feature/1`,
    },
    {
      _id: 2,
      title: "Content Delivery Network",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque nihil impedit quo minus quod ",
      icon: icon2,
      link: `/feature/2`,
    },
    {
      _id: 3,
      title: "Anytime Security Support",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque nihil impedit quo minus quod ",
      icon: icon3,
      link: `/feature/3`,
    },
    {
      _id: 4,
      title: "Managed Website Application",
      shortDescription:
        "Nam libero tempore, cum soluta nobis eligendi optio cumque nihil impedit quo minus quod ",
      icon: icon4,
      link: `/feature/4`,
    },
  ];

  return (
    <div className=" bg-bodyBlue w-full min-h-max py-16 px-4  font-Cuprum ">
      <div className=" text-white md:max-w-7xl  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6  ">
          {datas?.map((data) => (
            <FeatureCard key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
