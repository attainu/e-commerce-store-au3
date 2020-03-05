import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cart/actions/cart.actions";
import CartTile from "./CartTile";
import ClearCart from "./ClearCart";

const CartDropdown = props => {
  const dispatch = useDispatch();

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

{
  /* <div className="col-5 d-flex justify-content-center align-items-center">
                  <h6 className="text-center">
                    {item.product_id} * {item.qty}
                  </h6>
                </div>
                <div className="col-5 d-flex justify-content-center align-items-center">
                  <AddToCart
                    key={index + 8786}
                    product_id={item.product_id}
                    cart={props.cart}
                  />
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                  <RemoveFromCart product={item} />
                </div>
              </div> */
}
