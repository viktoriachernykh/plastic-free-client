const initialState = {
  product: {},
  city: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_PRODUCT': {
      return {
        ...state,
        product: action.product,
      };
    }
    case 'SET_CITY': {
      return {
        ...state,
        city: action.city,
      };
    }
    case 'CLEAN_SEARCH': {
      return initialState;
    }
    default:
      return state;
  }
}
