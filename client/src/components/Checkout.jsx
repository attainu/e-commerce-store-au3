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
    <div className="container-fluid mt-3">
      <Authorize />
      <div className="border p-2 rounded ">
        <h2 className="text-center">Checkout</h2>
      </div>

      <CheckoutDetails cart={cart} />

      <div className="container mt-3">
        <div className="row w-100 d-flex  align-items-center justify-content-center">
          <div className="col-9 d-flex  align-items-center">
            <div className="container">
              <div className="row w-100">
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <p className="text-success font-weight-bold m-0">
                    Order Total : ₹{total_price}
                  </p>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Affiliation Code (optional)"
                      onChange={e => {
                        setAffiliate_name(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <button
              className={`btn btn-success px-3 ${
                cart.length === 0 ? "disabled" : ""
              }`}
              onClick={handleCheckout}
            >
              Proceed With Checkout
            </button>
          </div>
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
