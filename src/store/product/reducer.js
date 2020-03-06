const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_PRODUCTS": {
      // console.log("products in reducer?", action);
      return action.products;
    }
    case "ADD_PRODUCT": {
      return [...state, action.newProduct];
    }
    case "ONE_PRODUCT": {
      return action.product;
    }
    default: {
      return state;
    }
  }
}
