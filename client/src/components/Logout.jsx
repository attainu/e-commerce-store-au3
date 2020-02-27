import React from "react";
import { useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../store/isLoggedIn/actions/isLoggedIn.actions";
import { clearCart } from "../store/cart/actions/cart.actions";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logout());
    localStorage.clear();
  };
  return (
    <p
      className="nav-link text-danger font-weight-bold"
      style={{ cursor: "pointer" }}
      onClick={handleLogout}
    >
      <span className="pr-2">
        <FiLogOut />
      </span>
      Logout
    </p>
  );
};

export default Logout;
