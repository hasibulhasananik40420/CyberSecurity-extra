import React, { useState } from "react";
import crossIcon from "../../assets/cart/cross icon.svg";
import cartImage1 from "../../assets/cart/cart image 1.svg";
import cartImage2 from "../../assets/cart/cart image2.svg";
import cartImage3 from "../../assets/cart/cart image 3.svg";
import { RxCross2 } from "react-icons/rx";
const CartDetails = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  return (
    <div>
      {/******************************* cart details start here *******************************/}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-4 mt-12 lg:p-0 p-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center border-b-[1px] border-b-[#192E44] pb-3">
            <span className="text-xl font-Cuprum text-white">Product</span>
            <span className="text-xl font-Cuprum text-white">price</span>
            <span className="text-xl font-Cuprum text-white">Quantity</span>
            <span className="text-xl font-Cuprum text-white">Subtotal</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center border-b-[1px] border-b-[#192E44] w-full">
            <div className="flex gap-4  items-center cursor-pointer  w-full pb-3 pt-3">
              <span className="hover:shadow-lg hover:p-2 hover:rounded-full hover:bg-purple-700 duration-300 ease-in-out">
                <RxCross2 className="text-white text-xl " />
              </span>
              <span className="bg-[#011D3A]  w-16 h-16 flex justify-center items-center">
                {" "}
                <img className="mix-blend-luminosity" src={cartImage1} alt="" />
              </span>
              <span className="text-base font-Cuprum text-white">
                Astro Headset Case
              </span>
            </div>
            <div className="text-sm font-Inter text-[#99A2AC]">$100.00 </div>
            <div className="flex gap-3 cursor-pointer">
              <button
                onClick={() => setCount(count - 1)}
                className="text-white text-xl"
                disabled={count === 0}
              >
                -
              </button>

              <button className="text-white text-xl">{count}</button>
              <button
                onClick={() => setCount(count + 1)}
                className="text-white text-xl"
              >
                +
              </button>
            </div>
            <div className="text-sm font-Inter text-[#99A2AC]">$100.00 </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center border-b-[1px] border-b-[#192E44] w-full">
            <div className="flex gap-4  items-center cursor-pointer text-left w-full pb-3 pt-3 ">
              <span className="hover:shadow-lg hover:p-2 hover:rounded-full hover:bg-purple-700 duration-300 ease-in-out">
                <RxCross2 className="text-white text-xl " />
              </span>
              <span className="bg-[#011D3A]  w-16 h-16 flex justify-center items-center">
                {" "}
                <img className="mix-blend-luminosity" src={cartImage2} alt="" />
              </span>
              <span className="text-base font-Cuprum text-white">
                Wireless Phone Charger
              </span>
            </div>
            <div className="text-sm font-Inter text-[#99A2AC]">$38.00 </div>
            <div className="flex gap-3 cursor-pointer">
              <button
                onClick={() => setCount2(count2 - 1)}
                className="text-white text-xl"
                disabled={count2 === 0}
              >
                -
              </button>

              <button className="text-white text-xl">{count2}</button>
              <button
                onClick={() => setCount2(count2 + 1)}
                className="text-white text-xl"
              >
                +
              </button>
            </div>
            <div className="text-sm font-Inter text-[#99A2AC]">$38.00 </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center border-b-[1px] border-b-[#192E44] w-full">
            <div className="w-full flex gap-4 items-center cursor-pointer   pb-3 pt-3 ">
              <span className="hover:shadow-lg hover:p-2 hover:rounded-full hover:bg-purple-700 duration-300 ease-in-out">
                <RxCross2 className="text-white text-xl " />
              </span>
              <span className="bg-[#011D3A]  w-16 h-16 flex justify-center items-center">
                {" "}
                <img className="mix-blend-luminosity" src={cartImage3} alt="" />
              </span>
              <span className="text-base font-Cuprum text-white">
                Streaming Camera
              </span>
            </div>
            <div className="text-sm font-Inter text-[#99A2AC]">$200.00 </div>
            <div className="flex gap-3 cursor-pointer">
              <button
                onClick={() => setCount3(count3 - 1)}
                className="text-white text-xl"
                disabled={count3 === 0}
              >
                -
              </button>

              <button className="text-white text-xl">{count3}</button>
              <button
                onClick={() => setCount3(count3 + 1)}
                className="text-white text-xl"
              >
                +
              </button>
            </div>
            <div className="text-sm font-Inter text-[#99A2AC]">$200.00 </div>
          </div>

          <div className="lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-1/3 w-full flex justify-center lg:flex lg:flex-row lg:justify-between lg:items-center">
              <div className="w-2/4 pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-blue-700">
                <input
                  type="text"
                  placeholder="Washington"
                  className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-4"
                />
              </div>

              <div className="pt-8">
                <button className="px-6 py-2 font-medium font-Cuprum text-base bg-[#3657CD] text-white transition-all duration-300 transform hover:scale-105">
                  Apply coupon
                </button>
              </div>
            </div>

            <div className="pt-8 lg:p-0 p-4">
              <button className="px-6 py-2 font-medium font-Cuprum text-base bg-[#011D3A] text-white transition-all duration-300 transform hover:scale-105">
                Update cart
              </button>
            </div>
          </div>
        </div>

        {/******************** cart total ************************/}
        <div className="mt-16 lg:w-2/4 lg:pb-20 pb-10 w-full lg:p-0 p-4">
          <h1 className="text-3xl font-Cuprum font-bold text-white mt-2 mb-6">
            Cart
          </h1>
          <div className="flex items-center justify-between pb-3  border-b-[1px] border-b-[#192E44]">
            <span className="text-xl font-Cuprum text-white">Subtotal</span>
            <span className="text-sm font-Inter text-[#99A2AC]">$100.00 </span>
          </div>

          <div className="flex items-center justify-between border-b-[1px] border-b-[#192E44]  mt-4 w-full pb-2 ">
            <span className="text-xl font-Cuprum text-white">Total</span>
            <span className="text-sm font-Inter text-[#99A2AC]">$100.00</span>
          </div>

          <div className="pt-8">
            <button className="px-6 py-2 font-medium font-Cuprum text-base bg-[#3657CD] text-white transition-all duration-300 transform hover:scale-105">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      {/******************************* cart details end here *******************************/}
    </div>
  );
};

export default CartDetails;
