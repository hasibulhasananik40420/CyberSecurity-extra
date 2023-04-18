import React from "react";
import SpywareProtectionImage from "../../assets/Spyware Protection/unsplash_r0saAQNjEjQ.svg";
import checkIcon from "../../assets/Spyware Protection/Fill.svg";
import ScrollToTop from "../../hooks/ScrollToTop";
const SpywareProtection = () => {
  return (
    <div className="bg-bodyColor">
      <ScrollToTop />
      {/****************** our SpywareProtection item section start here *****************/}
      <div className="text-center p-3 pt-28">
        <h1 className="lg:text-6xl md:text-4xl text-4xl text-white font-Cuprum font-bold">
          SpywareProtection
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Services / Spyware Protection
        </p>
      </div>

      {/************************** hero section start here ****************************/}
      <div className="lg:flex lg:flex-row lg:gap-20 md:flex md:flex-col md:max-w-containerSmall md:mx-auto md:gap-16 flex flex-col justify-center  gap-y-16 p-3 md:p-3 lg:p-0 2xl:p-0  lg:max-w-contentContainer lg:mx-auto 2xl:max-w-container 2xl:mx-auto pt-14 md:pt-24 lg:pt-24 2xl:pt-24 ">
        {/********************** item 1 start here ****************************/}
        <div>
          <img
            className="mix-blend-luminosity hover:mix-blend-normal duration-300"
            src={SpywareProtectionImage}
            alt=""
          />
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold font-Cuprum text-white tracking-wide pt-12 leading-1">
            All Services Related to Spyware Protection Are Provided{" "}
          </h1>

          <p className="text-[#99A2AC] font-Inter font-base leading-7 pt-8">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat possimus omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            aut officiis debitis aut necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur
          </p>

          <p className="text-[#99A2AC] font-Inter font-base leading-7 mt-6">
            Accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi laborum
            dolorum fuga harum quidem expedita distinctio
          </p>

          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold font-Cuprum text-white tracking-wide pt-12 leading-1">
            Why Spyware Protection?
          </h1>

          <p className="text-[#99A2AC] font-Inter font-base leading-7 mt-6">
            Temporibus autem quibusdam aut officiis debitis aut necessitatibus
            saepe eveniet ut et voluptates repudiandae sint molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut
            aut reiciendis voluptatibus maiores alias consequatur optio cumque
            nihil impedit quo minus id quod maxime placeat possimus omnis
            voluptas
          </p>

          <div className="flex flex-col gap-2 pt-12">
            <div className="flex gap-3">
              <span>
                <img src={checkIcon} alt="" />
              </span>
              <span className="text-base font-normal font-Cuprum text-white">
                SIEM Threat Detection
              </span>
            </div>
            <div className="flex gap-3">
              <span>
                <img src={checkIcon} alt="" />
              </span>
              <span className="text-base font-normal font-Cuprum text-white">
                Website Security Services
              </span>
            </div>
            <div className="flex gap-3">
              <span>
                <img src={checkIcon} alt="" />
              </span>
              <span className="text-base font-normal font-Cuprum text-white">
                24/7 Hours services
              </span>
            </div>
            <div className="flex gap-3">
              <span>
                <img src={checkIcon} alt="" />
              </span>
              <span className="text-base font-normal font-Cuprum text-white">
                Instant Malware Removal
              </span>
            </div>
            <div className="flex gap-3">
              <span>
                <img src={checkIcon} alt="" />
              </span>
              <span className="text-base font-normal font-Cuprum text-white">
                Security Management
              </span>
            </div>
          </div>
        </div>
        {/********************** item 1 end here ****************************/}

        {/********************** item 2 start here ****************************/}
        <div className="flex flex-col gap-3">
          <button className="bg-[#3657CD] w-56 h-10 block font-Cuprum font-bold text-base text-white overflow-hidden transform transition-colors duration-300 hover:bg-[#3C72E2]">
            Fast Cloud Backup
          </button>
          <button className="bg-[#011D3A]  w-56 h-10 font-Cuprum font-bold text-base text-white overflow-hidden transform transition-colors duration-300 hover:bg-[#3C72E2]">
            Database Security
          </button>
          <button className="bg-[#011D3A]  w-56 h-10 font-Cuprum font-bold text-base text-white overflow-hidden transform transition-colors duration-300 hover:bg-[#3C72E2]">
            Transaction Security
          </button>
          <button className="bg-[#011D3A]  w-56 h-10 font-Cuprum font-bold text-base text-white overflow-hidden transform transition-colors duration-300 hover:bg-[#3C72E2]">
            Spambot Shield
          </button>
          <button className="bg-[#011D3A]  w-56 h-10 font-Cuprum font-bold text-base text-white overflow-hidden transform transition-colors duration-300 hover:bg-[#3C72E2]">
            A.I. Threat Learning
          </button>
          <button className="bg-[#011D3A]  w-56 h-10 font-Cuprum font-bold text-base text-white overflow-hidden transform transition-colors duration-300 hover:bg-[#3C72E2]">
            Client Protection
          </button>
          <button className="bg-[#011D3A]  w-56 h-10 font-Cuprum font-bold text-base text-white overflow-hidden transform transition-colors duration-300 hover:bg-[#3C72E2]">
            Scheduled Backups
          </button>
        </div>
        {/********************** item 2 end here ****************************/}
      </div>
      {/************************** hero section start here ****************************/}
    </div>
  );
};

export default SpywareProtection;
