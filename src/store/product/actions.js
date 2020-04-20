import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchProducts = (pageNumber) => (dispatch) => {
  const limit = 10;
  const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * limit;
  request(`${baseUrl}/product?limit=${limit}&offset=${offset}`)
    .then((res) => {
      dispatch(productsFetched(res.body));
    })
    .catch(console.error);
};
function productsFetched(products) {
  return {
    type: "ALL_PRODUCTS",
    products,
  };
}

export const addProduct = (newProduct) => (dispatch) => {
  request
    .post(`${baseUrl}/product`)
    // .set("Authorization", `Bearer ${token}`)
    .send(newProduct)
    .then((res) => {
      dispatch(productAdded(res.body));
    })
    .catch(console.error);
};
function productAdded(newProduct) {
  return {
    type: "ADD_PRODUCT",
    newProduct,
  };
}

export const fetchProduct = (id) => (dispatch) => {
  request(`${baseUrl}/product/${id}`)
    .then((res) => {
      dispatch(productFetched(res.body));
    })
    .catch(console.error);
};
function productFetched(product) {
  return {
    type: "ONE_PRODUCT",
    product,
  };
}

export function renewPage() {
  return {
    type: "RENEW_PAGE",
  };
}

export const findProducts = (keyword) => (dispatch) => {
  request(`${baseUrl}/product/find/${keyword}`)
    .then((res) => {
      console.log("res findProduct", res.body);
      res.body.keyword
        ? dispatch(productNotFound(res.body))
        : dispatch(productsFound(res.body));
    })
    .catch(console.error);
};
function productsFound(products) {
  return {
    type: "PRODUCT_SUGGESTIONS",
    products,
  };
}

export const findProductByCity = (keyword, city) => (dispatch) => {
  request(`${baseUrl}/product/find/${keyword}/${city}`)
    .then((res) => {
      res.body.keyword && res.body.city
        ? dispatch(productNotFound(res.body))
        : dispatch(productFound(res.body[0]));
    })
    .catch(console.error);
};
function productFound(product) {
  return {
    type: "FOUND_PRODUCT",
    product,
  };
}
function productNotFound(dataNotFound) {
  return {
    type: "NOT_FOUND_PRODUCT",
    dataNotFound,
  };
}
