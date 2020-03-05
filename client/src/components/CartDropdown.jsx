import React from "react";
import { useDispatch } from "react-redux";
import CartTile from "./CartTile";
import ClearCart from "./ClearCart";

const CartDropdown = props => {
  if (props.cart.length > 0) {
    return (
      <>
        {props.cart.map((item, index) => {
          return (
            <div className="dropdown-item my-0 py-1" key={index + 63872}>
              <div className="row">
                <CartTile cartArr={props.cart} cartItem={item} />
              </div>
            </div>
          );
        })}
        <ClearCart />
      </>
    );
  } else {
    return (
      <p className="text-center text-danger  m-0 py-3">Cart is empty !!!</p>
    );
  }
};

export default CartDropdown;
