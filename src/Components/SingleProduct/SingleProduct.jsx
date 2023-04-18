import React from "react";
import SingleProductCard from "./SingleProductCard";
import ScrollToTop from "../../hooks/ScrollToTop";

const SingleProduct = () => {
  return (
    <div className="bg-bodyColor">
      <ScrollToTop />
      {/***************** Product Single section start here ***********************/}
      <div className="text-center lg:pt-28  pt-20 p-4">
        <h1 className="lg:text-5xl text-2xl text-white font-Cuprum font-bold">
          Product Single{" "}
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Product Singlet
        </p>
      </div>

      {/************************* Product Single   flex start here **********************/}
      <div>
        <SingleProductCard />
      </div>
      {/************************* Product Single flex end here **********************/}
    </div>
  );
};

export default SingleProduct;
