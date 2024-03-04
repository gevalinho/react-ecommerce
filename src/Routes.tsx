import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ECommerceHomePage from "pages/ECommerceHomePage";
import SignUp from "pages/SignUp";
import LogIn from "pages/LogIn";
import AccountDropdownWithaccount from "pages/AccountDropdownWithaccount";
import CategoryDropdown from "pages/CategoryDropdown";
import Wishlist from "pages/Wishlist";
import Cart from "pages/Cart";
import CheckOut from "pages/CheckOut";
import Account from "pages/Account";
import About from "pages/About";
import Contact from "pages/Contact";
import Error from "pages/Error";
import ProductDetailspage from "pages/ProductDetailspage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <ECommerceHomePage />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <LogIn />,
    },
    {
      path: "accountdropdownwithaccount",
      element: <AccountDropdownWithaccount />,
    },
    {
      path: "categorydropdown",
      element: <CategoryDropdown />,
    },
    {
      path: "wishlist",
      element: <Wishlist />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <CheckOut />,
    },
    {
      path: "account",
      element: <Account />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "error",
      element: <Error />,
    },
    {
      path: "productdetailspage",
      element: <ProductDetailspage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
