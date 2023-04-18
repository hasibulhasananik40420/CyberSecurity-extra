import React, { useEffect, useState } from "react";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import X from "../../assets/X.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
   <div className="">
     <div onMouseLeave={() => setIsOpen(true)} className="lg:hidden block ">
      {isOpen ? (
        <img onClick={() => setIsOpen(!isOpen)} src={X} alt="" />
      ) : (
        <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-[#64ffda] cursor-pointer overflow-hidden group"
      >
        <span className="w-full h-[2px] bg-[#64ffda] inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>

        <span className="w-full h-[2px] bg-[#64ffda] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>

        <span className="w-full h-[2px] bg-[#64ffda] inline-flex transform  translate-x-1 group-hover:translate-x-3  transition-all ease-in-out duration-300"></span>
      </div>


      )}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#3657cd] border z-0 w-3/4 top-0 right-0 max-h-screen absolute p-2 overflow-y-auto"
        >
          <div className="">
            <div className="cursor-pointer">
              <img onClick={() => setIsOpen(!isOpen)} src={X} alt="" />
            </div>

           
            <div className="min-h-screen">
              <ul className="flex gap-3 items-center flex-col">
                <li className="sm-menu-style">
                  <Link
                    className="flex gap-2 items-center "
                    onClick={() => setActive("home")}
                    to={"/"}
                  >
                    Home{" "}
                    <svg
                      className="w-8 h-2"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  {active == "home" && (
                    <div className="min-w-48 p-2  min-h-max rounded-lg w-full  mt-2 transition-all duration-500">
                      <ul
                        onClick={() => setIsOpen(false)}
                        onMouseLeave={() => setActive("")}
                      >
                        <li onClick={() => setIsOpen(false)}>
                          <Link className="mobile-sub-menu-style" to={"/"}>
                            Home 1
                          </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/home-two"}
                          >
                            Home 2
                          </Link>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/home-three"}
                          >
                            Home 3
                          </Link>
                        </li>
                      </ul>
                      <div className="z-50"></div>
                    </div>
                  )}
                </li>
                <li className="sm-menu-style">
                  <span
                    className="flex gap-2 items-center "
                    onClick={() => setActive("pages")}
                  >
                    Pages
                    <svg
                      className="w-8 h-2"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z" />
                    </svg>
                  </span>
                </li>
                <li>
                  {active == "pages" && (
                    <div className="min-w-48 p-2  min-h-max rounded-lg w-full  mt-2 transition-all duration-500">
                      <ul className="" onMouseLeave={() => setActive("")}>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/aboutus"}
                          >
                            AboutUs
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/productlist"}
                          >
                            ProductList
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/singleproduct"}
                          >
                            SingleProduct
                          </Link>
                        </li>
                        <li>
                          <Link className="mobile-sub-menu-style" to={"/cart"}>
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/checkout"}
                          >
                            CheckOut
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/ourteam"}
                          >
                            OurTeam
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/pricingplan"}
                          >
                            PricingPlan
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/ourservices"}
                          >
                            Our Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/spywareprotection"}
                          >
                            SpywareProtection
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/contactus"}
                          >
                            ContactUs
                          </Link>
                        </li>
                        <li>
                          <Link className="mobile-sub-menu-style" to={"/faqs"}>
                            Faqs
                          </Link>
                        </li>

                        <li>
                          <Link className="mobile-sub-menu-style" to={"*"}>
                            NotFoundPage
                          </Link>
                        </li>
                      </ul>
                      <div className="z-50"></div>
                    </div>
                  )}
                </li>
                <li className="sm-menu-style">
                  <span
                    className="flex gap-2 items-center justify-center text-center"
                    onClick={() => setActive("blog")}
                    
                  >
                    Blogs{" "}
                    <svg
                      className="w-8 h-2"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z" />
                    </svg>
                  </span>
                </li>
                <li>
                  {active == "blog" && (
                    <div className="min-w-48 p-2  min-h-max rounded-lg w-full  mt-2 transition-all duration-500">
                      <ul
                        onClick={() => setIsOpen(false)}
                        onMouseLeave={() => setActive("")}
                      >
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/bloglist"}
                          >
                            BlogList
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/blogitem"}
                          >
                            BlogsItem
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-sub-menu-style"
                            to={"/blogdetails"}
                          >
                            BlogDetails
                          </Link>
                        </li>
                      </ul>
                      <div className="z-50"></div>
                    </div>
                  )}
                </li>
                <li className="sm-menu-style">
                  <Link
                    className="flex gap-2 items-center mr-8 "
                    onClick={() => setActive("shop")}
                    to={"/"}
                  >
                    Shop
                  </Link>
                </li>
                <li className="sm-menu-style mr-3">
                  <Link to={"/contactus"}>Contact</Link>
                </li>
                <li>
                  <ul className="flex  gap-6 items-center">
                    <li>
                      <img
                        className="hover:scale-125 duration-200"
                        src={facebook}
                        alt="facebook"
                      />
                    </li>
                    <li>
                      <img
                        className="hover:scale-125 duration-200"
                        src={twitter}
                        alt="twitter"
                      />
                    </li>
                    <li>
                      <img
                        className="hover:scale-125 duration-200"
                        src={linkedin}
                        alt="linkedin"
                      />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
   </div>
  );
}
export default MobileMenu;
