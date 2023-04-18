import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Main from "../main/Main"
import PricingPlan from "../Pages/PricingPlan/PricingPlan"
import OurTeam from "../Pages/OurTeam/OurTeam"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"
import BlogsItem from "../Pages/Blogs/BlogsItem"
import Faqs from "../Pages/Faqs/Faqs"
import Footer from "../Components/Footer/Footer"
import SpywareProtection from "../Components/SpywareProtection/SpywareProtection"
import ContactUs from "../Pages/ContactUs/ContactUs"
import ProductList from "../Pages/ProductList/ProductList"
import AboutUs from "../Pages/AboutUs/AboutUs"
import BlogDetails from "../Components/BlogDetails/BlogDetails"
import BlogList from "../Pages/Blogs/BlogList/BlogList"
import SingleProduct from "../Components/SingleProduct/SingleProduct"
import CheckOut from "../Components/CheckOut/CheckOut"
import Cart from "../Components/Cart/Cart"
import Home2 from "../Pages/Home/Home2"
import OurServices from "../Pages/OurServices/OurServices"
import Home3 from "../Pages/Home/Home3"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home-two",
                element: <Home2 />
            },
            {
                path: "/home-three",
                element: <Home3 />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
             {
                path: "/productlist",
                element: <ProductList />
            },
            {
                path: "/ourservices",
                element: <OurServices />
            },
            {
                path: "/singleproduct",
                element: <SingleProduct />
            }, 
            {
                path: "/cart",
                element: <Cart />
            }, 
            {
                path: "/checkout",
                element: <CheckOut />
            },
            {
                path: "/pricingplan",
                element: <PricingPlan />
            },
            {
                path: "/ourteam",
                element: <OurTeam />
            },
            {
                path: "/blogitem",
                element: <BlogsItem />
            },
            {
                path: "/bloglist",
                element: <BlogList />
            },
             {
                path: "/blogdetails",
                element: <BlogDetails />
            },
            {
                path: "/faqs",
                element: <Faqs />
            }, 
            {
                path: "/spywareprotection",
                element: <SpywareProtection />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "/footer",
                element: <Footer />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }


        ]

    }
])


export default routes