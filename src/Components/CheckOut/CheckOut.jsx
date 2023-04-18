import React from "react";
import CheckoutDetails from "./CheckoutDetails";
import ScrollToTop from "../../hooks/ScrollToTop";

const CheckOut = () => {
  return (
    <div className="bg-bodyColor h-full">
      <ScrollToTop />
      {/***************** CheckOut section start here ***********************/}
      <div className="text-center p-3 pt-28">
        <h1 className="lg:text-6xl md:text-4xl text-4xl text-white font-Cuprum font-bold">
          Checkout
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Checkout
        </p>
      </div>

      {/***************** CheckOut details start here ***********************/}
      <div>
        <CheckoutDetails />
      </div>

      {/***************** CheckOut details end here ***********************/}

      {/*********************** CheckOut section end  here**********************/}
    </div>
  );
};

export default CheckOut;
