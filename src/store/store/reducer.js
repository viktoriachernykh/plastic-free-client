const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_STORES": {
      return action.stores;
    }
    case "ADD_STORE": {
      console.log("reducer newStore", action.newStore);

      return [...state, action.newStore];
    }
    case "ONE_STORE": {
      return action.store;
    }
    case "FIND_STORES": {
      return action.stores;
    }
    default: {
      return state;
    }
  }
}
