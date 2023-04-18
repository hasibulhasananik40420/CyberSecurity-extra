import React from "react";
import messengerIcon from "../../assets/contact us/massengerIcon.svg";
import mobileIcon from "../../assets/contact us/mobileIcon.svg";
import emailIcon from "../../assets/contact us/emailIcon.svg";
import mapImage from "../../assets/contact us/mapimage.svg";
import ScrollToTop from "../../hooks/ScrollToTop";
const ContactUs = () => {
  return (
    <div className="bg-bodyColor">
      <ScrollToTop />
      {/************************ contact us section start here ***************************/}

      {/* our contact us item section start here */}

      <div className="text-center p-3 pt-28">
        <h1 className="lg:text-6xl md:text-4xl text-4xl text-white font-Cuprum font-bold">
          Contact Us
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Contact Us
        </p>
      </div>

      {/*************************** Three card start here **************************/}

      <div className="grid grid-cols-1 justify-items-center gap-y-8 p-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 max-w-contentContainer mx-auto pt-24 pb-8">
        {/***************************** card 1 start here ************************/}

        <div className="flex flex-col justify-center  items-center gap-4  p-4 hover:shadow-2xl duration-500 ease-in-out ">
          <img
            className="w-20 h-20 bg-[#011D3A] shadow-boxShadow rounded-md p-4"
            src={messengerIcon}
            alt=""
          />
          <h1 className="text-2xl font-bold font-Cuprum text-white">
            Chat With Us
          </h1>
          <p className="text-[#99A2AC] font-Inter font-base leading-6">
            We've got live Social Experts waiting to help you monday to friday
            from 9am to 5pm EST.
          </p>

          <h1 className="text-base uppercase border-b-[2px] border-b-[#192E44] font-normal cursor-pointer  font-Cuprum text-white hover:text-textYellow duration-300 hover:border-b-textYellow">
            Chat With Us
          </h1>
        </div>

        {/********************************** card 1 end here ****************************/}

        {/*********************************** card 2 start here *************************/}

        <div className="flex flex-col justify-center items-center gap-4 p-4 hover:shadow-2xl duration-500 ease-in-out">
          <img
            className="w-20 h-20 bg-[#011D3A] shadow-boxShadow rounded-md p-4"
            src={emailIcon}
            alt=""
          />
          <h1 className="text-2xl font-bold font-Cuprum text-white">
            Send Us Email
          </h1>
          <p className="text-[#99A2AC] font-Inter font-base leading-6">
            Simple drop us an email at cycure.agency@mail.com and you'll receive
            a reply within 24 hours
          </p>

          <h1 className="text-base uppercase border-b-[2px] border-b-[#192E44] font-normal cursor-pointer  font-Cuprum text-white hover:text-textYellow duration-300 hover:border-b-textYellow">
            Email Us
          </h1>
        </div>

        {/*********************************** card 2 end here *************************/}

        {/*********************************** card 3 start here *************************/}

        <div className="flex flex-col justify-center items-center gap-4 p-4 hover:shadow-2xl duration-500 ease-in-out">
          <img
            className="w-20 h-20 bg-[#011D3A] shadow-boxShadow rounded-md p-4"
            src={mobileIcon}
            alt=""
          />
          <h1 className="text-2xl font-bold font-Cuprum text-white">
            Make a Call
          </h1>
          <p className="text-[#99A2AC] font-Inter font-base leading-6">
            Give us a ring.Our Experts are standing by monday to friday from 9am
            to 5pm EST.
          </p>

          <h1 className="text-base uppercase border-b-[2px] border-b-[#192E44] font-normal cursor-pointer  font-Cuprum text-white hover:text-textYellow duration-300 hover:border-b-textYellow">
            +1 488 246 5357
          </h1>
        </div>

        {/*********************************** card 3 end here *************************/}
      </div>

      {/**************************** new maping section start here ********************/}

      <div className="pt-12 cursor-pointer w-full">
        <img className="w-full" src={mapImage} alt="" />
      </div>

      {/**************************** new maping section end here ********************/}

      {/**************************** new contact from section start here ********************/}

      <div className="max-w-containerSmall mx-auto pt-16">
        <h1 className="lg:text-5xl md:text-4xl text-3xl text-white font-Cuprum font-bold  text-center leading-5">
          Questions or Comments?
        </h1>
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-white font-Cuprum font-bold  text-center pt-1 ">
          {" "}
          Get in Touch
        </h1>

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

          <div className="flex justify-center pt-8">
            <button className="px-6 py-2 font-medium font-Cuprum text-base bg-[#3657CD] text-white hover:bg-white hover:text-bodyBlue duration-300">
              Sent message
            </button>
          </div>
        </form>
      </div>

      {/**************************** new contact from section end here ********************/}

      {/************************ contact us section start here ***************************/}
    </div>
  );
};

export default ContactUs;
