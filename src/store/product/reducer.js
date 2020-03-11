const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_PRODUCTS": {
      return action.products;
    }
    case "ADD_PRODUCT": {
      const rows = [...state.rows, action.newProduct];
      const count = ++state.count;
      return { rows, count };
    }
    case "ONE_PRODUCT": {
      return action.product;
    }
    case "FIND_PRODUCTS": {
      return action.products;
    }
    default: {
      return state;
    }
  }
}
