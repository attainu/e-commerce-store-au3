import React from "react";

function ProductTile(props) {
  return (
    <div className="col-md-6 col-sm-12 col-lg-3">
      <div className="card shadow shadow-sm mb-4" style={{ width: "100%" }}>
        <img
          alt="product_image"
          className="card-img-top"
          src={props.product.image}
        />
        <div className="card-body ">
          <p
            className="text-justify"
            style={{ fontSize: "0.9rem", height: "2.5rem", fontWeight: "bold" }}
          >
            {props.product.name}
          </p>

          <div className="row">
            <div className="col-3">
              <h6 className="text-left ">{props.product.brand}</h6>
            </div>
            <div className="col-9">
              <p className="text-danger text-right font-weight-bold">
                <span className="mr-3 text-success">
                  ₹{props.product.price}
                </span>
                <s>₹{props.product.price + (props.product.price - 300)}</s>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <button className="btn btn-success w-100 h-100 py-3 rounded-0">
              Add To Bag
            </button>
          </div>
          <div className="row">
            <button className="btn btn-danger w-100 h-100 rounded-0 py-3">
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
