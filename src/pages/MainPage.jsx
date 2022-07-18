import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { consoleLog, loginUser, testAPICall } from "../features/user/userSlice";

const MainPage = () => {
  const { name, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testAPICall());
  }, []);

  return (
    <React.Fragment>
      <div>MainPage</div>
      <button onClick={() => dispatch(consoleLog())}>Click Me</button>
    </React.Fragment>
  );
};

export default MainPage;
