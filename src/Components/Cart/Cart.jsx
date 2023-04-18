import React from "react";
import CartDetails from "./CartDetails";
import ScrollToTop from "../../hooks/ScrollToTop";

const Cart = () => {
  return (
    <div className="bg-bodyColor min-h-screen">
      <ScrollToTop />
      {/***************** cart section start here ***********************/}
      <div className="text-center p-3 pt-28">
        <h1 className="lg:text-6xl md:text-4xl text-4xl text-white font-Cuprum font-bold">
          Cart
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Cart
        </p>
      </div>

      {/***************** cart details start here ***********************/}
      <div>
        <CartDetails />
      </div>

      {/***************** cart details end here ***********************/}

      {/*********************** cart section end  here**********************/}
    </div>
  );
};

export default Cart;
