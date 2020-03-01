import { store } from "../../../store";
import { fetchWishlistItemsApi } from "../../api/get";
import { uploadWishlist } from "../../api/post";

const wishlistReducer = (wishlist = [], action) => {
  if (action.type === "FETCH_WISHLIST_ITEMS") {
    fetchWishlistItemsApi(
      store,
      action.isLoggedIn.user_id,
      action.isLoggedIn.token
    );
  }
  if (action.type === "UPDATE_WISHLIST_ITEMS") {
    return (wishlist = action.payload);
  }
  if (action.type === "ADD_TO_WISHLIST") {
    return (wishlist = action.payload);
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

  if (action.type === "UPLOAD_WISHLIST") {
    uploadWishlist(action.wishlist, action.userId, action.token);
  }
  return wishlist;
};

export default wishlistReducer;
