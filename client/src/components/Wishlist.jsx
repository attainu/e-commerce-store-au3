import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWishlist } from "../store/wishlist/actions/wishlist.actions";
import AddToWishlist from "./AddToWishlist";
import OrderTile from "./OrderTile";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const token = useSelector(state => state.isLoggedIn.token);

  return (
    <>
      <div className="container mt-5">
        <div className="border p-2 ">
          <h2 className="text-center">
            Wishlist <FaHeart />
          </h2>
        </div>
        <div className="container mt-5">
          {wishlist.length === 0 ? (
            <>
              <h6 className="text-center text-danger">
                Your Wishlist Is empty !!!
              </h6>
              <h5 className="text-center ">Add few Items In It...</h5>
            </>
          ) : (
            wishlist.map((w, index) => {
              return (
                <div className="row">
                  <div className="col-12">
                    <OrderTile purpose={"wishlist"} product={w} index={index} />
                  </div>
                  <div className="col-2 pt-5 h-100 d-flex justify-content-center align-items-center">
                    <AddToWishlist
                      wishlist={wishlist}
                      product_id={w.product_id}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
