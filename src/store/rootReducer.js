import { combineReducers } from "redux";
import user from "./user/reducer.js";
import products from "./product/reducer.js";
import locations from "./location/reducer";
import onlineStores from "./online_store/reducer.js";
import cities from "./city/reducer";

export default combineReducers({
  session: user,
  locations,
  onlineStores,
  products,
  cities,
});
