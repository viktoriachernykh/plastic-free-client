const initialState = {
  jwt: "",
  user: {}
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGOUT_USER": {
      return {
        jwt: "",
        user: {}
      };
    }
    case "LOGIN_SESSION": {
      return {
        ...state,
        jwt: action.payload.jwt,
        user: action.payload.user
      };
    }
    case "NEW_USER": {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
}
