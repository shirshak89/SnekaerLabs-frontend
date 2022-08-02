import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/MainPage";

const MainPage = () => {
  return (
    <Wrapper>
      <p>MainPage</p>
      <Link to="/login">Login</Link>
    </Wrapper>
  );
};

export default MainPage;
