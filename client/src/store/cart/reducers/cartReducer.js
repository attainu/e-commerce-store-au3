import { store } from "../../../store";

const cartReducer = (cart = [], action) => {
  if (action.type === "FETCH_CART_ITEMS") {
    // fetch cart api will go here we are getting user_id
  }
  if (action.type === "UPDATE_CART_ITEMS") {
    return (cart = action.payload);
  }
  if (action.type === "ADD_TO_CART") {
    // let newCart = [...cart];
    // let index = newCart.indexOf(action.payload);
    // if (index >= 0) {
    //   newCart[index].qty = newCart[index].qty + 1;
    // } else {
    //   newCart = [...cart, action.payload];
    // }

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
  if (action.type === "UPLOAD_CART") {
    //post api to upload cart to server
    //we are getting whole cart in action.payload as an array []
  }
  return cart;
};

export default cartReducer;
