import React from "react";
import { useSelector } from "react-redux";
import Signup from "./Signup";
import Authorize from "./Authorize";
const Profile = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const { firstname, lastname, email, gender, mobile, address } = isLoggedIn;

  return (
    <div className="container">
      <Authorize />
      <h3>
        Welcome {firstname} {lastname}
      </h3>
      <button>Edit</button>
      <Signup purpose="profile" />
    </div>
  );
};

export default Profile;
