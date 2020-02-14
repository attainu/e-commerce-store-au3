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

export const addToCart = (id, cart) => {
  let index;
  let action;
  let newCart = [...cart];
  cart.map((item, idx) => {
    if (item.product_id === id) {
      index = idx;
    }
  });

  if (index >= 0) {
    newCart[index].qty = newCart[index].qty + 1;

    action = {
      type: "ADD_TO_CART",
      payload: newCart
    };
  } else {
    action = {
      type: "ADD_TO_CART",
      payload: [
        ...cart,
        {
          product_id: id,
          qty: 1
        }
      ]
    };
  }

  return action;
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
