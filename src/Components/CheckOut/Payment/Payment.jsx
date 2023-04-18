import React, { useState } from "react";
import DirectBankTransfer from "./Directbanktransfer";
import CheckPayments from "./Checkpayments";
import CashonDelivery from "./Cashondelivery";

const Payment = () => {
  const [Directbanktransfer, setDirectbanktransfer] = useState(true);
  const [Checkpayments, setCheckpayments] = useState(false);
  const [Cashondelivery, setCashondelivery] = useState(false);

  const handleDirectbanktransfer = () => {
    setDirectbanktransfer(true);
    setCheckpayments(false);
    setCashondelivery(false);
  };
  const handleCheckpayments = () => {
    setDirectbanktransfer(false);
    setCheckpayments(true);
    setCashondelivery(false);
  };
  const handleCashondelivery = () => {
    setDirectbanktransfer(false);
    setCheckpayments(false);
    setCashondelivery(true);
  };
  return (
    <div className=" pt-20">
      <div className="">
        <ul className="lg:flex  lg:justify-center lg:gap-16 lg:p-0 md:flex md:justify-center lg:items-center md:gap-3 md:p-4 p-4  uppercase  pb-3 md:pb-3 lg:pb-3  -[#292a2c]">
          <li
            onClick={handleDirectbanktransfer}
            className={` ${
              Directbanktransfer
                ? " text-textYellow "
                : "text-white"
            }   text-sm font-Cuprum   cursor-pointer lg:pb-0 md:pb-2 pb-2`}
          >
            Direct bank transfer
          </li>

          <li
            onClick={handleCheckpayments}
            className={`${
              Checkpayments
                ? " text-textYellow "
                : "text-white"
            }   text-sm font-Cuprum   cursor-pointer lg:pb-0 md:pb-2 pb-2`}
          >
            Check payments
          </li>

          <li
            onClick={handleCashondelivery}
            className={`${
              Cashondelivery
                ? "text-textYellow "
                : "text-white"
            }   text-sm font-Cuprum   cursor-pointer lg:pb-0 md:pb-2 pb-2`}
          >
            Cash on delivery (1)
          </li>
        </ul>

        <div className="text-[#99A2AC] font-Inter font-normal lg:pt-7 lg:pb-16 md:pt-7 md:pb-24 pt-7 pb-16 lg:p-0 p-4 border-t border-t-hoverColor">
          {Directbanktransfer && <DirectBankTransfer />}
          {Checkpayments && <CheckPayments />}
          {Cashondelivery && <CashonDelivery />}
        </div>

        <div className="">
          <button className="px-6 py-2 font-medium font-Cuprum text-base bg-[#3657CD] text-white hover:bg-textYellow hover:text-black duration-300">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
