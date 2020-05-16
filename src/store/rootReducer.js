import { combineReducers } from 'redux';
import user from './user/reducer.js';
import products from './product/reducer.js';
import locations from './location/reducer';
import onlineStores from './online_store/reducer.js';
import cities from './city/reducer';
import countries from './country/reducer';
import categories from './category/reducer';
import search from './search/reducer';

export default combineReducers({
  session: user,
  products,
  categories,
  locations,
  onlineStores,
  cities,
  countries,
  search,
});
