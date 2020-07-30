import request from 'superagent';
const baseUrl = process.env.REACT_APP_SERVER;

export function renewPage() {
  return {
    type: 'RENEW_PAGE',
  };
}

export function setProduct(product) {
  return {
    type: 'SET_PRODUCT',
    product,
  };
}

export const findProducts = (keyword) => (dispatch) => {
  request(`${baseUrl}/product/find/${keyword}`)
    .then((res) => {
      res.body.keyword
        ? dispatch(noProduct(res.body))
        : dispatch(productsFound(res.body));
    })
    .catch(console.error);
};
function productsFound(products) {
  return {
    type: 'PRODUCT_SUGGESTIONS',
    products,
  };
}
function noProduct(noSuchProduct) {
  return {
    type: 'NOT_SUCH_PRODUCT',
    noSuchProduct,
  };
}

export const findProductByCity = (productId, city) => (dispatch) => {
  request(`${baseUrl}/product/find/${productId}/${city}`)
    .then((res) => {
      res.body.city
        ? dispatch(productNotFound(res.body))
        : dispatch(productFound(res.body));
    })
    .catch(console.error);
};
function productFound(product) {
  return {
    type: 'FOUND_PRODUCT',
    product,
  };
}

function productNotFound(dataNotFound) {
  return {
    type: 'NOT_FOUND_PRODUCT',
    dataNotFound,
  };
}
