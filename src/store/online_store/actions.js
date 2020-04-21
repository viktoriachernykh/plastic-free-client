import request from "superagent";

const baseUrl = "http://localhost:4000";

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
    type: "ADD_ONLINE_STORE",
    newOnlineStore,
  };
}
