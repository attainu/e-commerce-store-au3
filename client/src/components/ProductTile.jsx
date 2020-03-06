import React from "react";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import Animation from "./Animation";
import ImageLoader from "react-load-image";
import { Link } from "react-router-dom";

function ProductTile(props) {
  const Preloader = () => {
    return (
      <div className="py-5 w-100 h-100 d-flex justify-content-center align-items-center">
        <img
          src="https://i.ibb.co/Fm67K0t/loading.gif"
          style={{ width: "30px" }}
        />
      </div>
    );
  };

  return (
    <div
      className={
        props.purpose === "cartDisplay"
          ? "col-md-4 col-sm-6 col-lg-2"
          : "col-md-6 col-sm-12 col-lg-3"
      }
    >
      <div className="card shadow shadow-sm mb-4">
        <ImageLoader src={props.product.image}>
          <img className="card-img-top" />
          <div>Error!</div>
          <Preloader />
        </ImageLoader>

        <div className="card-body ">
          <Link to={`/product/single/${props.product.product_id}`}>
            <small
              className="text-justify"
              style={{
                fontWeight: "bold"
              }}
            >
              {props.product.name.substring(0, 20)}...
            </small>
          </Link>

          <h6 className="text-left font-weight-bold">{props.product.brand}</h6>

          <p className="text-danger font-weight-bold">
            <span className="font-weight-bold mr-2 text-success">
              ₹{props.product.price}
            </span>
            <small className="font-weight-bold">
              <s>₹{props.product.price + (props.product.price - 300)}</s>
            </small>
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 p-0">
              <AddToCart
                product={props.product}
                key={props.product_id + 123}
                product_id={props.product.product_id}
                cart={props.cart}
              />
            </div>
            <div className="col-6 p-0">
              <AddToWishlist
                product_id={props.product.product_id}
                wishlist={props.wishlist}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
