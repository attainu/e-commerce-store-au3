import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return <div>Profile</div>;
};

export default Profile;
