import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWishlist } from "../store/wishlist/actions/wishlist.actions";
import AddToWishlist from "./AddToWishlist";
import OrderTile from "./OrderTile";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const token = useSelector(state => state.isLoggedIn.token);

  return (
    <>
      <div className="container mt-5">
        <h3>Wishlist</h3>
        <div className="container">
          <div className="row">
            <div className="col-10">
              {/* <OrderTile /> */}
            </div>
            <div className="col-2">
              {/* <AddToWishlist /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
