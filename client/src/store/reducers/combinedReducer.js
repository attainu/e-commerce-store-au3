import { combineReducers } from "redux";
import isLoggedInReducer from "../isLoggedIn/reducers/isLoggedIn";
import productsReducer from "../products/reducers/productsReducer";
import brandFilterReducer from "../filter/reducers/brandFilterReducer";
import colorFilterReducer from "../filter/reducers/colorFilterReducer";
import filterListReducer from "../filterList/reducers/filterListReducer";
import categoriesReducer from "../categories/reducers/categoriesReducer";
import filteredProductsReducer from "../filteredProducts/reducers/filteredProductsReducer";
import cartReducer from "../cart/reducers/cartReducer";
import wishlistReducer from "../wishlist/reducers/wishlistReducer";
import signupResponseReducer from "../signupResponse/reducers/signupResponse";
import affiliateDetailsReducer from "../affiliateDetails/reducers/affiliateDetailsReducer";
import orderResponseReducer from "../orderResponse/reducers/orderResponse";
import ordersReducer from "../orders/reducers/orderReducer";
const combinedReducers = combineReducers({
  isLoggedIn: isLoggedInReducer,
  products: productsReducer,
  filteredProducts: filteredProductsReducer,
  filterList: filterListReducer,
  brandFilter: brandFilterReducer,
  colorFilter: colorFilterReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  signupResponse: signupResponseReducer,
  affiliateDetails: affiliateDetailsReducer,
  orderResponse: orderResponseReducer,
  orders: ordersReducer
});

export default combinedReducers;
