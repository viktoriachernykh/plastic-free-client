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

export const addProduct = newProduct => dispatch => {
  request
    .post(`${baseUrl}/product`)
    // .set("Authorization", `Bearer ${token}`)
    .send(newProduct)
    .then(res => {
      // console.log("res", res);
      dispatch(productAdded(res.body));
    })
    .catch(console.error);
};
function productAdded(newProduct) {
  return {
    type: "ADD_PRODUCT",
    newProduct
  };
}

export const findProduct = key => dispatch => {
  // console.log("key from actions", key);
  request(`${baseUrl}/product/${key}`)
    .then(res => {
      // console.log(res.body);
      dispatch(productFetched(res.body));
    })
    .catch(console.error);
};
function productFetched(product) {
  return {
    type: "ONE_PRODUCT",
    product
  };
}

// fetch(`${baseUrl}/${key}`)
//   .then(res => res.json())
//   .then(fetchedData => {
//     const matchingQuotes = fetchedData.results;
//     // console.log("matchingQuotes", matchingQuotes); // returns array with matching quotes objects
//     this.updateQuotes(matchingQuotes);
//   })
//   .catch(console.error);
// };
// }
