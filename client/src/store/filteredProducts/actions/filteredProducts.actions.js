export const updateFilteredProducts = payload => {
  
  return {
    type: "UPDATE_FILTERED_PRODUCTS",
    payload: payload
  };
};

export const clearFilteredProducts = () => {
  return {
    type: "CLEAR_FILTERED_PRODUCTS"
  };
};
