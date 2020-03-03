import { wishlistLoaded } from "../../loadingWishlist/actions/loadingWishlist.actions";

export const fetchWishListItems = isLoggedIn => {
  return {
    type: "FETCH_WISHLIST_ITEMS",
    isLoggedIn: isLoggedIn
  };
};

export const uploadWishlistToServer = (wishlist, isLoggedIn) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPLOAD_WISHLIST",
      wishlist,
      isLoggedIn
    });
  };
};

export const updateWishlistItems = (payload, isLoggedIn) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_WISHLIST_ITEMS",
      payload: payload
    });
    // let { wishlist } = getState();
    // if (isLoggedIn) {
    // dispatch(uploadWishlistToServer(wishlist, isLoggedIn));
    dispatch(wishlistLoaded());
    // }
  };
};

export const addToWishlist = (product, wishlist, isLoggedIn) => {
  let newWishlist = [...wishlist, { product_id: product }];
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: newWishlist
    });

    let { wishlist } = getState();

    if (isLoggedIn) {
      dispatch(uploadWishlistToServer(wishlist, isLoggedIn));
    }
  };
};

export const removeFromWishlist = (payload, isLoggedIn) => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: payload
    });
    let { wishlist } = getState();
    if (isLoggedIn) {
      dispatch(uploadWishlistToServer(wishlist, isLoggedIn));
    }
  };
};

export const clearWishlist = isLoggedIn => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR_WISHLIST"
    });
    let { wishlist } = getState();
    if (isLoggedIn) {
      dispatch(uploadWishlistToServer(wishlist, isLoggedIn));
    }
  };
};
