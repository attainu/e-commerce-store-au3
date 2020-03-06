import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLink, FiShoppingBag, FiLock } from "react-icons/fi";
import Logout from "./Logout";
const LoginDropdown = ({ user_id }) => {
  return (
    <>
      <div className="alert alert-dark rounded-0 border-0 dropdown-item m-0">
        <span className="px-2">
          <FiUser />
        </span>
        <Link to="/profile" className="text-muted m-0 p-0">
          Profile
        </Link>
      </div>
      <div className="alert alert-dark rounded-0 border-0 dropdown-item m-0">
        <span className="px-2">
          <FiLink />
        </span>
        <Link to={`/affiliate/${user_id}`} className="text-muted m-0 p-0">
          Affiliate
        </Link>
      </div>
      <div className="alert alert-dark rounded-0 border-0 dropdown-item m-0">
        <span className="px-2">
          <FiShoppingBag />
        </span>
        <Link to={`/orders`} className="text-muted m-0 p-0">
          My Orders
        </Link>
      </div>
      <div className="alert alert-dark rounded-0 border-0 dropdown-item m-0">
        <span className="px-2">
          <FiLock />
        </span>
        <Link to={`/updatePassword`} className="text-muted m-0 p-0">
          Change Password
        </Link>
      </div>
      <div className="alert alert-dark rounded-0 border-0 dropdown-item m-0">
        <Logout />
      </div>
    </>
  );
};

export default LoginDropdown;
