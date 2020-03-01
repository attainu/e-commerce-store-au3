export const fetchWishListItems = isLoggedIn => {
  return {
    type: "FETCH_WISHLIST_ITEMS",
    isLoggedIn: isLoggedIn
  };
};

export const uploadWishlistToServer = (wishlist, userId, token) => {
  return {
    type: "UPLOAD_WISHLIST",
    wishlist,
    userId,
    token
  };
};

export const updateWishlistItems = (payload, isLoggedIn) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_WISHLIST_ITEMS",
      payload: payload
    });

    let { wishlist } = getState();

    if (isLoggedIn) {
      dispatch(
        uploadWishlistToServer(wishlist, isLoggedIn.user_id, isLoggedIn.token)
      );
    }
  };
};

export const addToWishlist = (product, wishlist, isLoggedIn) => {
  let newWishlist = [...wishlist, product];
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: newWishlist
    });

    let { wishlist } = getState();

    if (isLoggedIn) {
      dispatch(
        uploadWishlistToServer(wishlist, isLoggedIn.user_id, isLoggedIn.token)
      );
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
      dispatch(
        uploadWishlistToServer(wishlist, isLoggedIn.user_id, isLoggedIn.token)
      );
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
      dispatch(
        uploadWishlistToServer(wishlist, isLoggedIn.user_id, isLoggedIn.token)
      );
    }
  };
};
