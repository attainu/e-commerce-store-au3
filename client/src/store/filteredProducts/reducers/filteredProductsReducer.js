const filteredProductsReducer = (filteredProducts = [], action) => {
  if (action.type === "UPDATE_FILTERED_PRODUCTS") {
    let newFilteredProducts = [...action.payload];
    return (filteredProducts = newFilteredProducts);
  }

  if (action.type === "CLEAR_FILTERED_PRODUCTS") {
    return (filteredProducts = []);
  }

  return filteredProducts;
};

export default filteredProductsReducer;
