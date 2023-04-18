import React from "react";

function Analize() {
  return (
    <div className="w-full py-9 ">
      <div className="max-w-3xl h-14 mx-auto   grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="flex gap-3 justify-center">
          <h1 className="md:text-6xl text-4xl text-[#f9c747]">2164</h1>
          <p>
            Worldwide <br /> clients
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <h1 className="md:text-6xl text-4xl text-[#f9c747]">+120</h1>
          <p>
            Cyber Security <br /> Experts
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <h1 className="md:text-6xl text-4xl text-[#f9c747]">95%</h1>
          <p>
            Retention <br /> rate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analize;