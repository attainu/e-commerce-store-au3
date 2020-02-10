import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import filteredProductsReducer from './filteredProductsReducer' ;
import brandFilterReducer from './brandFilterReducer';
import categoryFilterReducer from './categoryFilterReducer'
import colorFilterReducer from './colorFilterReducer';
import filterListReducer from './filterListReducer'
const reducers = combineReducers({
  products: productsReducer,
  filteredProducts: filteredProductsReducer,
  filterList: filterListReducer,
  brandFilter: brandFilterReducer,
  categoryFilter: categoryFilterReducer,
  colorFilter: colorFilterReducer
});

export default reducers;