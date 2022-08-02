import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navigation";
import Logo from "../assets/SneakerLabs.svg";
import { BiUser, BiSearch, BiHeart, BiCart } from "react-icons/bi";
import NavigationLink from "../components/NavigationLink";

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <Link className="logo" to="/">
          <img src={Logo} />
        </Link>
        <div className="primary-nav">
          <ul>
            <NavigationLink path="/" text="Home" />
            <NavigationLink path="/shop" text="Shop" />
            <NavigationLink path="/women" text="Women" />
            <NavigationLink path="/men" text="Men" />
            <NavigationLink path="/contact" text="Contact" />
          </ul>
        </div>
        <div className="secondary-nav">
          <Link to="/login">
            <BiUser />
          </Link>
          <Link to="/login">
            <BiSearch />
          </Link>
          <Link to="/login">
            <BiHeart />
          </Link>
          <Link to="/cart">
            <BiCart />
          </Link>
        </div>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navigation;
