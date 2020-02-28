export const fetchAllProducts = (gender, category) => {
  return {
    type: "FETCH_ALL_PRODUCTS",
    gender: gender,
    category: category
  };
};

export const updateAllProducts = payload => {
  return {
    type: "UPDATE_ALL_PRODUCTS",
    payload: payload
  };
};

export const clearAllProducts = () => {
  return {
    type: "CLEAR_ALL_PRODUCTS"
  };
};
