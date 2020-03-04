import request from "superagent";
// import axios from "axios";

const baseUrl = "http://localhost:4000";

export const fetchStores = () => dispatch => {
  request(`${baseUrl}/store`)
    .then(res => {
      console.log("res", res);

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
