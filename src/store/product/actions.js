import request from "superagent";

const baseUrl = "http://localhost:4000";

export function renewPage() {
  return {
    type: "RENEW_PAGE",
  };
}

export const findProducts = (keyword) => (dispatch) => {
  request(`${baseUrl}/product/find/${keyword}`)
    .then((res) => {
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

export const findProductByCity = (product, city) => (dispatch) => {
  request(`${baseUrl}/product/find/${product.id}/${city}`)
    .then((res) => {
      res.body.city
        ? dispatch(productNotFound(res.body))
        : dispatch(productFound(res.body));
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
