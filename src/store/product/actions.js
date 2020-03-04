import request from "superagent";
// import axios from "axios";

const baseUrl = "http://localhost:4000";

export const fetchProducts = () => dispatch => {
  request(`${baseUrl}/product`)
    .then(res => {
      dispatch(productsFetched(res.body));
    })
    .catch(console.error);
};
function productsFetched(products) {
  return {
    type: "ALL_PRODUCTS",
    products
  };
}
