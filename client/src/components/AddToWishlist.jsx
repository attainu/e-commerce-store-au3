import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromWishlist,
  addToWishlist
} from "../store/wishlist/actions/wishlist.actions";

const AddToWishlist = props => {
  //  wishlist is an array in props
  // product_id is in props
  const dispatch = useDispatch();
  const index = props.wishlist.indexOf(props.product_id);
  return (
    <>
      {index >= 0 ? (
        <button
          className="btn btn-danger w-100 h-100 rounded-0 py-3 px-auto"
          onClick={e => dispatch(removeFromWishlist(props.product_id))}
        >
          Remove From Wishlist
        </button>
      ) : (
        <button
          className="btn btn-warning w-100 h-100 rounded-0 py-3"
          onClick={e => dispatch(addToWishlist(props.product_id))}
        >
          Add To Wishlist
        </button>
      )}
    </>
  );
};

export default AddToWishlist;
