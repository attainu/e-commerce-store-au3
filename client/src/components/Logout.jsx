import React from "react";
import { useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../store/isLoggedIn/actions/isLoggedIn.actions";
import { clearCart } from "../store/cart/actions/cart.actions";
import { clearOrders } from "../store/orders/actions/orders.actions";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logout());
    dispatch(clearOrders());
    localStorage.clear();
  };
  return (
    <p
      className="nav-link text-danger font-weight-bold m-0"
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
