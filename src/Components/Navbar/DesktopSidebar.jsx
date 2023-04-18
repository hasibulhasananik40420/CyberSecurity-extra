import React from "react";
import buttonciclueX from "../../assets/buttonciclueX.svg";
import linkedinIcon from "../../assets/footer/Linkedin.svg";
import twitterIcon from "../../assets/footer/Twitter.svg";
import facebookIcon from "../../assets/footer/facebook (2).svg";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function DesktopSidebar({ setSidebar }) {
  const location = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed  top-0 right-0 "
    >
            {/************* desktop sidebar section  start here ***************/}

      <div
        className={`p-4  z-50 sticky top-0 right-0 transition-all duration-300 ease-in ${
          location.pathname == "/" ? "bg-bodyBlue" : "bg-bodyColor"
        } w-[450px] min-h-screen max-h-screen`}
      >
        <div className="flex justify-end w-full cursor-pointer">
          <img
            onClick={() => setSidebar(false)}
            className="w-14  transition-all  hover:bg-bodyColor hover:w-14 hover:rounded-full duration-300"
            src={buttonciclueX}
            alt=""
          />
        </div>

        <h1 className="text-5xl  pl-11">
          Digital safety <span className="text-[#f9c747]">starts here </span>{" "}
          for both commercial and personal
        </h1>
        <h1 className="text-xl  pl-11 mt-5">
          Nam libero tempore, cum soluta nobis eligendi cumque quod placeat
          facere possimus assumenda omnis dolor repellendu sautem temporibus
          officiis
        </h1>

        <div className="flex flex-col gap-2 pl-11 mt-28">
          <h1 className="text-white font-bold font-Cuprum text-2xl subpixel-antialiased	">
            +1 488 246 5357 cycure.agency@mail.com
          </h1>
          <p className="text-[#99A2AC] font-normal font-Inter text-sm">
            3828 Delmas Terrace, Culver City, CA, United States
          </p>
          {/************************ footer icon start here *************************/}
          <span className="flex items-center gap-4">
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
          {/****************************** footer icon end here *************************/}
        </div>
      </div>

       {/************* desktop sidebar section  end here ***************/}
    </motion.div>
  );
}

export default DesktopSidebar;
