const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FIND_CITIES": {
      return action.cities;
    }
    case "RENEW": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
