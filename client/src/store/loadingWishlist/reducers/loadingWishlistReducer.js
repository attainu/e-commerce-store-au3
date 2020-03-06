const loadingWishlistReducer = (loadingWishlist = false, action) => {
  if (action.type === "LOADING") {
    return (loadingWishlist = action.payload);
  }
  if (action.type === "LOADED") {
    return (loadingWishlist = action.payload);
  }

  return loadingWishlist;
};

export default loadingWishlistReducer;
