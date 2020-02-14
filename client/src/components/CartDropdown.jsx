import React from "react";
import { useDispatch } from "react-redux";
import AddToCart from "./AddToCart";
import { clearCart } from "../store/cart/actions/cart.actions";

const CartDropdown = props => {
  const dispatch = useDispatch();

  if (props.cart.length > 0) {
    return (
      <>
        {props.cart.map((item, index) => {
          return (
            <div
              className="dropdown-item my-3"
              key={index + 63872}
              
            >
              <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <h6 className="text-center">
                    {item.product_id} * {item.qty}
                  </h6>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <AddToCart
                    key={index + 8786}
                    product_id={item.product_id}
                    cart={props.cart}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <p
          className="font-weight-bold text-danger text-center "
          onClick={e => dispatch(clearCart())}
          style={{ cursor: "pointer" }}
        >
          Clear Cart
        </p>
      </>
    );
  } else {
    return <p className="text-center text-danger m-0 p-2">Cart is empty !!!</p>;
  }
};

export default CartDropdown;
