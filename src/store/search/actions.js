export function setSearchProduct(product) {
  return {
    type: 'SET_PRODUCT',
    product,
  };
}

export function setSearchCity(city) {
  return {
    type: 'SET_CITY',
    city,
  };
}

export function cleanSearch() {
  return {
    type: 'CLEAN_SEARCH',
  };
}
