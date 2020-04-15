import request from "superagent";

const baseUrl = "http://localhost:4000";

export const addStore = (newStore, productId) => (dispatch) => {
  request
    .post(`${baseUrl}/store`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ newStore, productId })
    .then((res) => {
      dispatch(storeAdded(res.body));
    })
    .catch(console.error);
};
function storeAdded(newStore) {
  return {
    type: "ADD_STORE",
    newStore,
  };
}

export const fetchStore = (id) => (dispatch) => {
  request(`${baseUrl}/store/${id}`)
    .then((res) => {
      dispatch(storeFetched(res.body));
    })
    .catch(console.error);
};
function storeFetched(store) {
  return {
    type: "ONE_STORE",
    store,
  };
}

export const findStore = (keyword) => (dispatch) => {
  request(`${baseUrl}/store/find/${keyword}`)
    .then((res) => {
      dispatch(storeFound(res.body));
    })
    .catch(console.error);
};
function storeFound(stores) {
  return {
    type: "FIND_STORES",
    stores,
  };
}
