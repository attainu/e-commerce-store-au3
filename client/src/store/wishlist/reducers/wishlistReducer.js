// import { store } from "../../../store";

const wishlistReducer = (wishlist = [], action) => {
  if (action.type === "ADD_TO_WISHLIST") {
    return (wishlist = [...wishlist, action.payload]);
  }

  if (action.type === "REMOVE_FROM_WISHLIST") {
    let newWishlist = [...wishlist];
    let index = newWishlist.indexOf(action.payload);
    newWishlist.splice(index, 1);
    return (wishlist = newWishlist);
  }
  if (action.type === "CLEAR_WISHLIST") {
    return (wishlist = []);
  }
  return wishlist;
};

export default wishlistReducer;
