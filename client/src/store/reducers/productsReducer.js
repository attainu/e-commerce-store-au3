import { fetchProducts } from "../api/get";
import { store } from "../../store";

const productsReducer = (
  products = [],
  action
) => {
  if (action.type === "FETCH_ALL_PRODUCTS") {
    fetchProducts(store);
  }
  if (action.type === "UPDATE_ALL_PRODUCTS") {
    return (products = action.payload);
  }

  return products;
};

export default productsReducer;
