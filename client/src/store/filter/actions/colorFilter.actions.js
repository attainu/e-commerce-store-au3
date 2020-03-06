import { applyFilters } from "../../../logic/filterLogic";

export const removeColorFilter = data => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_COLOR_FILTER",
      payload: data
    });
    let { brandFilter, colorFilter, products } = getState();
    let filteredProduct = applyFilters(products, brandFilter, colorFilter);
    dispatch({
      type: "UPDATE_FILTERED_PRODUCTS",
      payload: filteredProduct
    });
  };
};

export const addColorFilter = data => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_COLOR_FILTER",
      payload: data
    });
    let { brandFilter, colorFilter, products } = getState();
    let filteredProduct = applyFilters(products, brandFilter, colorFilter);
    dispatch({
      type: "UPDATE_FILTERED_PRODUCTS",
      payload: filteredProduct
    });
  };
};

export const clearColorFilter = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR_COLOR_FILTER"
    });
    let { brandFilter, colorFilter, products } = getState();
    let filteredProduct = applyFilters(products, brandFilter, colorFilter);
    dispatch({
      type: "UPDATE_FILTERED_PRODUCTS",
      payload: filteredProduct
    });
  };
};
