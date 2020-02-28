import React from "react";

const CheckoutDetails = props => {
 
  return (
    <div className="container">
      {props.cart.map(cartItem => {
        return (
          <div className="container bg-light p-2">
            <div className="row border p-3 rounded my-2">
              <div className="col-1">
                <img
                  src={cartItem.image}
                  alt="prod-image"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-7 d-flex justify-content-center align-items-center">
                {cartItem.name}
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                {cartItem.qty}
              </div>
              <div className="col-2 d-flex justify-content-center align-items-center">
                {cartItem.qty * cartItem.price}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutDetails;
