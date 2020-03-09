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

export const addStore = (newStore, userId, productId) => dispatch => {
  request
    .post(`${baseUrl}/store`)
    // .set("Authorization", `Bearer ${token}`)
    .send(newStore)
    .then(res => {
      dispatch(storeAdded(res.body));

      const storeId = res.body.id;
      const connection = { userId, productId, storeId };

      request
        .post(`${baseUrl}/connect`)
        .send(connection)
        // .then(res => console.log("res body", res.body)) // send smth back
        .catch(console.error);
    })

    .catch(console.error);
};
function storeAdded(newStore) {
  return {
    type: "ADD_STORE",
    newStore
  };
}

export const fetchStore = id => dispatch => {
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

export const findStore = keyword => dispatch => {
  request(`${baseUrl}/store/find/${keyword}`)
    .then(res => {
      console.log("res body?", res.body);

      dispatch(storeFound(res.body));
    })
    .catch(console.error);
};
function storeFound(stores) {
  return {
    type: "FIND_STORES",
    stores
  };
}
