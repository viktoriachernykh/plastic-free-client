import request from 'superagent';
const baseUrl = process.env.REACT_APP_SERVER;

export const addOnlineStore = (link, productId, countryId) => (dispatch) => {
  request
    .post(`${baseUrl}/online_store`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ link, productId, countryId })
    .then((res) => {
      dispatch(storeAdded(res.body));
    })
    .catch(console.error);
};
function storeAdded(newOnlineStore) {
  return {
    type: 'ADD_ONLINE_STORE',
    newOnlineStore,
  };
}

export const likeOnlineStore = (userId, onlineStoreId) => (dispatch) => {
  request
    .post(`${baseUrl}/user_online_store`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, onlineStoreId })
    .then((res) => {
      dispatch(onlineStoreLiked(res.body));
    })
    .catch(console.error);
};

function onlineStoreLiked(data) {
  return {
    type: 'LIKE_ONLINE_STORE',
    data,
  };
}

export const dislikeOnlineStore = (userId, onlineStoreId) => (dispatch) => {
  request
    .delete(`${baseUrl}/user_online_store`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, onlineStoreId })
    .then((res) => {
      dispatch(onlineStoreDisliked(res.body));
    })
    .catch(console.error);
};

function onlineStoreDisliked(data) {
  return {
    type: 'DISLIKE_ONLINE_STORE',
    data,
  };
}
