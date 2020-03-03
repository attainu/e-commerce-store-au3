import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  removeFromWishlist,
  addToWishlist
} from "../store/wishlist/actions/wishlist.actions";
import { wishlistLoading } from "../store/loadingWishlist/actions/loadingWishlist.actions";
import LinearDotsSpinner from "./LinearDotsSpinner";
const AddToWishlist = props => {
  //  wishlist is an array in props
  // product_id is in props
  const dispatch = useDispatch();
  let index;
  props.wishlist.forEach((w, i) => {
    if (w.product_id === props.product_id) {
      console.log(
        `FROM PROPS.WISHLIST ${w.product_id} , FROM props.product_id ${props.product_id} , index :${i}`
      );
      index = i;
    }
  });
  console.log(index, "from add to wishlist");
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const loadingWishlist = useSelector(state => state.loadingWishlist);

  return (
    <>
      {loadingWishlist ? (
        <LinearDotsSpinner />
      ) : index >= 0 ? (
        <button
          className="btn btn-danger w-100 h-100 rounded-0 py-3 px-auto"
          onClick={e => {
            dispatch(removeFromWishlist(props.product_id, isLoggedIn));
            dispatch(wishlistLoading());
          }}
        >
          <h6 className="m-0 p-0">
            WishList <FaMinus />
          </h6>
        </button>
      ) : (
        <button
          className="btn btn-warning w-100 h-100 rounded-0 py-3"
          onClick={e => {
            dispatch(
              addToWishlist(props.product_id, props.wishlist, isLoggedIn)
            );
            dispatch(wishlistLoading());
          }}
        >
          <h6 className="m-0 p-0">
            WishList <FaPlus />
          </h6>
        </button>
      )}
    </>
  );
};

export default AddToWishlist;
