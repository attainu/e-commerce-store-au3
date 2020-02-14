export const fetchCartItems = payload => {
  return {
    type: "FETCH_CART_ITEMS",
    payload: payload
  };
};

export const updateCartItems = payload => {
  return {
    type: "UPDATE_CART_ITEMS",
    payload: payload
  };
};

export const addToCart = id => {
  console.log(id)
  return {
    type: "ADD_TO_CART",
    payload: {
      product_id: id,
      qty: 1
    }
  };
};

export const removeFromCart = payload => {
  return {
    type: "REMOVE_FROM_CART",
    payload: payload
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART"
  };
};

export const uploadCartToServer = payload => {
  return {
    type: "UPLOAD_CART",
    payload: payload
  };
};
