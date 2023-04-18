import React from "react";
import backarrow from "../../assets/arrowleft.svg";
import { Link } from "react-router-dom";
import ScrollToTop from "../../hooks/ScrollToTop";
const NotFoundPage = () => {
  return (
    <div className="bg-bodyColor w-full h-full">
      <ScrollToTop />

      {/************************** not found section start here ***************************/}
      <div className="max-w-containerSmall mx-auto flex justify-center items-center pt-28 pb-28">
        <div className="lg:w-2/4 w-full flex flex-col justify-center items-center">
          <h1 className="lg:text-[140px] text-6xl font-bold font-Cuprum text-textYellow text-center">
            404
          </h1>
          <p className="text-4xl font-bold font-Cuprum text-white text-center">
            Sorry, the page you are looking for could not be found
          </p>

          <div className="mt-16 flex justify-center items-center">
            <Link
              to="/"
              className="bg-[#3657CD] text-white font-Cuprum text-base font-medium px-4 py-2 flex items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105"
            >
              <span>
                {" "}
                <img className="w-4 h-3" src={backarrow} alt="" />
              </span>{" "}
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>
      {/************************** not found section end here ***************************/}
    </div>
  );
};

export default NotFoundPage;
