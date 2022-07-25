import React, { useState } from "react";
import Logo from "../assets/SneakerLabs.svg";
import ShoeImage from "../assets/SideImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import Wrapper from "../assets/wrappers/Login";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

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

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;

    return dispatch(loginUser({ email, password }));
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
            <h2>Log In</h2>
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>
                <input name="rememberme" value="remember" type="checkbox" />
                Remember me
              </label>
              <span>Forgot Password?</span>
            </div>
            <button type="submit" className="btn btn-submit">
              Sign In
            </button>
            <p>{`Don't have an account? Sign Up`}</p>
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
