export const fetchOrders = isLoggedIn => {
  return {
    type: "FETCH_ORDERS",
    user_id: isLoggedIn.user_id,
    token: isLoggedIn.token
  };
};

export const updateOrders = payload => {
  return {
    type: "UPDATE_ORDERS",
    payload: payload
  };
};

export const clearOrders = () => {
  return {
    type: "CLEAR_ORDERS"
  };
};
