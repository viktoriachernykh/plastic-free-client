import request from "superagent";

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

export const fetchProduct = id => dispatch => {
  request(`${baseUrl}/product/${id}`)
    .then(res => {
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

export const findProduct = keyword => dispatch => {
  request(`${baseUrl}/product/${keyword}`)
    .then(res => {
      dispatch(productFound(res.body));
    })
    .catch(console.error);
};
function productFound(product) {
  return {
    type: "ONE_PRODUCT",
    product
  };
}
