const initialState = { list: [], single: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_STORES": {
      const newState = {
        list: action.locations,
        single: null,
      };
      return newState;
    }
    // case "ADD_STORE": {
    // const newState = {
    //   list: {
    //     rows: [...state.list.rows, action.newStore],
    //     count: ++state.list.count,
    //   },
    //   single: null,
    // };
    //   return state;
    // }
    case "ONE_STORE": {
      const newState = {
        list: [],
        single: action.location,
      };
      return newState;
    }
    case "FIND_STORES": {
      const newState = {
        list: {
          ...state,
          rows: action.locations,
        },
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
