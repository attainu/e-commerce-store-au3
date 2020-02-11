import { applyFilters } from "../../../components/filterLogic.js";

export const removeBrandFilter = data => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_BRAND_FILTER",
      payload: data
    });
    console.log(getState());
    let { brandFilter, colorFilter, products } = getState();
    let filteredProduct = applyFilters(products, brandFilter, colorFilter);
    dispatch({
      type: "UPDATE_FILTERED_PRODUCTS",
      payload: filteredProduct
    });
  };
};

export const addBrandFilter = data => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_BRAND_FILTER",
      payload: data
    });
    let { brandFilter, colorFilter, products } = getState();
    let filteredProduct = applyFilters(products, brandFilter, colorFilter);
    // console.log("hi");
    // console.log(getState());
    // console.log("FilteredProduct");
    // console.log(filteredProduct);
    dispatch({
      type: "UPDATE_FILTERED_PRODUCTS",
      payload: filteredProduct
    });
  };
};
