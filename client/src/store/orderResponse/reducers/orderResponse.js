const orderResponseReducer = (
  orderResponse = {
    success: null,
    error: null,
    isLoading:false,
  },
  action
) => {
  if (action.type === "UPDATE_ORDER_RESPONSE") {
    let payload = {...action.payload, isLoading:false};
    return (orderResponse = payload);
  }

  if(action.type === "STARTED_ORDER_REQUEST"){
    return {
      ...orderResponse,
      isLoading:true
    }
  }

  if (action.type === "CLEAR_ORDER_RESPONSE") {
    return (orderResponse = {
      success: null,
      error: null,
      isLoading:false
    });
  }

  return orderResponse;
};

export default orderResponseReducer;
