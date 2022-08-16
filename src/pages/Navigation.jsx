import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

import { BiUser, BiHeart, BiCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import Logo from "../assets/SneakerLabs.png";
import Wrapper from "../assets/wrappers/Navigation";
import NavigationLink from "../components/NavigationLink";
import Footer from "../components/Footer";

const Navigation = () => {
  const { user } = useSelector((store) => store.user);

  const [showNav, setShowNav] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <div style={{ borderBottom: "1px solid #dee0ea" }}>
        <Wrapper>
          <Link className="logo" to="/">
            <img src={Logo} />
          </Link>
          <div className={showNav ? "primary-nav show" : "primary-nav hide"}>
            <ul>
              <NavigationLink path="/" text="Home" hideNav={setShowNav} />
              <NavigationLink path="/shop" text="Shop" hideNav={setShowNav} />
              <NavigationLink
                path="/contact"
                text="Contact"
                hideNav={setShowNav}
              />
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
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
