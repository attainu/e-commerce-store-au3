import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
const CartTile = props => {
  const { product_id, name, price, brand, image, qty } = props.cartItem;
  return (
    <div className="col-12 ">
      {props.cartItem ? (
        <div
          className=" bg-light shadow-lg my-4 text-dark border m-1 rounded p-2"
          key={product_id + 87687}
        >
          <div className="container-fluid ">
            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col-md-1 col-xs-2 p-1 d-flex justify-content-center align-items-center">
                <img
                  src={image}
                  alt="cart=item-thumb"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-11 col-xs-10">
                <div className="row  my-2  px-3 ">
                  <div className="col-2 d-flex justify-content-center align-items-center">
                    <p className="m-0">{brand}</p>
                  </div>
                  <div className="col-8  d-flex justify-content-center align-items-center ">
                    <Link to={`product/single/${product_id}`}>
                      <p className="m-0">{name.substring(0, 35)}...</p>
                    </Link>
                  </div>
                  <div className="col-1  d-flex justify-content-center align-items-center ">
                    ₹{price}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid m-0">
            <div className="row py-2 rounded bg-dark text-light px-3">
              <div className="col-2 d-flex justify-content-center align-items-center ">
                <p className="m-0">₹{qty * price}</p>
              </div>
              <div className="col-8 d-flex justify-content-center align-items-center ">
                <div className="w-75 d-flex justify-content-center align-items-center">
                  <AddToCart
                    oncart={true}
                    product={props.cartItem}
                    product_id={product_id}
                    cart={props.cartArr}
                  />
                </div>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center p-0">
                <RemoveFromCart product={props.cartItem} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartTile;
