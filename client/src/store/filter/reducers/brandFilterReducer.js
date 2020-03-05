// import { store } from "../index";
// import { applyFilters } from "../../components/filterLogic";

const brandFilterReducer = (brands = [], action) => {
  if (action.type === "ADD_BRAND_FILTER") {
    let newBrands = [...brands];
    newBrands.push(action.payload);
    return (brands = newBrands);
  }
  if (action.type === "REMOVE_BRAND_FILTER") {
    let newBrands = [...brands];
    let index = newBrands.indexOf(action.payload);
    // console.log(index);
    newBrands.splice(index, 1);
    // console.log(newBrands);
    return (brands = newBrands);
  }
  if (action.type === "CLEAR_BRAND_FILTER") {
    return (brands = []);
  }

  
  return brands;
};

export default brandFilterReducer;
