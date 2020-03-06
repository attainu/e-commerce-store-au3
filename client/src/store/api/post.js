import { API_ORIGIN_URL } from "../../config";
import { updateOrderResponse } from "../orderResponse/actions/orderResponse.actions";
import { clearCart } from "../cart/actions/cart.actions";
import { store } from "../index";
import { fetchWishlistItemsApi } from "../api/get";
export const uploadCart = (cart, user_id, token) => {
  const cart_items = cart.map(item => {
    return {
      product_id: item.product_id,
      qty: item.qty
    };
  });
  const body = {
    user_id,
    cart_items
  };


  const url = `${API_ORIGIN_URL}/cart`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  }).then(res => {
    res.json();
  });
};

export const placeOrder = (
  isLoggedIn,
  dispatch,
  affiliate_name,
  products,
  total_price,
  user_id,
  token
) => {
  store.dispatch({
    type:"STARTED_ORDER_REQUEST",
  })
  const url = `${API_ORIGIN_URL}/orders`;
  const body = {
    affiliate_name,
    products,
    total_price,
    user_id
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch(updateOrderResponse(data));
      if (!data.error) {
        dispatch(clearCart(isLoggedIn));
      }
    })
    .catch(err => console.log(err));
};


function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const uploadWishlist = async (wishlist, isLoggedIn) => {
  const w = wishlist.map(i => i.product_id);

  const url = `${API_ORIGIN_URL}/wishlist`;
  let result = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${isLoggedIn.token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ wishlist_items: w })
  }).then(res => {
      res.json();
  });
  await timeout(50);
  fetchWishlistItemsApi(store, isLoggedIn);
};
