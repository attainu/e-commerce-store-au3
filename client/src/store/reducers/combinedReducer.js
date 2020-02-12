import { combineReducers } from "redux";
import isLoggedInReducer from "../isLoggedIn/reducers/isLoggedIn";
import productsReducer from "../products/reducers/productsReducer";
import brandFilterReducer from "../filter/reducers/brandFilterReducer";
import colorFilterReducer from "../filter/reducers/colorFilterReducer";
import filterListReducer from "../filterList/reducers/filterListReducer";
import categoriesReducer from "../categories/reducers/categoriesReducer";
import filteredProductsReducer from "../filteredProducts/reducers/filteredProductsReducer";

const combinedReducers = combineReducers({
  isLoggedIn: isLoggedInReducer,
  products: productsReducer,
  filteredProducts: filteredProductsReducer,
  filterList: filterListReducer,
  brandFilter: brandFilterReducer,
  colorFilter: colorFilterReducer,
  categories: categoriesReducer
});

export default combinedReducers;
