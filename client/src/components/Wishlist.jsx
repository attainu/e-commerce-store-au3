import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWishlist } from "../store/wishlist/actions/wishlist.actions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  const token = useSelector(state => state.isLoggedIn.token);

  return <div>Wishlist</div>;
};

export default Wishlist;
