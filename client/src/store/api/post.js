import { API_ORIGIN_URL } from "../../config";

export const uploadCart = (cart, user_id) => {
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

  console.log(body.user_id);

  const url = `${API_ORIGIN_URL}/cart`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res);
  });
};
