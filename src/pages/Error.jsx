import React from "react";
import Wrapper from "../assets/wrappers/Error";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <h2>404</h2>
      <h3>Not Found</h3>
      <p>The resource requested could not be found</p>
      <Link to="/">Back To Home</Link>
    </Wrapper>
  );
};

export default Error;
