import React from "react";
import blogimage1 from "../../assets/blogs/blog1.svg";
import blogimage2 from "../../assets/blogs/blog2.svg";
import blogimage3 from "../../assets/blogs/blog3.svg";
import blogimage4 from "../../assets/blogs/blog4.svg";
import blogimage5 from "../../assets/blogs/blog5.svg";
import blogimage6 from "../../assets/blogs/blog6.svg";
import blogimage7 from "../../assets/blogs/blog7.svg";
import blogimage8 from "../../assets/blogs/blog8.svg";
import blogimage9 from "../../assets/blogs/blog9.svg";
import blogimage10 from "../../assets/blogs/blog10.svg";
import blogimage11 from "../../assets/blogs/blog11.svg";
import blogimage12 from "../../assets/blogs/blog12.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OurBlogCard = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-container mx-auto overflow-hidden pl-8 pb-32 cursor-pointer">
      <Slider  {...settings}>
        {/************** blog card 1 start now ***************/}
        <div className="max-w-[300px] pb-12">
          <img className="" src={blogimage1} alt="" />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Cybersecurity Attacks & the Transportation Industry
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>

        {/************** blog card 1 end now ***************/}
        {/************** blog card 2 start now ***************/}
        <div className="max-w-[300px]">
          <img className="" src={blogimage2} alt="" />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Vulnerability Disclosure: New Toolkit Available
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 2 end now ***************/}
        {/************** blog card 3 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage3}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Cybersecurity Attacks & the Transportation Industry
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 3 end now ***************/}
        {/************** blog card 4 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage4}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            How to Create an Effective Cybersecurity Policy
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 4 end now ***************/}

        {/************** blog card 5 start now ***************/}
        <div className="max-w-[300px] ">
          <img src={blogimage5} alt="" />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Security Architecture and Design Reviews
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 5 end now ***************/}
        {/************** blog card 6 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage6}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Cyber Security Earnings and Career Trends
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 6 end now ***************/}
        {/************** blog card 7 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage7}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Technology Takeover: How to Secure IoT Environments
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 7 end now ***************/}
        {/************** blog card 8 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage8}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Meltdown and Spectre Check tool for Windows
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 8 end now ***************/}
        {/************** blog card 9 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage9}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Five Strategies to Optimize Cloud Security in 2019
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 9 end now ***************/}
        {/************** blog card 10 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage10}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Meltdown and Spectre Check tool for Windows
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 10 end now ***************/}
        {/************** blog card 11 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage11}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            What You Don’t Know About Facebook’s Outage
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 11 end now ***************/}
        {/************** blog card 12 start now ***************/}
        <div className="max-w-[300px] ">
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={blogimage12}
            alt=""
          />
          <h1 className="text-white font-Cuprum font-semibold text-2xl mt-4">
            Businesses Hit By Remote Working Breaches
          </h1>
          <p className="text-sm font-medium text-textYellow mt-3 font-Inter">
            March 17, 2022
          </p>
        </div>
        {/************** blog card 12 end now ***************/}

        {/* </div> */}
      </Slider>
    </div>
  );
};

export default OurBlogCard;
