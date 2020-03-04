const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_STORES": {
      console.log("stores in reducer?", action);
      return action.stores;
    }
    // case "ADD_STORE": {
    //   return [...state, action.newStore];
    // }
    default: {
      return state;
    }
  }
}
