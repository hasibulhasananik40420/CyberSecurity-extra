import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ScrollToTop from "../../hooks/ScrollToTop";

const ProductList = () => {
  return (
    <div className="bg-bodyColor">
      <ScrollToTop />

      {/******************** our product list  section start here ****************************/}
      <div className="text-center p-3 pt-28">
        <h1 className="lg:text-6xl md:text-4xl text-4xl text-white font-Cuprum font-bold">
          Product List
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Product list
        </p>
      </div>
      {/************************ all product start here ********************************/}
      <div className="pt-16 pb-16">
        <ProductCard />
      </div>
      {/************************ all product start here ********************************/}

      {/******************** our product list  section end here ****************************/}
    </div>
  );
};

export default ProductList;
