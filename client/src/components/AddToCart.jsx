import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkInCart } from "../logic/cartLogic";
import { addToCart, removeFromCart } from "../store/cart/actions/cart.actions";
import { FaPlus } from "react-icons/fa";
const AddToCart = props => {
  const dispatch = useDispatch();
  const result = checkInCart(props.product_id, props.cart);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <div className=" container-fluid h-100 m-0 p-0">
      {result[0] ? (
        <div className="row h-100 w-100 p-0 m-0">
          <div className="col-4 p-0 h-100 d-flex justify-content-center align-items-center">
            <button
              className={`btn m-0  btn-danger  h-100 ${
                props.oncart ? "rounded w-75" : "rounded-0 w-100"
              }`}
              onClick={() => dispatch(removeFromCart(result[1], isLoggedIn))}
            >
              -
            </button>
          </div>

          <div className="col-4 p-0 d-flex justify-content-center align-items-center">
            <p
              className={` "text-light text-center w-100 m-0 p-0`}
            >
              {result[1].qty}
            </p>
          </div>
          <div className="col-4 p-0 h-100 d-flex justify-content-center align-items-center">
            <button
              className={`btn m-0  btn-success  h-100 ${
                props.oncart ? "rounded w-75" : "rounded-0 w-100"
              }`}
              onClick={() =>
                dispatch(addToCart(props.product, props.cart, isLoggedIn))
              }
            >
             +
            </button>
          </div>
        </div>
      ) : (
        <button
          className="btn font-weight-bold success-button w-100 h-100 py-3 rounded-0"
          onClick={() =>
            dispatch(addToCart(props.product, props.cart, isLoggedIn))
          }
        >
          <h5 className="m-0 p-0">
            Cart <FaPlus />
          </h5>
        </button>
      )}
    </div>
  );
};

export default AddToCart;
