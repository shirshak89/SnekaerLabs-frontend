import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ path, text }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive && " active";
        }}
        to={path}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
