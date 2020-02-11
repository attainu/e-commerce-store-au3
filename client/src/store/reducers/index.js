import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import filteredProductsReducer from "./filteredProductsReducer";
import brandFilterReducer from "./brandFilterReducer";
import categoryFilterReducer from "./categoryFilterReducer";
import colorFilterReducer from "./colorFilterReducer";
import filterListReducer from "./filterListReducer";
import categoriesReducer from "./categoriesReducer";
import loginReducer from "./loginReducer";
const reducers = combineReducers({
  isLoggedIn: loginReducer,
  products: productsReducer,
  filteredProducts: filteredProductsReducer,
  filterList: filterListReducer,
  brandFilter: brandFilterReducer,
  categoryFilter: categoryFilterReducer,
  colorFilter: colorFilterReducer,
  categories: categoriesReducer
});

export default reducers;
