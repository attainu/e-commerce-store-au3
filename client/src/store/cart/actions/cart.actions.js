export const fetchCartItems = isLoggedIn => {
  return {
    type: "FETCH_CART_ITEMS",
    isLoggedIn: isLoggedIn
  };
};

export const uploadCartToServer = (cart, userId, token) => {
  return {
    type: "UPLOAD_CART",
    cart,
    userId,
    token
  };
};

export const updateCartItems = (payload, isLoggedIn) => {
  return (dispatch, getState) => {
    dispatch({
      type: "UPDATE_CART_ITEMS",
      payload: payload
    });

    let { cart } = getState();

    if (isLoggedIn) {
      dispatch(uploadCartToServer(cart, isLoggedIn.user_id, isLoggedIn.token));
    }
    //need dynamic id in future
  };
};

export const addToCart = (product, cart, isLoggedIn) => {
  let index;

  let newCart = [...cart];
  cart.map((item, idx) => {
    if (item.product_id === product.product_id) {
      index = idx;
    }
  });

  if (index >= 0) {
    newCart[index].qty = newCart[index].qty + 1;

    return (dispatch, getState) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: newCart
      });

      let { cart } = getState();

      if (isLoggedIn) {
        dispatch(
          uploadCartToServer(cart, isLoggedIn.user_id, isLoggedIn.token)
        );
      }
    };
  } else if (cart.length > 0) {
    return (dispatch, getState) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: [
          ...newCart,
          {
            ...product,
            qty: 1
          }
        ]
      });
      let { cart } = getState();

      if (isLoggedIn) {
        dispatch(
          uploadCartToServer(cart, isLoggedIn.user_id, isLoggedIn.token)
        );
      }
    };
  } else if (cart.length === 0) {
    return (dispatch, getState) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: [
          {
            ...product,
            qty: 1
          }
        ]
      });
      let { cart } = getState();

      if (isLoggedIn) {
        dispatch(
          uploadCartToServer(cart, isLoggedIn.user_id, isLoggedIn.token)
        );
      }
    };
  }
};

export const removeFromCart = (payload, isLoggedIn) => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: payload
    });
    let { cart } = getState();
    if (isLoggedIn) {
      dispatch(uploadCartToServer(cart, isLoggedIn.user_id, isLoggedIn.token));
    }
  };
};

export const clearCart = isLoggedIn => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR_CART"
    });
    let { cart } = getState();
    if (isLoggedIn) {
      dispatch(uploadCartToServer(cart, isLoggedIn.user_id, isLoggedIn.token));
    }
  };
};

export const deleteFromCart = (payload, isLoggedIn) => {
  return (dispatch, getState) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: payload
    });
    let { cart } = getState();
    if (isLoggedIn) {
      dispatch(uploadCartToServer(cart, isLoggedIn.user_id, isLoggedIn.token));
    }
  };
};
