import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import dots from "../../assets/dots.svg";

function DesktopMenu({ setSidebar }) {
  const [active, setActive] = useState("");

  return (
    <div onMouseLeave={() => setActive("")} className="lg:block hidden">
      {/************************ desktop menu start here *************************/}
      <ul className="flex gap-10 items-center">
        <li className="relative hover:text-blue-300">
          <Link
            className="flex gap-2 items-center w-[65px]"
            onMouseEnter={() => setActive("home")}
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
          {active == "home" && (
            <div className="w-48 p-2 bg-[#081e34]  z-50 min-h-max rounded-lg  shadow shadow-slate-900 absolute mt-3 transition-all duration-500">
              <ul className="" onMouseLeave={() => setActive("")}>
                <li>
                  <Link className="sub-menu-style block" to={"/"}>
                    Home 1
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/home-two"}>
                    Home 2
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/home-three"}>
                    Home 3
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <Link
            className="flex gap-2 items-center w-[65px] "
            onMouseEnter={() => setActive("pages")}
            to={"/"}
          >
            Pages{" "}
            <svg
              className="w-8 h-2"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z" />
            </svg>
          </Link>
          {active == "pages" && (
            <div className="min-w-48 max-w-max p-2 bg-[#081e34] z-50 min-h-max rounded-lg  shadow shadow-slate-900 absolute mt-3 transition-all duration-500">
              <ul onMouseLeave={() => setActive("")}>
                <li className="flex gap-4">
                  <div>
                    <li>
                      <Link className="sub-menu-style block" to={"/aboutus"}>
                        AboutUs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/productlist"}
                      >
                        ProductList
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/singleproduct"}
                      >
                        SingleProduct
                      </Link>
                    </li>
                    <li>
                      <Link className="sub-menu-style block" to={"/cart"}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="sub-menu-style block" to={"/checkout"}>
                        CheckOut
                      </Link>
                    </li>
                    <li>
                      <Link className="sub-menu-style block" to={"/ourteam"}>
                        OurTeam
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/pricingplan"}
                      >
                        PricingPlan
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/ourservices"}
                      >
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="sub-menu-style block"
                        to={"/spywareprotection"}
                      >
                        SpywareProtection
                      </Link>
                    </li>
                    <li>
                      <Link className="sub-menu-style block" to={"/contactus"}>
                        ContactUs
                      </Link>
                    </li>
                    <li>
                      <Link className="sub-menu-style block" to={"/faqs"}>
                        Faqs
                      </Link>
                    </li>

                    <li>
                      <Link className="sub-menu-style block" to={"*"}>
                        NotFoundPage
                      </Link>
                    </li>
                  </div>
                </li>
              </ul>
              <div className="z-50"></div>
            </div>
          )}
        </li>

        <li>
          <Link onMouseEnter={() => setActive("shop")} to={"/"}>
            Shop
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-2 items-center w-[65px]"
            onMouseEnter={() => setActive("blog")}
            to={"/"}
          >
            Blog{" "}
            <svg
              className="w-8 h-2"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z" />
            </svg>
          </Link>
          {active == "blog" && (
            <div className="w-48 p-2 bg-[#081e34] z-50  min-h-max rounded-lg  shadow shadow-slate-900 absolute mt-3 transition-all duration-500 cursor-pointer">
              <ul onMouseLeave={() => setActive("")}>
                <li>
                  <Link className="sub-menu-style block" to={"/bloglist"}>
                    BlogList
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/blogitem"}>
                    BlogsItem
                  </Link>
                </li>
                <li>
                  <Link className="sub-menu-style block" to={"/blogdetails"}>
                    BlogDetails
                  </Link>
                </li>
              </ul>
              <div className="z-50"></div>
            </div>
          )}
        </li>
        <li>
          <Link to={"/contactus"}>Contact Us</Link>
        </li>

        <li>
          <ul className="flex gap-6 items-center cursor-pointer">
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={linkedin} alt="linkedin" />
            </li>
          </ul>
        </li>
        <li
          onClick={() => setSidebar(true)}
          className="bg-[#fefffe0f] w-12 h-12 flex justify-center cursor-pointer items-center rounded-full hover:bg-[#3657CD] duration-300"
        >
          <img src={dots} alt="dots" />
        </li>
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
