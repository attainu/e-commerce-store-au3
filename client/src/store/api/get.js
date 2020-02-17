import { API_ORIGIN_URL } from "../../config";
import { updateCartItems } from "../cart/actions/cart.actions";
const fetchProducts = (store, gender, category) => {
  let url = `${API_ORIGIN_URL}/product/${category}`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {
      store.dispatch({
        type: "UPDATE_ALL_PRODUCTS",
        payload: data[0].products
      });
      store.dispatch({
        type: "CREATE_FILTER_LIST",
        payload: data[0].products
      });
      store.dispatch({
        type: "UPDATE_FILTERED_PRODUCTS",
        payload: data[0].products
      });
    });
};

const fetchCategoriesFn = store => {
  let url = `${API_ORIGIN_URL}/categories`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {
      store.dispatch({
        type: "UPDATE_CATEGORIES",
        payload: data
      });
    });
};

const fetchCartItemsApi = (store, userId) => {
  let url = `${API_ORIGIN_URL}/cart/${userId}`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {
      store.dispatch(updateCartItems(data));
    });
};

export { fetchProducts, fetchCategoriesFn, fetchCartItemsApi };
