import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  const location = useLocation()
  return (
    <div className="bg-bodyColor">
       {
        location.pathname != '/home-two'  &&
        <Navbar />
       }
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;