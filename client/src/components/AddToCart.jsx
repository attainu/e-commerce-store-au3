import React from "react";
import { useDispatch } from "react-redux";
import { checkInCart } from "./logic/cartLogic";
import { addToCart, removeFromCart } from "../store/cart/actions/cart.actions";
const AddToCart = props => {
  const dispatch = useDispatch();
  const result = checkInCart(props.product_id, props.cart);

  return (
    <div className="w-100 h-100">
      {result[0] ? (
        <div className="row h-100">
          <div className="col-5">
            <button
              className="btn btn-secondary w-100 h-100 py-3 rounded-0"
              onClick={() => dispatch(removeFromCart(result[1]))}
            >
              -
            </button>
          </div>
          <div className="col-2  d-flex justify-content-center align-items-center">
            <p className="text-dark m-0 p-0">{result[1].qty}</p>
          </div>
          <div className="col-5">
            <button
              className="btn btn-secondary w-100 h-100 py-3 rounded-0"
              onClick={() => dispatch(addToCart(props.product_id, props.cart))}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-success w-100 h-100 py-3 rounded-0"
          onClick={() => dispatch(addToCart(props.product_id, props.cart))}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default AddToCart;
