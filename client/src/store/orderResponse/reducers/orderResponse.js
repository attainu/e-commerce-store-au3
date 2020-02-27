const orderResponseReducer = (
  orderResponse = {
    success: null,
    error: null
  },
  action
) => {
  if (action.type === "UPDATE_ORDER_RESPONSE") {
    console.log("from reducer ", action.payload);
    return (orderResponse = action.payload);
  }

  if (action.type === "CLEAR_ORDER_RESPONSE") {
    return (orderResponse = {
      success: null,
      error: null
    });
  }

  return orderResponse;
};

export default orderResponseReducer;
