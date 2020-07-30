const initialState = {
  jwt: '',
  user: {},
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGOUT_USER': {
      return {
        jwt: '',
        user: {},
      };
    }
    case 'LOGIN_SESSION': {
      return {
        ...state,
        jwt: action.payload.jwt,
        user: action.payload.user,
      };
    }
    case 'NEW_USER': {
      return { ...state, user: action.payload };
    }
    case 'FETCH_USER': {
      return {
        ...state,
        user: action.user,
      };
    }
    case 'LIKE_LOCATION': {
      const newLocations = state.user.Location
        ? [...state.user.Location, { id: action.data.locationId }]
        : [{ id: action.data.locationId }];
      const newState = {
        ...state,
        user: {
          ...state.user,
          Location: newLocations,
        },
      };
      return newState;
    }
    case 'DISLIKE_LOCATION': {
      const oldLocations = [...state.user.Location];
      const newLocations = oldLocations.filter(
        (l) => l.id !== action.data.locationId
      );
      const newState = {
        ...state,
        user: {
          ...state.user,
          Location: newLocations,
        },
      };
      return newState;
    }
    case 'LIKE_ONLINE_STORE': {
      const newOnlineStore = state.user.OnlineStore
        ? [...state.user.OnlineStore, { id: action.data.onlineStoreId }]
        : [{ id: action.data.onlineStoreId }];
      const newState = {
        ...state,
        user: {
          ...state.user,
          OnlineStore: newOnlineStore,
        },
      };
      return newState;
    }
    case 'DISLIKE_ONLINE_STORE': {
      const oldOnlineStores = [...state.user.OnlineStore];
      const newOnlineStores = oldOnlineStores.filter(
        (s) => s.id !== action.data.onlineStoreId
      );
      const newState = {
        ...state,
        user: {
          ...state.user,
          OnlineStore: newOnlineStores,
        },
      };
      return newState;
    }
    default:
      return state;
  }
}
