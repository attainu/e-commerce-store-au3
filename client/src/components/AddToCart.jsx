import React from "react";
import { useDispatch } from "react-redux";
import { checkInCart } from "./logic/cartLogic";
import { addToCart } from "../store/cart/actions/cart.actions";
const AddToCart = props => {
  const dispatch = useDispatch();

  const result = checkInCart(props.product_id, props.cart);
  
  return (
    <div className="w-100">
      {result[0] ? (
        <div className="row">
          <div className="col-5">
            <button className="btn btn-danger w-100 h-100 py-3 rounded-0">
              -
            </button>
          </div>
          <div className="col-2  d-flex justify-content-center align-items-center">
            <p className="text-dark m-0 p-0">{result[0][1]}</p>
          </div>
          <div className="col-5">
            <button className="btn btn-success w-100 h-100 py-3 rounded-0">
              +
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-success w-100 h-100 py-3 rounded-0"
              onClick={() => dispatch(addToCart(props.product_id))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
