import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
<<<<<<< HEAD
import filteredProductsReducer from "./filteredProductsReducer";
import brandFilterReducer from "./brandFilterReducer";
import categoryFilterReducer from "./categoryFilterReducer";
import colorFilterReducer from "./colorFilterReducer";
import filterListReducer from "./filterListReducer";
import categoriesReducer from "./categoriesReducer";
import loginReducer from "./loginReducer";
=======
import filteredProductsReducer from './filteredProductsReducer' ;
// import brandFilterReducer from './brandFilterReducer';
import brandFilterReducer from '../filter/reducers/brandFilterReducer';
import categoryFilterReducer from './categoryFilterReducer'
import colorFilterReducer from './colorFilterReducer';
import filterListReducer from './filterListReducer'
import categoriesReducer from './categoriesReducer'
>>>>>>> f7901a608b4d3eb6446e0d1d2e1ced93f43ee6af
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
