const initialState = { list: [], single: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
