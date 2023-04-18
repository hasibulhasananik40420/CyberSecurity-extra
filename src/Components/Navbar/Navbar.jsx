import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import logowhitelogo from "../../assets/logowhitelogo.svg";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DesktopSidebar from "./DesktopSidebar";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`z-50 w-full  px-3 lg:relative ${scrollPosition > 0 ? 'navbar-bg' : 'primary-navbar'}`}>
      <div className=" font-Cuprum py-3  text-white   max-w-screen   max-w-container mx-auto">
        {sidebar && <DesktopSidebar setSidebar={setSidebar} />}
        <div className="flex justify-between items-center">
          {/* Logo Here */}
          <div>
            {location.pathname == "/home-two" ? (
              <img className="w-28" src={logowhitelogo} alt="" />
            ) : (
              <img className="w-28" src={logo} alt="" />
            )}
          </div>

          <div>
            {/* Desktop Menu */}
            <DesktopMenu setSidebar={setSidebar} />

            {/* MobileMenu */}
            <div className="transition-transform duration-1000 ease-in">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;