import React from "react";
import linkedinIcon from "../../assets/footer/Linkedin.svg";
import twitterIcon from "../../assets/footer/Twitter.svg";
import facebookIcon from "../../assets/footer/facebook (2).svg";
import emailIcon from "../../assets/footer/email.svg";

const Footer = () => {
  
  return (
    <div className="bg-[url('https://i.ibb.co/t8wLd7h/footerbackground.png')] bg-bodyColor bg-cover bg-no-repeat bg-left-bottom h-full overflow-hidden cursor-pointer border-t-[1px] border-t-[#192E44] mt-4">
      {/********************** footer section start here ******************************/}
      <div className="flex flex-wrap justify-between gap-6 py-12 lg:px-8 px-4  lg:max-w-container lg:mx-auto">
        {/******************** item 1 start here ***************************/}
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold font-Cuprum text-2xl subpixel-antialiased	">
            +1 488 246 5357 cycure.agency@mail.com
          </h1>
          <p className="text-[#99A2AC] font-normal font-Inter text-sm">
            3828 Delmas Terrace, Culver City, CA, United States
          </p>
          {/**************** footer icon start here *******************/}
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
          {/**************** footer icon end here *******************/}
        </div>
        {/******************** item 1 end here ***************************/}

        {/******************** item 2 start here ***************************/}

        <div className="flex flex-col  gap-2">
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            About us
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Case Studies
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Terms & Conditions
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Privacy Poilicy
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Contact Us
          </h1>
        </div>

        {/******************** item 2 end here ***************************/}

        {/******************** item 3 start here ***************************/}

        <div className="flex flex-col  gap-2">
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Spyware Protection
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Fast Cloud Backup
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Database Security
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Transaction Security
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Spambot Shield
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            A.I. Threat Learning
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            Spambot Shield
          </h1>
          <h1 className="text-white font-Cuprum font-normal text-base uppercase">
            View More...
          </h1>
        </div>

        {/******************** item 3 end here ***************************/}

        {/******************** item 4 start here ***************************/}

        <div className="flex flex-col gap-2">
          <div className="w-full transform border-b-2 border-b-[#192E44] bg-transparent text-lg duration-300 focus-within:border-indigo-500 relative">
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none pl-8 pb-2 text-white "
            />
            <img className="absolute top-1 left-0" src={emailIcon} alt="" />
          </div>

          <button className="w-full px-6 py-2 text-center font-bold font-Cuprum text-white bg-[#3657CD] mt-2  duration-300 hover:bg-textYellow ">
            Subscribe now
          </button>
          <p className="text-sm font-Cuprum text-white mt-2">
            <span className="text-textYellow">*</span> Don’t worry, we don’t
            spam
          </p>
        </div>

        {/******************** item 4 end here ***************************/}
      </div>

      <p className="text-sm font-Inter text-[#99A2AC] text-center pb-6">
        Copyright ©2022 Design by{" "}
        <span className="text-white font-Inter">MirrorTheme</span>
      </p>

      {/********************** footer section end here ******************************/}
    </div>
  );
};

export default Footer;
