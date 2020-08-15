import { combineReducers } from "redux";

import productsReducer from "reducers/products";
import searchReducer from "reducers/search";
import cartReducer from "reducers/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default rootReducer;
