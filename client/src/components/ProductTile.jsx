import React from "react";

function ProductTile(props) {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4 m-auto p-auto">
      <div className="card shadow shadow-sm m-3" style={{ width: "100%" }}>
        <img alt="product_image" className="card-img-top" src={props.product.image} />
        <div className="card-body pl-2">
          <p
            className="text-justify"
            style={{ fontSize: "0.9rem", height: "5rem", fontWeight: "bold" }}
          >
            {props.product.name}
          </p>

          <div className="row">
            <div className="col-4">
              {props.product.product_id}
              <h6 className="text-left ">{props.product.brand}</h6>
            </div>
            <div className="col-8">
              <p className="text-danger text-right font-weight-bold">
                <span className="mr-3 text-success">
                  ₹{props.product.price}
                </span>
                <s>₹{props.product.price + (props.product.price - 300)}</s>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
