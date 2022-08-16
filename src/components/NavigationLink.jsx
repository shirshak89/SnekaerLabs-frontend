import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ path, text, hideNav }) => {
  return (
    <li>
      <NavLink
        onClick={() => hideNav(false)}
        className={({ isActive }) => {
          return isActive ? "active" : undefined;
        }}
        to={path}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
