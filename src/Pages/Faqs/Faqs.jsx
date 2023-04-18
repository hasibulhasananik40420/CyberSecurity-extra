import ScrollToTop from "../../hooks/ScrollToTop";
import FaqDetails from "./FaqDetails";
const Faqs = () => {
  return (
    <div className="bg-bodyColor">
      <ScrollToTop />
      <div className="text-center pt-28">
        <h1 className="text-6xl text-white font-Cuprum font-bold">Faqs</h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Faqs
        </p>
      </div>

      {/******************* faqs section start here  ****************************/}

      <div className="lg:min-h-screen h-full max-w-containerxs mx-auto p-3 lg:p-0 mt-8 font-Cuprum">
        <FaqDetails />
      </div>

      {/******************* faqs section end here  ****************************/}
    </div>
  );
};

export default Faqs;
