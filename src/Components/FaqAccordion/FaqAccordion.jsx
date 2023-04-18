import React, { useState } from "react";
import plusIcon from "../../assets/faqs/plusicon.svg";
import minusIcon from "../../assets/faqs/minusicon.svg";
import { easeIn, motion } from "framer-motion";
const FaqAccordion = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onClick={() => {
          setVisible(!visible);
        }}
        style={{ backgroundColor: `${visible ? "" : ""}` }}
        className="w-full  h-14 min-h-max mb-2 border-b border-b-[#192E44] lg:p-2  duration-500 text-black hover:text-white cursor-pointer"
      >
        <div className="p-2  w-full flex justify-between">
          {/******************************* Question *******************************/}
          <div>
            <p
              className="  lg:text-lg "
              style={{ color: `${visible ? "white" : "white"}` }}
            >
              {data?.question}
            </p>
          </div>
          {/******************************* Plus Icon and Minus Icon  here *******************************/}
          <div>
            {visible ? (
              <img
                className="text-base"
                style={{ color: `${visible ? "#99A2AC" : "#99A2AC"}` }}
                src={minusIcon}
                alt=""
              />
            ) : (
              <img
                className="text-base"
                style={{ color: `${visible ? "white" : "#99A2AC"}` }}
                src={plusIcon}
                alt=""
              />
            )}
          </div>
          {/******************************* Plus Icon and Minus Icon end here *******************************/}
        </div>
      </motion.div>
      {/**********************  Answar all the question here  *************************/}
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="p-2 w-full min-h-max duration-300 my-3 text-[#99A2AC] text-sm"
        >
          <p>{data?.answar}</p>
        </motion.div>
      )}
      {/**********************  Answar all the question end here  *************************/}
    </div>
  );
};

export default FaqAccordion;
