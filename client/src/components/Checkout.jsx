import React from "react";
import { useSelector } from "react-redux";
import Authorize from "./Authorize";
import CheckoutDetails from "./CheckoutDetails";

const Checkout = () => {
  const cart = useSelector(state => state.cart);

  const total = cart.reduce((sum, b) => {
    return sum + parseFloat(b.price) * parseFloat(b.qty);
  }, 0);

  return (
    <>
      <Authorize />
      <div className="container">
        <CheckoutDetails cart={cart} />
      </div>
      <div className="row mt-5">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <h4 className="text-success">Total Order Amount : ₹{total}</h4>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <button className="btn btn-success px-3">
            Proceed With Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
