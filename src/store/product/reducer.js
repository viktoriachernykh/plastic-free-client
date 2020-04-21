const initialState = { list: [], single: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case "ALL_PRODUCTS": {
    //   const newState = {
    //     list: action.products,
    //     single: null,
    //   };
    //   return newState;
    // }
    // case "ADD_PRODUCT": {
    //   const newState = {
    //     list: {
    //       rows: [...state.list.rows, action.newProduct],
    //       count: ++state.list.count,
    //     },
    //     single: null,
    //   };
    //   return newState;
    // }
    // case "ONE_PRODUCT": {
    //   const newState = {
    //     list: [],
    //     single: action.product,
    //   };
    //   return newState;
    // }
    case "PRODUCT_SUGGESTIONS": {
      const newState = {
        list: action.products,
        single: null,
      };
      return newState;
    }
    case "FOUND_PRODUCT": {
      const newState = {
        list: [],
        single: action.product,
      };
      return newState;
    }
    case "NOT_FOUND_PRODUCT": {
      return action;
    }
    case "RENEW_PAGE": {
      return initialState;
    }
    case "ADD_STORE": {
      const newState = state.single
        ? {
            ...state,
            single: {
              ...state.single,
              Location: [...state.single.Location, action.newLocation],
            },
          }
        : {
            single: {
              ...state.dataNotFound.product,
              Location: [action.newLocation],
            },
          };
      return newState;
    }
    default: {
      return state;
    }
  }
}
