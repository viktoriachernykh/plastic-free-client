const initialState = { list: [], single: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES': {
      const newState = {
        list: action.categories,
        single: null,
      };
      return newState;
    }
    case 'ONE_CATEGORY': {
      const newState = {
        list: [],
        single: action.category,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
