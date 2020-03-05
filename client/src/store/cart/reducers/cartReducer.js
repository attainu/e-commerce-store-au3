import { store } from "../../../store";
import { fetchCartItemsApi } from "../../api/get";
import { uploadCart } from "../../api/post";

const cartReducer = (cart = [], action) => {
  if (action.type === "FETCH_CART_ITEMS") {
    fetchCartItemsApi(
      store,
      action.isLoggedIn.user_id,
      action.isLoggedIn.token
    );
  }
  if (action.type === "UPDATE_CART_ITEMS") {
    return (cart = action.payload);
  }
  if (action.type === "ADD_TO_CART") {
    return (cart = action.payload);
  }
  if (action.type === "REMOVE_FROM_CART") {
    let newCart = [...cart];
    let index = newCart.indexOf(action.payload);
    if (newCart[index].qty > 1) {
      newCart[index].qty = newCart[index].qty - 1;
    } else {
      newCart.splice(index, 1);
    }
    return (cart = newCart);
  }
  if (action.type === "CLEAR_CART") {
    return (cart = []);
  }

  if (action.type === "DELETE_FROM_CART") {
    let newCart = [...cart];
    let index = newCart.indexOf(action.payload);
    newCart.splice(index, 1);
    return (cart = newCart);
  }

  if (action.type === "UPLOAD_CART") {
    //post api to upload cart to server
    //we are getting whole cart in action.payload as an array []
    uploadCart(action.cart, action.userId, action.token);
  }
  return cart;
};

export default cartReducer;
