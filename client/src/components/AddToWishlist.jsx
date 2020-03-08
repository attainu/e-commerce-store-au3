import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import {
  removeFromWishlist,
  addToWishlist
} from "../store/wishlist/actions/wishlist.actions";
import { wishlistLoading } from "../store/loadingWishlist/actions/loadingWishlist.actions";
import LinearDotsSpinner from "./LinearDotsSpinner";
const AddToWishlist = props => {
  // wishlist is an array in props
  // productis in props
  //props.onWishlist is boolean to differ weather its mounted on products or wishlistTile
  console.log(props.product);
  const dispatch = useDispatch();
  let index;
  if (props.wishlist && props.product) {
    props.wishlist.forEach((w, i) => {
      console.log(w.product_id, "from wishlist");
      console.log(props.product.product_id, "from product");

      if (w.product_id === props.product.product_id) {
        index = i;
      }
    });
  }
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const loadingWishlist = useSelector(state => state.loadingWishlist);

  const helper = idx => {
    if (idx === undefined) {
      return (
        <>
          <button
            className="btn wishlist-button w-100 h-100 rounded-0 py-3"
            onClick={e => {
              dispatch(
                addToWishlist(props.product, props.wishlist, isLoggedIn)
              );
              dispatch(wishlistLoading(isLoggedIn));
            }}
          >
            <h6 className="m-0 p-0">
              WishList <FaPlus />
            </h6>
          </button>
        </>
      );
    } else {
      if (idx < 0) {
        return (
          <>
            <button
              className="btn btn-warning w-100 h-100 rounded-0 py-3"
              onClick={e => {
                dispatch(
                  addToWishlist(props.product, props.wishlist, isLoggedIn)
                );
                dispatch(wishlistLoading(isLoggedIn));
              }}
            >
              <h6 className="m-0 p-0">
                WishList <FaPlus />
              </h6>
            </button>
          </>
        );
      } else {
        return (
          <>
            <button
              className={`btn btn-danger ${
                props.onWishlist
                  ? " bg-transparent text-danger border-0"
                  : "w-100 h-100 rounded-0"
              } py-2 px-auto`}
              onClick={e => {
                dispatch(
                  removeFromWishlist(props.product.product_id, isLoggedIn)
                );
                dispatch(wishlistLoading(isLoggedIn));
              }}
            >
              <h6 className="m-0 p-0">
                <TiDelete style={{ fontSize: "2rem", cursor: "pointer" }} />
              </h6>
            </button>
          </>
        );
      }
    }
  };

  return <>{loadingWishlist ? <LinearDotsSpinner /> : helper(index)}</>;
};

export default AddToWishlist;
