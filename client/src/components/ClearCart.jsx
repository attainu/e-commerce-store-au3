import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cart/actions/cart.actions";
const ClearCart = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div>
      <p
        className="font-weight-bold text-danger m-0 py-3 text-center "
        onClick={e => dispatch(clearCart(isLoggedIn))}
        style={{ cursor: "pointer" }}
      >
        Clear Cart
      </p>
    </div>
  );
};

export default ClearCart;
