const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_STORES": {
      return action.stores;
    }
    case "ADD_STORE": {
      return [...state, action.newStore];
    }
    case "ONE_STORE": {
      return action.store;
    }
    default: {
      return state;
    }
  }
}
