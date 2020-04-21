const initialState = { list: [], single: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
    // case "ONE_STORE": {
    //   const newState = {
    //     list: [],
    //     single: action.store,
    //   };
    //   return newState;
    // }
    default: {
      return state;
    }
  }
}
