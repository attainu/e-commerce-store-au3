export const updateOrderResponse = payload => {
  return {
    type: "UPDATE_ORDER_RESPONSE",
    payload: payload,
  };
};

export const clearOrderResponse = () => {
  return {
    type: "CLEAR_ORDER_RESPONSE"
  };
};
