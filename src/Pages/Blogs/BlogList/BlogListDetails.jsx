import React from "react";
import bloglist1 from "../../../assets/blog list/blog list 1.svg";
import bloglist2 from "../../../assets/blog list/blog list 2.svg";
import bloglist3 from "../../../assets/blog list/blog list 3.svg";
import bloglist4 from "../../../assets/blog list/blog list 4.svg";
import bloglist5 from "../../../assets/blog list/blog list 5.svg";
import calendar from "../../../assets/blog list/Calendar blog list.svg";
import user from "../../../assets/blog list/User.svg";
import flag from "../../../assets/blog list/FlagBanner blog list.svg";
import recentPost1 from "../../../assets/blog details/recent post image 1.svg";
import recentPost2 from "../../../assets/blog details/recent post image 2.svg";
import recentPost3 from "../../../assets/blog details/recent post image 3.svg";
import recentPost4 from "../../../assets/blog details/recent post image 4.svg";
import searchIcon from "../../../assets/blog details/search icon.svg";

const BlogListDetails = () => {
  return (
    <div className="">
      <div className="lg:flex lg:justify-between lg:max-w-container lg:mx-auto lg:p-8 p-4">
        {/************************** 1st item start here ***************************/}

        <div className="lg:w-3/5 w-full">
          {/************************** 1st item card start here ***************************/}
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={bloglist1}
            alt=""
          />
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="lg:text-5xl text-2xl font-bold font-Cuprum text-white ">
              Five Strategies to Optimize Cloud Security in 2019
            </h1>

            <div className="flex flex-wrap gap-5">
              <span className="flex items-center gap-2">
                <img src={calendar} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  March 17, 2022
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={user} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  Amos Mack
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={flag} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  uncategorized
                </p>
              </span>
            </div>
          </div>

          {/************************** 1st item card end here ***************************/}

          {/************************** 2nd item card start here ***************************/}

          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300 mt-16"
            src={bloglist2}
            alt=""
          />
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="lg:text-5xl text-2xl font-bold font-Cuprum text-white ">
              The Challenge of Real-Time Cyber Protection
            </h1>

            <div className="flex flex-wrap gap-5">
              <span className="flex items-center gap-2">
                <img src={calendar} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  March 17, 2022
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={user} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  Amos Mack
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={flag} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  uncategorized
                </p>
              </span>
            </div>
          </div>

          {/*************************** 2nd item end here *******************/}

          {/************************** 3rd item card start here ***************************/}

          <img
            className="mix-blend-luminosity mt-16 hover:mix-blend-normal duration-300"
            src={bloglist3}
            alt=""
          />
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="lg:text-5xl text-2xl font-bold font-Cuprum text-white ">
              What You Don’t Know About Facebook’s Outage
            </h1>

            <div className="flex flex-wrap gap-5">
              <span className="flex items-center gap-2">
                <img src={calendar} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  March 17, 2022
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={user} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  Amos Mack
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={flag} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  uncategorized
                </p>
              </span>
            </div>
          </div>

          {/*************************** 3rd item end here *******************/}

          {/************************** 4th item card start here ***************************/}

          <img
            className="mix-blend-luminosity mt-16 hover:mix-blend-normal duration-300"
            src={bloglist4}
            alt=""
          />
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="lg:text-5xl text-2xl font-bold font-Cuprum text-white ">
              How to Create an Effective Cybersecurity Policy
            </h1>

            <div className="flex flex-wrap gap-5">
              <span className="flex items-center gap-2">
                <img src={calendar} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  March 17, 2022
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={user} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  Amos Mack
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={flag} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  uncategorized
                </p>
              </span>
            </div>
          </div>

          {/*************************** 4th item end here *******************/}

          {/************************** 5th item card start here ***************************/}

          <img
            className="mix-blend-luminosity mt-16 hover:mix-blend-normal duration-300"
            src={bloglist5}
            alt=""
          />
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="lg:text-5xl text-2xl font-bold font-Cuprum text-white ">
              Five Strategies to Optimize Cloud Security in 2019
            </h1>

            <div className="flex flex-wrap gap-5">
              <span className="flex items-center gap-2">
                <img src={calendar} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  March 17, 2022
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={user} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  Amos Mack
                </p>
                <span className="text-textYellow text-xl ml-4 lg:block hidden">
                  |
                </span>
              </span>

              <span className="flex items-center gap-2">
                <img src={flag} alt="" />
                <p className="text-textYellow text-sm font-medium font-Inter">
                  uncategorized
                </p>
              </span>
            </div>
          </div>

          {/*************************** 5th item end here *******************/}
        </div>

        {/*************************** 1st item end here *******************/}

        {/*************************** 2nd blog list sction start here *******************/}

        <div className="lg:w-1/3 w-full p-3 mt-10 lg:mt-0 ">
          <div className="relative w-full transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-[#192E44] cursor-pointer">
            <input
              type="text"
              placeholder="Search here"
              className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-4"
            />
            <img className="absolute top-0 right-5" src={searchIcon} alt="" />
          </div>

          <div className="mt-10">
            <h1 className="text-white font-Cuprum font-normal text-xl">
              Recent Posts
            </h1>

            {/******************* blog Recent Posts section start here ****************/}

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex gap-4 ">
                <span>
                  {" "}
                  <img
                    className="mix-blend-luminosity"
                    src={recentPost1}
                    alt=""
                  />
                </span>

                <span>
                  <h1 className="text-xl font-Cuprum font-bold text-white mt-1">
                    Five Strategies to Optimize Cloud Security in 2019
                  </h1>
                  <span className="flex items-center gap-2 mt-2">
                    <img src={calendar} alt="" />
                    <p className="text-textYellow text-sm font-medium font-Inter uppercase ">
                      March 17, 2022
                    </p>
                  </span>
                </span>
              </div>

              <div className="flex gap-4 ">
                <span>
                  {" "}
                  <img
                    className="mix-blend-luminosity"
                    src={recentPost2}
                    alt=""
                  />
                </span>

                <span>
                  <h1 className="text-xl font-Cuprum font-bold text-white mt-1">
                    Technology Takeover: How to Secure IoT Environments
                  </h1>
                  <span className="flex items-center gap-2 mt-2">
                    <img src={calendar} alt="" />
                    <p className="text-textYellow text-sm font-medium font-Inter uppercase ">
                      March 17, 2022
                    </p>
                  </span>
                </span>
              </div>

              <div className="flex gap-4">
                <span>
                  {" "}
                  <img
                    className="mix-blend-luminosity"
                    src={recentPost3}
                    alt=""
                  />
                </span>

                <span>
                  <h1 className="text-xl font-Cuprum font-bold text-white mt-1">
                    The Challenge of Real-Time Cyber Protection
                  </h1>
                  <span className="flex items-center gap-2 mt-2">
                    <img src={calendar} alt="" />
                    <p className="text-textYellow text-sm font-medium font-Inter uppercase ">
                      March 17, 2022
                    </p>
                  </span>
                </span>
              </div>

              <div className="flex gap-4 ">
                <span>
                  {" "}
                  <img
                    className="mix-blend-luminosity"
                    src={recentPost4}
                    alt=""
                  />
                </span>

                <span>
                  <h1 className="text-xl font-Cuprum font-bold text-white mt-1">
                    Cybersecurity Attacks & the Transportation Industry
                  </h1>
                  <span className="flex items-center gap-2 mt-2">
                    <img src={calendar} alt="" />
                    <p className="text-textYellow text-sm font-medium font-Inter uppercase ">
                      March 17, 2022
                    </p>
                  </span>
                </span>
              </div>

              {/******************* Popular Tags Posts section start here ****************/}
              <h1 className="text-white font-Cuprum font-normal text-xl mt-3">
                Popular Tags
              </h1>

              <div className="flex gap-4">
                <button className="bg-[#3657CD] px-4 py-1 text-white font-Inter">
                  uncategorized
                </button>

                <button className="bg-[#3657CD] px-4 py-1 text-white font-Inter">
                  security
                </button>
              </div>

              <div className="flex gap-4">
                <button className="bg-[#3657CD] px-4 py-1 text-white font-Inter">
                  Cyber
                </button>

                <button className="bg-[#3657CD] px-4 py-1 text-white font-Inter">
                  Development
                </button>

                <button className="bg-[#3657CD] px-4 py-1 text-white font-Inter">
                  Digital
                </button>
              </div>
              <div className="flex gap-4">
                <button className="bg-[#3657CD] px-4 py-1 text-white font-Inter">
                  Marketing
                </button>

                <button className="bg-[#3657CD] px-4 py-1 text-white font-Inter">
                  Innovation
                </button>
              </div>

              {/******************* Popular Tags Posts section end here ****************/}

              <h1 className="text-white font-Cuprum font-normal text-xl mt-6">
                Explore Categories
              </h1>

              <span className="flex flex-col gap-1">
                <p className="text-white font-Cuprum font-normal text-base uppercase">
                  Design
                </p>
                <p className="text-white font-Cuprum font-normal text-base uppercase">
                  Finance
                </p>
                <p className="text-white font-Cuprum font-normal text-base uppercase">
                  inTech
                </p>
                <p className="text-white font-Cuprum font-normal text-base uppercase">
                  Office
                </p>
                <p className="text-white font-Cuprum font-normal text-base uppercase">
                  News
                </p>
                <p className="text-white font-Cuprum font-normal text-base uppercase">
                  Marketing
                </p>
              </span>
            </div>

            {/******************* blog Recent Posts section end here ****************/}
          </div>
        </div>

        {/*************************** 2nd blog list sction start here *******************/}
      </div>
    </div>
  );
};

export default BlogListDetails;
