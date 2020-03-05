import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Authorize from "./Authorize";
import CheckoutDetails from "./CheckoutDetails";
import { placeOrder } from "../store/api/post";
import { clearCart } from "../store/cart/actions/cart.actions";
import { clearOrderResponse } from "../store/orderResponse/actions/orderResponse.actions";

const Checkout = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const orderResponse = useSelector(state => state.orderResponse);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const products = cart.map(item => {
    const { product_id, qty } = item;
    return {
      product_id,
      qty
    };
  });
  const total_price = cart.reduce((sum, b) => {
    return sum + parseFloat(b.price) * parseFloat(b.qty);
  }, 0);
  const [affiliate_name, setAffiliate_name] = useState(null);
  const handleCheckout = () => {
    placeOrder(
      isLoggedIn,
      dispatch,
      affiliate_name,
      products,
      total_price,
      isLoggedIn.user_id,
      isLoggedIn.token
    );
  };

  useEffect(() => {
    return () => {
      dispatch(clearOrderResponse());
    };
  }, []);

  return (
    <div className="container">
      <Authorize />
      <h1>Checkout Page</h1>
      <div className="container">
        <CheckoutDetails cart={cart} />
      </div>

      <div className="row mt-5">
        <div className="col-10 d-flex  align-items-center">
          <div className="row w-100">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <p className="text-success font-weight-bold m-0">
                Order Total : ₹{total_price}
              </p>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div class="input-group w-75">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Affiliation Code (optional)"
                  onChange={e => {
                    setAffiliate_name(e.target.value);
                  }}
                />
                <div class="input-group-append">
                  {/* <button class="btn btn-outline-success" type="button">
                    {affiliate_name}
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <button  className="btn btn-success px-3" onClick={handleCheckout}>
            Proceed With Checkout
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          {orderResponse.message ? (
            <p
              className={`text-center m-0 font-weight-bold ${
                !orderResponse.error ? "text-success" : "text-danger"
              }`}
            >
              {orderResponse.message}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
