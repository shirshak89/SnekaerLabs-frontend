import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { consoleLog, loginUser } from "../features/user/userSlice";

const MainPage = () => {
  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>MainPage</div>
      <Link to="/login">Login</Link>
    </React.Fragment>
  );
};

export default MainPage;
