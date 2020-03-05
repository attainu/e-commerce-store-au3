export const updateOrderResponse = payload => {
  console.log("from action creator ", payload);
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
