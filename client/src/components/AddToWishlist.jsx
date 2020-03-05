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
  // product_id is in props
  //props.onWishlist is boolean to differ weather its mounted on products or wishlistTile
  console.log(
    "================================================================"
  );

  console.log(props.wishlist, "props.wishlist");
  console.log(
    "================================================================"
  );
  console.log(props.product_id, "props.product_id");
  console.log(
    "================================================================"
  );

  console.log(props.onWishlist, "props.onWishlist");
  console.log(
    "================================================================"
  );
  const dispatch = useDispatch();
  let index;
  console.log(props.wishlist);
  if (props.wishlist) {
    props.wishlist.forEach((w, i) => {
      if (w.product_id === props.product_id) {
        console.log(
          `FROM PROPS.WISHLIST ${w.product_id} , FROM props.product_id ${props.product_id} , index :${i}`
        );
        index = i;
      }
    });
  }
  console.log(index, "from add to wishlist");
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const loadingWishlist = useSelector(state => state.loadingWishlist);
  console.log(isLoggedIn);

  const helper = idx => {
    console.log("inside helper==========================", idx);
    if (idx === undefined) {
      return (
        <>
          <button
            className="btn wishlist-button w-100 h-100 rounded-0 py-3"
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
        </>
      );
    } else {
      if (idx < 0) {
        console.log("rendering add button index :", idx);
        return (
          <>
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
          </>
        );
      } else {
        console.log("rendering remove index :", idx);
        return (
          <>
            <button
              className={`btn btn-danger ${
                props.onWishlist ? "" : "w-100 h-100 rounded-0"
              } py-2 px-auto`}
              onClick={e => {
                dispatch(removeFromWishlist(props.product_id, isLoggedIn));
                dispatch(wishlistLoading());
              }}
            >
              <h6 className="m-0 p-0">
                <TiDelete style={{fontSize:"2rem", cursor: "pointer"}} />
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
