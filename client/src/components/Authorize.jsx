import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const Authorize = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  if (!isLoggedIn.success && !isLoggedIn.token) {
    return <Redirect to="/login" />;
  } else return null;
};

export default Authorize;
