import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchStores = () => dispatch => {
  request(`${baseUrl}/store`)
    .then(res => {
      dispatch(storesFetched(res.body));
    })
    .catch(console.error);
};
function storesFetched(stores) {
  return {
    type: "ALL_STORES",
    stores
  };
}

export const addStore = newStore => dispatch => {
  request
    .post(`${baseUrl}/store`)
    // .set("Authorization", `Bearer ${token}`)
    .send(newStore)
    .then(res => {
      // console.log("res", res);
      dispatch(storeAdded(res.body));
    })
    .catch(console.error);
};
function storeAdded(newStore) {
  return {
    type: "ADD_STORE",
    newStore
  };
}

export const findStore = id => dispatch => {
  request(`${baseUrl}/store/${id}`)
    .then(res => {
      dispatch(storeFetched(res.body));
    })
    .catch(console.error);
};
function storeFetched(store) {
  return {
    type: "ONE_STORE",
    store
  };
}
