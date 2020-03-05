import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_ORIGIN_URL } from "../config";
import Animation from "./Animation";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import ImageMagnified from "./ImageMagnified";

const ProductDetails = props => {
  const id = props.match.params.id;
  const wishlist = useSelector(state => state.wishlist);
  const cart = useSelector(state => state.cart);
  const [product, setProduct] = useState(null);
  const helper = p => {
    let lines = p.description.replace(/\\n/g,'');
    lines = lines.replace(/\\/g, '');
    let supplier_name = p.supplier_name.replace(/\\n/g,'');
    supplier_name = supplier_name.replace(/\\/g, '');
    let supplier_address = p.supplier_address.replace(/\\n/g,'');
    supplier_address = supplier_address.replace(/\\/g, '');
    return (
      <>
        <div className="row">
          <div className="col-md-6 col-sm-12 p-3 d-flex justify-content-center align-items-center">
            {/* <img className="img-fluid w-75" src={p.image} alt="prod" /> */}
            <ImageMagnified url={p.image} />
          </div>
          <div className=" p-5 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-12">
                <h3>{p.brand}</h3>
                <hr className="bg-dark" />
              </div>
              <div className="col-12">
                <h5>{p.name}</h5>
              </div>
              <div className="col-12">
                <h3 className="text-success font-weight-bold">
                  ₹{p.price}
                  <span>
                    <small className=" text-danger mx-3 font-weight-bold">
                      <s>₹{p.price + (p.price - 300)}</s>
                    </small>
                  </span>{" "}
                </h3>
              </div>
              <div className="col-12">
                <div className="row py-5">
                  <div className="col-6">
                    <AddToCart
                      product={p}
                      product_id={p.product_id}
                      cart={cart}
                    />
                  </div>
                  <div className="col-6">
                    <AddToWishlist
                      wishlist={wishlist}
                      product_id={p.product_id}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h5>Description :</h5>
                <p>{lines}</p>
                <h5>Supplier Name :</h5>
                <p>{supplier_name}</p>
                <h5>Supplier Address :</h5>
                <p>{supplier_address}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    const url = `${API_ORIGIN_URL}/product/single/${id}`;
    fetch(url)
      .then(data => data.json())
      .then(result => setProduct(result));
    return () => {
      setProduct(null);
    };
  }, []);
  return (
    <div className="container mt-2">
      {product ? helper(product) : <Animation />}
    </div>
  );
};

export default ProductDetails;
