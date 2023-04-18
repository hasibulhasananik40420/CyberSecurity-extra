import React, { useState } from "react";
import subproduct2 from "../../assets/single product/sub product 1.svg";
import subproduct1 from "../../assets/single product/sub product 2.svg";
import subproduct3 from "../../assets/single product/sub product 3.svg";
import subproduct4 from "../../assets/single product/sub product 4.svg";
import starIcon from "../../assets/single product/start icon.svg";
import Description from "./OtherDetails/Description";
import AdditionalInformation from "./OtherDetails/AdditionalInformation";
import Reviews from "./OtherDetails/Reviews";
import RecemtlyView from "./RecentlyView/RecemtlyView";
const SingleProductCard = () => {
  const productdatas = [
    {
      _id: 1,
      img: subproduct1,
    },
    {
      _id: 2,
      img: subproduct2,
    },
    {
      _id: 3,
      img: subproduct3,
    },
    {
      _id: 4,
      img: subproduct4,
    },
  ];

  const [count, setCount] = useState(0);
  const [mainImage, setMainImage] = useState(0);
  const [activeImage, setActiveImage] = useState(productdatas[mainImage]);

  const [description, setDescription] = useState(true);
  const [additionalInformation, setAdditionalInformation] = useState(false);
  const [reviews, setReviews] = useState(false);

  const handleDescription = () => {
    setDescription(true);
    setAdditionalInformation(false);
    setReviews(false);
  };
  const handleAdditionalInformation = () => {
    setDescription(false);
    setAdditionalInformation(true);
    setReviews(false);
  };
  const handleReviews = () => {
    setDescription(false);
    setAdditionalInformation(false);
    setReviews(true);
  };

  return (
    <div>
      {/************************** single product card start here **********************/}
      <div className="lg:flex lg:justify-between lg:gap-20 lg:max-w-container lg:mx-auto lg:p-8 p-4">
        <div className="lg:w-3/4 w-full">
          <div className="lg:flex lg:flex-row-reverse gap-3">
            <div className="bg-[#011D3A] flex justify-center items-center">
              <img
                className="lg:h-[560px] h-full mix-blend-luminosity hover:mix-blend-normal hover:duration-300 duration-300"
                src={activeImage.img}
                alt=""
              />
            </div>

            <div className="lg:flex lg:flex-col gap-3 flex flex-row mt-8 lg:mt-0 cursor-pointer">
              {productdatas?.map((product, index) => (
                <div className=""
                  onClick={() => {
                    setMainImage(index);
                    setActiveImage(productdatas[index]);
                  }}
                  key={product._id}
                >
                  <span className="bg-[#011D3A] lg:w-32 lg:h-32 md:w-24  md:h-24 w-20 h-20 flex justify-center items-center">
                    <img
                      className="mix-blend-luminosity"
                      src={product?.img}
                      alt=""
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 w-full lg:mt-0 mt-16">
          <div className="flex flex-col gap-5">
            <div className="flex gap-8">
              <span className="flex gap-1">
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
              </span>

              <span className="text-base text-[#99A2AC] font-Inter font-medium">
                (1 customer review)
              </span>
            </div>

            <h1 className="text-4xl font-bold font-Cuprum text-white">
              Wireless Phone Charger
            </h1>
            <p className="text-white font-Cuprum font-medium text-base">
              $40.00
            </p>

            <p className="text-[#99A2AC] font-Inter font-normal text-base">
              Nam libero tempore, cum soluta nobis eligendi optio cumque quo
              minus quod maxime placeat facere possimus assumenda omnis dolor
              repellendu sautem Temporibus quibusdam aut officiis nam libero
              tempore
            </p>

            <div className="flex gap-12 mt-2 mb-2 cursor-pointer">
              <div className="flex gap-3 border-b border-b-[#192E44]">
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

              <div>
                <button className="bg-[#3657CD] px-4 py-2 font-Cuprum font-semibold text-white uppercase">
                  Add to cart
                </button>
              </div>
            </div>

            <p className="text-[#99A2AC] font-Inter font-normal text-base">
              <span className="text-white">Categories:</span> Uncategorized
            </p>

            <p className="text-[#99A2AC] font-Inter font-normal text-base">
              <span className="text-white"> Tags:</span> charger, wireless
            </p>
          </div>
        </div>
      </div>

      {/************************** single product card end here **********************/}

      {/************************* nested routing here **********************************/}
      <div className="max-w-containerxs mx-auto pt-20">
        <div className="">
          <ul className="lg:flex  lg:justify-center lg:gap-3 lg:p-0 md:flex md:justify-center lg:items-center md:gap-3 md:p-4 p-4 uppercase border-b border-b-[#192E44] pb-3 md:pb-3 lg:pb-3">
            <li
              onClick={handleDescription}
              className={` ${
                description
                  ? "bg-[#3657CD] text-textYellow px-8 py-3"
                  : "text-white"
              }  hover:bg-[#112240] duration-300 py-3 text-sm cursor-pointer px-8 font-medium text-white`}
            >
              Description
            </li>

            <li
              onClick={handleAdditionalInformation}
              className={`${
                additionalInformation
                  ? "bg-[#3657CD] text-textYellow px-8 py-3"
                  : "text-white"
              } hover:bg-[#112240] duration-300 py-3 text-sm cursor-pointer  px-8 font-medium text-white`}
            >
              additional information
            </li>

            <li
              onClick={handleReviews}
              className={`${
                reviews
                  ? "bg-[#3657CD] text-textYellow px-8 py-3"
                  : "text-white"
              } duration-300 hover:bg-[#112240] py-3 text-sm cursor-pointer px-8 font-medium text-white`}
            >
              Reviews (1)
            </li>
          </ul>

          <div className="text-[#99A2AC] font-Inter font-normal lg:pt-7 lg:pb-24 md:pt-7 md:pb-24 pt-7 pb-16 lg:p-0 p-4">
            {description && <Description />}
            {additionalInformation && <AdditionalInformation />}
            {reviews && <Reviews />}
          </div>
        </div>
      </div>
      {/************************* nested routing here **********************************/}

      <div>
        <RecemtlyView />
      </div>
    </div>
  );
};

export default SingleProductCard;
