import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { fetchCartItems, clearCart } from "../store/cart/actions/cart.actions";
import CartTile from "./CartTile";
import { getTotal } from "../logic/cartLogic";
import ClearCart from "./ClearCart";

const Cart = props => {
  const dispatch = useDispatch();
  console.log(props.cartArr, props.wishlist, props.products);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  useEffect(() => {
    console.log(isLoggedIn, "from crt");
    if (isLoggedIn) {
      dispatch(fetchCartItems(isLoggedIn));
    }
  }, []);

  return (
    <div className="container mt-3 p-3">
      <div className="border p-2 ">
        <h2 className="text-center">
          Cart <FaShoppingCart />
        </h2>
      </div>
      <div className="row mt-5">
        {props.cartArr.map(item => {
          return <CartTile cartItem={item} cartArr={props.cartArr} />;
        })}
      </div>
      <div className="row p-5 d-flex justify-content-center align-items-center">
        <div className="col-12 mb-5">
          {props.cartArr.length === 0 ? (
            <>
              <h6 className="text-center text-danger">
                Your cart Is empty !!!
              </h6>
              <h5 className="text-center ">Add few Items In Cart...</h5>
            </>
          ) : null}
        </div>
        <div className="col-4 d-flex justify-content-center  align-items-center">
          <h6 className="text-center text-secondary font-weight-bold m-0">
            Cart Value -{" "}
            <span className="text-success">
              ₹ {getTotal(props.cartArr)}.00{" "}
            </span>
          </h6>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <ClearCart />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Link
            disbled={true}
            className={`btn btn-success px-3 ${
              props.cartArr.length === 0 ? "disabled" : ""
            }`}
            to="/checkout"
          >
            Go To Checkout ->>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
