const initialState = { list: [], single: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_STORES": {
      const newState = {
        list: action.stores,
        single: null
      };
      return newState;
    }
    case "ADD_STORE": {
      const newState = {
        list: {
          rows: [...state.list.rows, action.newStore],
          count: ++state.list.count
        },
        single: null
      };
      return newState;
    }
    case "ONE_STORE": {
      const newState = {
        list: [],
        single: action.store
      };
      return newState;
    }
    case "FIND_STORES": {
      const newState = {
        list: action.stores,
        single: null
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
