import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navigation";
import Logo from "../assets/SneakerLabs.png";
import { BiUser, BiSearch, BiHeart, BiCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import NavigationLink from "../components/NavigationLink";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import Footer from "../components/Footer";

const Navigation = () => {
  const { user } = useSelector((store) => store.user);

  const [showNav, setShowNav] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Link className="logo" to="/">
          <img src={Logo} />
        </Link>
        <div className={showNav ? "primary-nav show" : "primary-nav hide"}>
          <ul>
            <NavigationLink path="/" text="Home" />
            <NavigationLink path="/shop" text="Shop" />
            <NavigationLink path="/women" text="Women" />
            <NavigationLink path="/men" text="Men" />
            <NavigationLink path="/contact" text="Contact" />
          </ul>
        </div>
        <div className="secondary-nav">
          {!user ? (
            <Link to="/login">
              <BiUser />
            </Link>
          ) : (
            <a>
              <FiLogOut onClick={() => dispatch(logoutUser())} />
            </a>
          )}
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
        {!showNav && (
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => setShowNav(true)}
          />
        )}
        {showNav && (
          <AiOutlineClose
            onClick={() => setShowNav(false)}
            className="close-btn"
          />
        )}
      </Wrapper>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
