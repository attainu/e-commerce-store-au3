import { fetchProducts } from "../api/get";
import { store } from "../../store";

const productsReducer = (products = [], action) => {
  if (action.type === "FETCH_ALL_PRODUCTS") {
    fetchProducts(store, action.gender, action.category);
  }
  if (action.type === "UPDATE_ALL_PRODUCTS") {
    return (products = action.payload);
  }
  if (action.type === "CLEAR_ALL_PRODUCTS") {
    return (products = []);
  }

  return products;
};

export default productsReducer;
