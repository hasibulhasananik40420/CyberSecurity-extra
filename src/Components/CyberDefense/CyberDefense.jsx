import React, { useState } from "react";
import heroimg from "../../assets/expertdef.svg";
import tickmark from "../../assets/tickmark.svg";
import { easeIn, motion } from "framer-motion";
function CyberDefense() {
  const [active, setActive] = useState("banking");
  return (
     <div className="bg-bodyColor">
        <div className="max-w-container mx-auto min-h-[30vh] py-16 px-4  font-Cuprum bg-[url('https://i.ibb.co/V32mt3G/first.png')] bg-no-repeat bg-left">
      <div className="lg:flex w-full items-center flex-wrap mb-6">
        {/******************************* Hero Image *******************************/}
        <div className="lg:w-2/4 flex items-center justify-center mb-10 lg:mb-0">
          <img className="md:w-3/5 w-4/5" src={heroimg} alt="" />
        </div>
        {/******************************* Hero Text *******************************/}
        <div className="lg:w-2/4 flex flex-col lg:pr-8">
          <h1 className="lg:text-5xl  mb-4 text-3xl  xl:text-left  text-white  ">
            Experts Help You to Enhance Your Cyber Defenses
          </h1>
          {/******************************* Here all sub categories *******************************/}

          {/******************************* Category Navbar *******************************/}
          <div className="flex gap-6 justify-between flex-wrap custom-bottom-border ">
            <button
              className={`text-white py-3 text-md  ${
                active == "banking"
                  ? "border-b-2 border-[#3657CD]"
                  : "border-b border-transparent"
              }`}
              onClick={() => setActive("banking")}
            >
              Banking
            </button>

            <button
              className={`text-white py-3 text-md  ${
                active == "manufacturing"
                  ? "border-b-2 border-[#3657CD]"
                  : "border-b border-transparent"
              }`}
              onClick={() => setActive("manufacturing")}
            >
              Manufacturing
            </button>

            <button
              className={`text-white py-3 text-md  ${
                active == "OilAndGas"
                  ? " border-b-2 border-[#3657CD]"
                  : "border-b border-transparent"
              }`}
              onClick={() => setActive("OilAndGas")}
            >
              Oil And Gas
            </button>

            <button
              className={`text-white py-3 text-md  ${
                active == "Insurance"
                  ? "border-b-2 border-[#3657CD]"
                  : "border-b border-transparent"
              }`}
              onClick={() => setActive("Insurance")}
            >
              Insurance
            </button>

            <button
              className={`text-white py-3 text-md  ${
                active == "Healthcare"
                  ? " border-b-2 border-[#3657CD]"
                  : "border-b border-transparent"
              }`}
              onClick={() => setActive("Healthcare")}
            >
              Healthcare
            </button>
          </div>

          {/******************************* Category Contents *******************************/}

          {active == "banking" && <Banking />}
          {active == "manufacturing" && <Manufacturing />}
          {active == "OilAndGas" && <OilAndGas />}
          {active == "Insurance" && <Insurance />}
          {active == "Healthcare" && <Healthcare />}
        </div>
      </div>
    </div>
     </div>
  );
}

export default CyberDefense;

function Banking() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full text-white my-7"
    >
      <h1 className="text-3xl mb-3">Banking Security</h1>
      <p className="text-sm">
        Nam libero tempore, cum soluta nobis eligendi optio cumque nihil quo
        minus id quod maxime placeat facere possimus assumenda omnis dolor
        repellendus. Temporibus autem quibusdam et aut officiis nam libero
        tempore itaque earum rerum hic tenetur Nam libero tempore, cum soluta
        nobis eligendi optio cumque nihil quo minus id quod maxime placeat
        facere possimus assumenda omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis nam libero tempore itaque earum rerum hic
        tenetur
      </p>

      <ul className="mt-5">
        <li className="flex gap-3 text-lg text-white">
          <img src={tickmark} alt="" />
          Focus on The Basics
        </li>
        <li className="flex gap-3 text-lg text-white">
          <img src={tickmark} alt="" />
          Educate Customers
        </li>
        <li className="flex gap-3 text-lg text-white">
          <img src={tickmark} alt="" />
          Tighten Internal Controls
        </li>
        <li className="flex gap-3 text-lg text-white">
          <img src={tickmark} alt="" />
          Be Proactive
        </li>
      </ul>
    </motion.div>
  );
}

function Manufacturing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full text-white my-7"
    >
      <h1 className="text-3xl mb-3">Manufacturing Security</h1>
      <p className="text-sm">
        Nam libero tempore, cum soluta nobis eligendi optio cumque nihil quo
        minus id quod maxime placeat facere possimus assumenda omnis dolor
        repellendus. Temporibus autem quibusdam et aut officiis nam libero
        tempore itaque earum rerum hic tenetur Nam libero tempore, cum soluta
        nobis eligendi optio cumque nihil quo minus id quod maxime placeat
        facere possimus assumenda omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis nam libero tempore itaque earum rerum hic
        tenetur
      </p>

      <ul className="mt-5">
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Focus on The Basics
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Educate Customers
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Tighten Internal Controls
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Be Proactive
            </li>
          </ul>
    </motion.div>
  );
}

function OilAndGas() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full text-white my-7"
    >
      <h1 className="text-3xl mb-3">Oil And Gas Security</h1>
      <p className="text-sm">
        Nam libero tempore, cum soluta nobis eligendi optio cumque nihil quo
        minus id quod maxime placeat facere possimus assumenda omnis dolor
        repellendus. Temporibus autem quibusdam et aut officiis nam libero
        tempore itaque earum rerum hic tenetur Nam libero tempore, cum soluta
        nobis eligendi optio cumque nihil quo minus id quod maxime placeat
        facere possimus assumenda omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis nam libero tempore itaque earum rerum hic
        tenetur
      </p>

      <ul className="mt-5">
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Focus on The Basics
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Educate Customers
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Tighten Internal Controls
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Be Proactive
            </li>
          </ul>
    </motion.div>
  );
}

function Insurance() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full text-white my-7"
    >
      <h1 className="text-3xl mb-3">Insurance Security</h1>
      <p className="text-sm">
        Nam libero tempore, cum soluta nobis eligendi optio cumque nihil quo
        minus id quod maxime placeat facere possimus assumenda omnis dolor
        repellendus. Temporibus autem quibusdam et aut officiis nam libero
        tempore itaque earum rerum hic tenetur Nam libero tempore, cum soluta
        nobis eligendi optio cumque nihil quo minus id quod maxime placeat
        facere possimus assumenda omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis nam libero tempore itaque earum rerum hic
        tenetur
      </p>

      <ul className="mt-5">
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Focus on The Basics
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Educate Customers
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Tighten Internal Controls
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Be Proactive
            </li>
          </ul>
    </motion.div>
  );
}

function Healthcare() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full text-white my-7"
    >
      <h1 className="text-3xl mb-3">Healthcare Security</h1>
      <p className="text-sm">
        Nam libero tempore, cum soluta nobis eligendi optio cumque nihil quo
        minus id quod maxime placeat facere possimus assumenda omnis dolor
        repellendus. Temporibus autem quibusdam et aut officiis nam libero
        tempore itaque earum rerum hic tenetur Nam libero tempore, cum soluta
        nobis eligendi optio cumque nihil quo minus id quod maxime placeat
        facere possimus assumenda omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis nam libero tempore itaque earum rerum hic
        tenetur
      </p>

      <ul className="mt-5">
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Focus on The Basics
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Educate Customers
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Tighten Internal Controls
            </li>
            <li className="flex gap-3 text-lg text-white">
              <img src={tickmark} alt="" />
              Be Proactive
            </li>
          </ul>
    </motion.div>
  );
}
