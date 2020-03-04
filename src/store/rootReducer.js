import { combineReducers } from "redux";
// import user from "./user/reducer.js";
import stores from "./store/reducer.js";
import products from "./product/reducer.js";

export default combineReducers({
  // session: user,
  stores,
  products
});
