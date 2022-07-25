import React, { useState } from "react";
import Logo from "../assets/SneakerLabs.svg";
import ShoeImage from "../assets/SideImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/Login";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Login = () => {
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const clearForm = () => {
    setValues({ name: "", email: "", password: "", isMember: true });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = values;

    if (!values.isMember) {
      clearForm();
      return dispatch(registerUser({ email, password, name }));
    }

    dispatch(loginUser({ email, password }));
    clearForm();
  };

  const toggleClick = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper>
      <div className="form-content">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="login-form">
          <form onSubmit={onSubmit}>
            <h2>{values.isMember ? "Log In" : "Sign Up"}</h2>

            {!values.isMember && (
              <FormRow
                type="text"
                name="name"
                value={values.name}
                placeholder="Enter your name"
                handleChange={handleChange}
              />
            )}
            <FormRow
              type="email"
              name="email"
              value={values.email}
              placeholder="Enter your email"
              handleChange={handleChange}
            />
            <FormRow
              type="password"
              name="password"
              value={values.password}
              placeholder="****************"
              handleChange={handleChange}
            />

            {values.isMember && (
              <div className="forgot-remember">
                <label>
                  <input name="rememberme" value="remember" type="checkbox" />{" "}
                  Remember Me
                </label>
                <span>Forgot Password?</span>
              </div>
            )}

            <button type="submit" className="btn btn-submit">
              {!values.isMember ? "Sign Up" : "Sign In"}
            </button>

            <p>
              {!values.isMember
                ? "Already a member? "
                : "Don't have an account? "}
              <button
                type="button"
                className="link-btn"
                onClick={() => toggleClick()}
              >
                {!values.isMember ? "Sign In " : "Sign Up "}
              </button>
            </p>
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
