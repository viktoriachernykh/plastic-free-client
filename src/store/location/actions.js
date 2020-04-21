import request from "superagent";

const baseUrl = "http://localhost:4000";

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
    type: "ADD_LOCATION",
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
    type: "ONE_LOCATION",
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
    type: "FIND_LOCATIONS",
    locations,
  };
}
