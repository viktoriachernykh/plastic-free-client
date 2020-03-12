import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchProducts = pageNumber => dispatch => {
  const limit = 10;
  const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * limit;
  request(`${baseUrl}/product?limit=${limit}&offset=${offset}`)
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
  if (keyword)
    request(`${baseUrl}/product/find/${keyword}`)
      .then(res => {
        dispatch(productFound(res.body));
      })
      .catch(console.error);
};
function productFound(products) {
  return {
    type: "FIND_PRODUCTS",
    products
  };
}
