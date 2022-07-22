import React from "react";
import styled from "styled-components";
import Logo from "../assets/SneakerLabs.svg";
import ShoeImage from "../assets/SideImage.jpg";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";

const Wrapper = styled.div`
  background-color: var(--background-color);
  display: flex;
  height: 100vh;

  .form-content {
    padding: 2em;
    width: 50%;
    display: grid;
    grid-template-rows: auto 1fr auto;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .login-form {
      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        margin-bottom: 0.5em;
      }
    }
  }

  .brand-content {
    width: 50%;
    overflow: hidden;

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

const Login = () => {
  return (
    <Wrapper>
      <div className="form-content">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="login-form">
          <form>
            <h2>Log In</h2>
            <FormRow placeholder="Enter your email" />
            <FormRow placeholder="****************" />
            <button type="">Sign In</button>
            <p>{`Don’t have an account? Sign Up`}</p>
          </form>
        </div>

        <span>© SneakerLabs 2022</span>
      </div>

      <div className="brand-content">
        <img src={ShoeImage} alt="shoe-image" />
      </div>
    </Wrapper>
  );
};

export default Login;
