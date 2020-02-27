import { applyFilters } from "../../../logic/filterLogic";

export const removeBrandFilter = data => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_BRAND_FILTER",
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

export const addBrandFilter = data => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_BRAND_FILTER",
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

export const clearBrandFilter = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR_BRAND_FILTER"
    });
    let { brandFilter, colorFilter, products } = getState();
    let filteredProduct = applyFilters(products, brandFilter, colorFilter);
    dispatch({
      type: "UPDATE_FILTERED_PRODUCTS",
      payload: filteredProduct
    });
  };
};
