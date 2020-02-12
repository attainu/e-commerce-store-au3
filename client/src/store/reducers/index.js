import { combineReducers } from "redux";
import isLoggedInReducer from "./loginReducer";
import productsReducer from "./productsReducer";
import filteredProductsReducer from "./filteredProductsReducer";
import brandFilterReducer from "../filter/reducers/brandFilterReducer";
import colorFilterReducer from "../filter/reducers/colorFilterReducer";
import filterListReducer from "./filterListReducer";
import categoriesReducer from "./categoriesReducer";
const reducers = combineReducers({
  isLoggedIn: isLoggedInReducer,
  products: productsReducer,
  filteredProducts: filteredProductsReducer,
  filterList: filterListReducer,
  brandFilter: brandFilterReducer,
  colorFilter: colorFilterReducer,
  categories: categoriesReducer
});

export default reducers;
