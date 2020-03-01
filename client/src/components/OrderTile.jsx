import React from "react";

const OrderTile = ({ product, index }) => {
  return (
    <>
      <div className="row alert alert-secondary border border-dark py-2">
        <div className="col-1 d-flex   justify-content-center align-items-center">
          {index + 1}
        </div>
        <div className="col-2 d-flex   justify-content-center align-items-center">
          <img src={product.image} alt="prod-thumb" style={{ width: "100%" }} />
        </div>
        <div className="col-3 d-flex   justify-content-center align-items-center">
          <small className="font-weight-bold">
            {product.name.substr(0, 15)}...
          </small>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          {product.price}
        </div>
        <div className="col-2 d-flex   justify-content-center align-items-center">
          X {product.qty}
        </div>
        <div className="col-1 d-flex justify-content-center align-items-center">
          {product.price * product.qty}
        </div>
      </div>
    </>
  );
};

export default OrderTile;
