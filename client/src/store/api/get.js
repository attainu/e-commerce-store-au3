import { API_ORIGIN_URL } from "../../config";
import { updateCartItems } from "../cart/actions/cart.actions";
import { updateAffiliateDetails } from "../affiliateDetails/actions/affiliateDetails.actions";
import { updateOrders } from "../orders/actions/orders.actions";
import { updateWishlistItems } from "../wishlist/actions/wishlist.actions";
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

const fetchCartItemsApi = (store, userId, token) => {
  let url = `${API_ORIGIN_URL}/cart/${userId}`;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {
      store.dispatch(updateCartItems(data));
    });
};

const apiGetAffiliateDetails = (store, user_id, token) => {
  const url = `${API_ORIGIN_URL}/affiliations/${user_id}`;

  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => data.json())
    .then(result => store.dispatch(updateAffiliateDetails(result)))
    .catch(err => console.log(err));
};

const apiFetchOrders = (id, token, store) => {
  const url = `${API_ORIGIN_URL}/orders/${id}`;
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => data.json())
    .then(result => store.dispatch(updateOrders(result)))
    .catch(err => console.log(err));
};

export {
  fetchProducts,
  fetchCategoriesFn,
  fetchCartItemsApi,
  apiGetAffiliateDetails,
  apiFetchOrders
};

export const fetchWishlistItemsApi = (store, isLoggedIn) => {
  let url = `${API_ORIGIN_URL}/wishlist/get`;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${isLoggedIn.token}`,
      "content-type": "application/json"
    }
  })
    .then(data => data.json())
    .then(data => {
      store.dispatch(updateWishlistItems(data, isLoggedIn));
    });
};
