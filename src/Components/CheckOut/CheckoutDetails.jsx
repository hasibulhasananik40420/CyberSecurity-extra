import Payment from "./Payment/Payment";

const CheckoutDetails = () => {
  return (
    <div className="max-w-container mx-auto">
      <p className="text-white text-center text-sm font-Inter mt-8 mb-6">
        <span className="text-[#99A2AC] text-sm font-Inter">
          Have a coupon?
        </span>{" "}
        Click here to enter your code
      </p>

      {/***************** CheckOut information start here ***********************/}
      <div className="lg:flex lg:justify-between lg:gap-16 lg:p-6 md:p-6 p-4 md:w-full w-full">
        {/***************** CheckOut item 1 start here ***********************/}
        <div className="lg:w-3/4 w-full">
          <form className="w-full pt-16 pb-16 p-4">
            <div className="lg:flex lg:gap-6  gap-y-14">
              <div className="w-full transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
                <label className="font-Inter" htmlFor="">
                  First name{" "}
                  <span className="text-textYellow text-sm font-Inter">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-2"
                />
              </div>

              <div className="w-full transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
                <label className="font-Inter" htmlFor="">
                  Last name{" "}
                  <span className="text-textYellow text-sm font-Inter">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-4"
                />
              </div>
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                Company name (Optional){" "}
              </label>
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-12"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                Country / Region{" "}
                <span className="text-textYellow text-sm font-Inter">*</span>
              </label>
              <input
                type="text"
                placeholder="United state (Us)"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6 pt-4"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                Street address{" "}
                <span className="text-textYellow text-sm font-Inter">*</span>
              </label>
              <input
                type="text"
                placeholder="House number and street name"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6 pt-4"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc (Optional)"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                Town / City{" "}
                <span className="text-textYellow text-sm font-Inter">*</span>
              </label>
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                State{" "}
                <span className="text-textYellow text-sm font-Inter">*</span>
              </label>
              <input
                type="text"
                placeholder="Washington"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                ZIP Code{" "}
                <span className="text-textYellow text-sm font-Inter">*</span>
              </label>
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                Phone number{" "}
                <span className="text-textYellow text-sm font-Inter">*</span>
              </label>
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                Email address{" "}
                <span className="text-textYellow text-sm font-Inter">*</span>
              </label>
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>

            <div className="mt-16">
              <h1 className="text-3xl font-bold text-white font-Cuprum">
                Additional Information
              </h1>
              <p className="text-sm font-normal font-Inter text-white leading-10">
                Order notes (Optional)
              </p>
            </div>

            <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <label className="font-Inter" htmlFor="">
                Notes about your order, e.g. special notes for delivery
              </label>
              <input
                type="text"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-12"
              />
            </div>
          </form>
        </div>
        {/***************** CheckOut item 1 end here ***********************/}

        {/***************** CheckOut details info start here ***********************/}
        <div className="lg:w-2/4 w-full">
          <h1 className="text-3xl font-bold text-white font-Cuprum">
            Your Order
          </h1>
          <div className="flex flex-col gap-y-4 mt-12 px-2">
            <div className="flex justify-between  border-b-[1px] border-b-[#192E44] w-full pb-3 px-4">
              <span className="text-xl font-Cuprum text-white">Product</span>
              <span className="text-xl font-Cuprum text-white">Subtotal</span>
            </div>

            <div className="flex justify-between border-b-[1px] border-b-[#192E44] w-full pb-2 px-4">
              <span className="text-sm font-Inter text-[#99A2AC]">
                Streaming Camera ×1
              </span>
              <span className="text-sm font-Inter text-[#99A2AC]">
                $100.00{" "}
              </span>
            </div>
            <div className="flex justify-between border-b-[1px] border-b-[#192E44] w-full pb-2 px-4">
              <span className="text-sm font-Inter text-[#99A2AC]">
                Wireless Phone Charger ×1
              </span>
              <span className="text-sm font-Inter text-[#99A2AC]">$38.80 </span>
            </div>
            <div className="flex justify-between border-b-[1px] border-b-[#192E44] w-full pb-2 px-4">
              <span className="text-sm font-Inter text-[#99A2AC]">
                Astro Headset Case ×1
              </span>
              <span className="text-sm font-Inter text-[#99A2AC]">$212.90</span>
            </div>
            <div className="flex justify-between border-b-[1px] border-b-[#192E44] w-full pb-2 px-4">
              <span className="text-sm font-Inter text-[#99A2AC]">
                Astro Headset Case ×1
              </span>
              <span className="text-sm font-Inter text-[#99A2AC]">$212.90</span>
            </div>
            <div className="flex justify-between border-b-[1px] border-b-[#192E44] w-full pb-2 px-4">
              <span className="text-xl font-Cuprum text-white">Subtotal</span>
              <span className="text-sm font-Inter text-[#99A2AC]">$351.70</span>
            </div>

            <div className="flex justify-between border-b-[1px] border-b-[#192E44] w-full pb-2 px-4">
              <span className="text-xl font-Cuprum text-white">Total</span>
              <span className="text-sm font-Inter text-[#99A2AC]">$551.70</span>
            </div>
          </div>

          {/*************** nested routing start here for payment ****************/}

          <div className="mt-12 px-2">
            <h1 className="text-3xl font-bold text-white font-Cuprum">
              Payment
            </h1>
            <Payment />
          </div>

          {/********************* nested routing end here for payment ****************/}
        </div>
        {/***************** CheckOut details info end here ***********************/}
      </div>
      {/***************** CheckOut information end here ***********************/}
    </div>
  );
};

export default CheckoutDetails;
