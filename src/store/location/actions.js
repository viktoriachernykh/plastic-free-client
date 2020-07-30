import request from 'superagent';
const baseUrl = process.env.REACT_APP_SERVER;

export const addLocation = (newLocation, productId) => (dispatch) => {
  request
    .post(`${baseUrl}/location`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ newLocation, productId })
    .then((res) => {
      dispatch(locationAdded(res.body));
    })
    .catch(console.error);
};
function locationAdded(newLocation) {
  return {
    type: 'ADD_LOCATION',
    newLocation,
  };
}

export const fetchLocation = (id) => (dispatch) => {
  request(`${baseUrl}/location/${id}`)
    .then((res) => {
      dispatch(locationFetched(res.body));
    })
    .catch(console.error);
};
function locationFetched(location) {
  return {
    type: 'ONE_LOCATION',
    location,
  };
}

export const findLocation = (keyword) => (dispatch) => {
  request(`${baseUrl}/location/find/${keyword}`)
    .then((res) => {
      dispatch(locationFound(res.body));
    })
    .catch(console.error);
};
function locationFound(locations) {
  return {
    type: 'FIND_LOCATIONS',
    locations,
  };
}

export const likeLocation = (userId, locationId) => (dispatch) => {
  request
    .post(`${baseUrl}/user_location`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, locationId })
    .then((res) => {
      dispatch(locationLiked(res.body));
    })
    .catch(console.error);
};

export const dislikeLocation = (userId, locationId) => (dispatch) => {
  request
    .delete(`${baseUrl}/user_location`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, locationId })
    .then((res) => {
      dispatch(locationDisliked(res.body));
    })
    .catch(console.error);
};
function locationLiked(data) {
  return {
    type: 'LIKE_LOCATION',
    data,
  };
}
function locationDisliked(data) {
  return {
    type: 'DISLIKE_LOCATION',
    data,
  };
}
