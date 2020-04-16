import request from "superagent";

const baseUrl = "http://localhost:4000";

export const findCity = (key) => (dispatch) => {
  request(`${baseUrl}/city/${key}`)
    .then((res) => {
      dispatch(cityFound(res.body));
    })
    .catch(console.error);
};
function cityFound(cities) {
  return {
    type: "FIND_CITIES",
    cities,
  };
}
