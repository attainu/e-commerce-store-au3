import React from "react";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";
const CartTile = props => {
  const { product_id, name, price, brand, image, qty } = props.cartItem;
  return (
    <div className="col-12" style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
      <div
        className=" bg-light text-dark border m-1 rounded p-2"
        key={product_id + 87687}
      >
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-1 p-0 d-flex justify-content-center align-items-center">
              <img
                src={image}
                alt="cart=item-thumb"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-11">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-2 d-flex justify-content-center align-items-center">
                  {brand}
                </div>
                <div className="col-9 d-flex justify-content-center align-items-center ">
                  {name.substring(0,35)}...
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center ">
                  ₹{price}
                </div>
              </div>

              <div className="row py-3 d-flex justify-content-center align-items-center">
                <div className="col-2 d-flex justify-content-center align-items-center ">
                  <p className="m-0">₹{qty * price}</p>
                </div>
                <div className="col-9 d-flex justify-content-center align-items-center ">
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
        </div>
      </div>
    </div>
  );
};

export default CartTile;
