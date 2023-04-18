import React from "react";
import BlogDetailsCard from "./BlogDetailsCard";

const BlogDetails = () => {
  return (
    <div className="bg-bodyColor">
      {/***************** Blog details section start here ***********************/}
      <div className="text-center pt-28 p-4">
        <h1 className="lg:text-5xl text-2xl text-white font-Cuprum font-bold">
          Blog Details{" "}
        </h1>
        <p className="text-[#F9C747] font-medium text-sm font-Inter leading-8">
          Home / Blog Details
        </p>
      </div>

      {/************************* blogs details flex start here **********************/}
      <div>
        <BlogDetailsCard />
      </div>
      {/************************* blogs details flex end here **********************/}
    </div>
  );
};

export default BlogDetails;
