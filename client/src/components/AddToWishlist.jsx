import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  removeFromWishlist,
  addToWishlist
} from "../store/wishlist/actions/wishlist.actions";

const AddToWishlist = props => {
  //  wishlist is an array in props
  // product_id is in props
  const dispatch = useDispatch();
  const index = props.wishlist.indexOf(props.product_id);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <>
      {index >= 0 ? (
        <button
          className="btn btn-danger w-100 h-100 rounded-0 py-3 px-auto"
          onClick={e =>
            dispatch(
              removeFromWishlist(props.product_id, props.wishlist, isLoggedIn)
            )
          }
        >
          <h6 className="m-0 p-0">
            WishList <FaMinus />
          </h6>
        </button>
      ) : (
        <button
          className="btn btn-warning w-100 h-100 rounded-0 py-3"
          onClick={e =>
            dispatch(
              addToWishlist(props.product_id, props.wishlist, isLoggedIn)
            )
          }
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
