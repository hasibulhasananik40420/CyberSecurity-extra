import React from "react";
import blogimage from "../../assets/blog details/blog details image.svg";
import calendar from "../../assets/blog details/CalendarBlank.svg";
import user from "../../assets/blog details/User.svg";
import flag from "../../assets/blog details/FlagBanner.svg";
import commonIconBlogs from "../../assets/blog details/common icon blogs .svg";
import linkedinIcon from "../../assets/footer/Linkedin.svg";
import twitterIcon from "../../assets/footer/Twitter.svg";
import facebookIcon from "../../assets/footer/facebook (2).svg";
import blogManImage from "../../assets/blog details/blog man image .svg";
import blogReplyIcon from "../../assets/blog details/replyIcon.svg";
import searchIcon from "../../assets/blog details/search icon.svg";
import recentPost1 from "../../assets/blog details/recent post image 1.svg";
import recentPost2 from "../../assets/blog details/recent post image 2.svg";
import recentPost3 from "../../assets/blog details/recent post image 3.svg";
import recentPost4 from "../../assets/blog details/recent post image 4.svg";
import comment1Blog from "../../assets/blogs/comment 1 blog.svg";
import comment2Blog from "../../assets/blogs/comment 2 blog.svg";
const BlogDetailsCard = () => {
  return (
    <div className="lg:flex lg:justify-between lg:max-w-container lg:mx-auto lg:p-8 p-4 ">
      {/************************** 1st item start here *************************************/}
      <div className="lg:w-3/5 w-full">
        <img
          className="mix-blend-luminosity hover:mix-blend-normal duration-300"
          src={blogimage}
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

          <p className="text-base text-[#99A2AC] font-Inter leading-7 mt-5">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat possimus omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            aut officiis debitis aut necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur
          </p>

          <p className="text-base text-[#99A2AC] font-Inter leading-7 mt-5">
            Accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi laborum
            dolorum fuga harum quidem expedita distinctio
          </p>

          <div className="flex items-center gap-5">
            <img className="w-12 h-12" src={commonIconBlogs} alt="" />
            <p className="text-white font-base font-Cuprum text-lg leading-7">
              “Temporibus autem quibusdam aut officiis debitis aut
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae”
            </p>
          </div>

          <p className="text-base text-[#99A2AC] font-Inter leading-7 mt-5">
            Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi laborum dolorum fuga harum quidem
            expedita distinctio
          </p>

          <p className="text-base text-[#99A2AC] font-Inter leading-7 mt-5">
            Cum soluta nobis est eligendi optio cumque nihil impedit quo minus
            id quod maxime placeat possimus omnis voluptas est omnis dolor
            repellendus. Temporibus autem quibusdam aut officiis debitis aut
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-white uppercase font-Cuprum font-normal">
              Share:
            </span>
            {/**************** blogs icon start here *******************/}
            <span className="flex items-center gap-2">
              <p className="w-8 h-8 rounded-full bg-iconBackground flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 ">
                {" "}
                <img className="" src={facebookIcon} alt="" />
              </p>
              <p className="w-8 h-8 rounded-full bg-iconBackground flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 ">
                {" "}
                <img className="" src={twitterIcon} alt="" />
              </p>
              <p className="w-8 h-8 rounded-full bg-iconBackground flex justify-center items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 ">
                {" "}
                <img className="" src={linkedinIcon} alt="" />
              </p>
            </span>
            {/**************** blog icon end here *******************/}
          </div>

          {/***************** border line  ****************************/}
          <span className="w-full h-1 border-b border-b-[#192E44] mt-8"></span>
          {/***************** border line  ****************************/}

          {/******************* blog Author section start here ****************/}

          <div className="flex items-center gap-4 mt-6">
            <span>
              {" "}
              <img className="" src={blogManImage} alt="" />
            </span>

            <span>
              <p className="text-textYellow font-Inter font-medium text-sm uppercase">
                Author
              </p>
              <h1 className="text-xl font-Cuprum font-bold text-white mt-1">
                Morgan Cooper
              </h1>

              <p className="text-base text-[#99A2AC] font-Inter leading-5 mt-2">
                Cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat possimus omnis voluptas est omnis
                dolor repellendus.
              </p>
            </span>
          </div>

          {/******************* blog Author section end here ****************/}

          {/***************** border line  ****************************/}
          <span className="w-full h-1 border-b border-b-[#192E44] mt-8"></span>
          {/***************** border line  ****************************/}

          {/***************** post line  start ****************************/}
          <div className="flex justify-between mt-8">
            <span className="lg:w-1/2">
              <p className="text-white font-Cuprum lg:text-xl text-sm font-bold">
                Technology Takeover: How to Secure IoT Environments
              </p>
              <p className="text-textYellow text-sm font-normal font-Inter mt-2">
                Previous post
              </p>
            </span>
            <span className="lg:w-1/3">
              <p className="text-white font-Cuprum lg:text-xl text-sm font-bold text-right">
                The Challenge of Real-Time Cyber Protection
              </p>
              <p className="text-textYellow text-sm font-normal font-Inter text-right mt-2">
                Next post
              </p>
            </span>
          </div>
          {/***************** post line end ****************************/}

          {/***************** Comment section start ****************************/}
          <div>
            <h1 className="text-white text-3xl font-bold font-Cuprum mt-8">
              Comments (1)
            </h1>
            {/***************** 1st Comment start now ****************************/}
            <div className="flex  gap-4 mt-6">
              <span>
                {" "}
                <img className="" src={comment1Blog} alt="" />
              </span>

              <span>
                <p className="text-textYellow font-Inter font-normal text-sm uppercase">
                  3 mar 2022
                </p>
                <h1 className="text-xl font-Cuprum font-bold text-white mt-1">
                  Morgan Cooper
                </h1>

                <p className="text-sm text-[#99A2AC] font-Inter leading-5 mt-4">
                  Cum soluta nobis est eligendi optio cumque nihil impedit quo
                  minus id quod maxime placeat possimus omnis voluptas est omnis
                  dolor repellendus.
                </p>

                <span className="flex items-center gap-2 mt-3">
                  <img src={blogReplyIcon} alt="" />
                  <p className="text-textYellow font-Cuprum font-normal uppercase">
                    Reply
                  </p>
                </span>
              </span>
            </div>
            {/***************** 1st Comment end now ****************************/}

            {/***************** 2nd Comment start now ****************************/}
            <div className="flex  gap-4 mt-8 lg:ml-36 ml-12">
              <span>
                {" "}
                <img className="" src={comment2Blog} alt="" />
              </span>

              <span>
                <p className="text-textYellow font-Inter font-normal text-sm uppercase">
                  3 mar 2022
                </p>
                <h1 className="text-xl font-Cuprum font-bold text-white mt-1">
                  Kiara Montesino
                </h1>

                <p className="text-sm text-[#99A2AC] font-Inter leading-5 mt-4">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus quod maxime placeat possimus omnis
                  voluptas assumenda est
                </p>

                <span className="flex items-center gap-2 mt-3">
                  <img src={blogReplyIcon} alt="" />
                  <p className="text-textYellow font-Cuprum font-normal uppercase">
                    Reply
                  </p>
                </span>
              </span>
            </div>
            {/***************** 2nd Comment end now ****************************/}

            {/***************** Leave a Reply start now ****************************/}

            <div className="mt-16 pb-12">
              <h1 className="text-3xl font-Cuprum font-bold text-white">
                Leave a Reply
              </h1>

              <div>
                <form className="w-full pt-16 pb-16 p-4">
                  <div className="lg:flex lg:gap-6  gap-y-14">
                    <div className="w-full transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
                      />
                    </div>

                    <div className="w-full lg:pt-0 pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
                      <input
                        type="text"
                        placeholder="Your email address"
                        className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
                      />
                    </div>
                  </div>

                  <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
                    <input
                      type="text"
                      placeholder="Write your message"
                      className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-20"
                    />
                  </div>

                  <div className=" pt-8">
                    <button className="px-6 py-2 font-medium font-Cuprum text-base bg-[#3657CD] text-white transition-all duration-300 transform hover:scale-105">
                      Sent message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/***************** Leave a Reply  end now ****************************/}
          </div>

          {/***************** Comment section end ****************************/}
        </div>
      </div>
      {/*************************** 1st item end here *******************/}

      {/*************************** 2nd item end here *******************/}
      <div className="lg:w-1/3  w-full p-3">
        <div className="relative w-full transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500 cursor-pointer">
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
      {/*************************** 2nd item end here *******************/}
    </div>
  );
};

export default BlogDetailsCard;
