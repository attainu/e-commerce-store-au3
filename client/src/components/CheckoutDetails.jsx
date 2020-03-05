import React from "react";
import { Link } from "react-router-dom";
import { API_ORIGIN_URL } from "../config";

const CheckoutDetails = props => {
  return (
    <div className="container">
      {props.cart.map((cartItem, idx) => {
        return (
          <div className="row bg-white shadow-lg border rounded my-4 p-1">
            <div className="col-1 d-flex justify-content-center align-items-center">
              {idx + 1}
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <img
                src={cartItem.image}
                alt="prod_thumb"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-5 d-flex justify-content-center align-items-center">
              <Link
                to={`product/single/${cartItem.product_id}`}
              >
                {" "}
                {cartItem.name.substr(0, 30)}...
              </Link>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              {cartItem.qty}
            </div>
            <div className="col-1 d-flex justify-content-center align-items-center">
              ₹{cartItem.qty * cartItem.price}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutDetails;
