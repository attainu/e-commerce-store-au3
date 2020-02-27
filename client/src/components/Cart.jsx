import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCartItems, clearCart } from "../store/cart/actions/cart.actions";
import CartTile from "./CartTile";
import { getTotal } from "../logic/cartLogic";

const Cart = props => {
  const dispatch = useDispatch();
  console.log(props.cartArr, props.wishlist, props.products);

  useEffect(() => {
    //is logged in userId Will go here
    dispatch(fetchCartItems("1"));
  }, []);

  return (
    <div className="container p-3">
      <div className="row">
        {props.cartArr.map(item => {
          return <CartTile cartItem={item} cartArr={props.cartArr} />;
        })}
      </div>
      <div className="row p-5 d-flex justify-content-center align-items-center">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <h6 className="text-center text-secondary font-weight-bold m-0">
            Cart Value -{" "}
            <span className="text-success">
              ₹ {getTotal(props.cartArr)}.00{" "}
            </span>
          </h6>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-outlint btn-outline-danger"
            onClick={e => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Link className="btn btn-success px-3" to="/checkout">
            Go To Checkout ->>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
