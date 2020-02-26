import React from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut, FiLink } from "react-icons/fi";
const LoginDropdown = ({ handleLogout, user_id }) => {
  return (
    <>
      <div className="alert alert-dark rounded-0 border-0 dropdown-item m-0">
        <span className="px-2">
          <FiUser />
        </span>
        <Link to="profile" className="text-muted m-0 p-0">
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
        <Link
          className="nav-link text-danger font-weight-bold"
          onClick={handleLogout}
        >
          <span className="pr-2">
            <FiLogOut />
          </span>
          Logout
        </Link>
      </div>
    </>
  );
};

export default LoginDropdown;
