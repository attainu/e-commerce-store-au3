import React from "react";
import AddToWishlist from "./AddToWishlist";

const OnOrder = ({ product }) => {
  return (
    <>
      <div className="col-3 d-flex   justify-content-center align-items-center">
        <small className="font-weight-bold">
          {product.name.substr(0, 15)}...
        </small>
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center">
        {product.price}
      </div>
      <div className="col-3 d-flex   justify-content-center align-items-center">
        X {product.qty}
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center">
        {product.price * product.qty}
      </div>
    </>
  );
};

const OnWishlist = ({ product, wishlist, product_id }) => {
  return (
    <>
      <div className="col-4 d-flex   justify-content-center align-items-center">
        <small className="font-weight-bold">{product.name}</small>
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center">
        {product.price}
      </div>
      <div className="col-3 d-flex justify-content-center align-items-center">
        <AddToWishlist
          wishlist={wishlist}
          product_id={product_id}
          onWishlist={true}
        />
      </div>
    </>
  );
};

const OrderTile = ({ product, index, purpose, wishlist, product_id }) => {
  const helper = purpose => {
    if (purpose && purpose === "wishlist") {
      return (
        <OnWishlist
          product={product}
          wishlist={wishlist}
          product_id={product_id}
        />
      );
    } else {
      return <OnOrder product={product} />;
    }
  };
  return (
    <>
      <div className="container">
        <div className="row alert alert-secondary border border-dark py-2 p-0">
          <div className="col-1 d-flex   justify-content-center align-items-center">
            {index + 1}
          </div>
          <div className="col-2 d-flex   justify-content-center align-items-center">
            <img
              src={product.image}
              alt="prod-thumb"
              style={{ width: "100%" }}
            />
          </div>
          {helper(purpose)}
        </div>
      </div>
    </>
  );
};

export default OrderTile;
