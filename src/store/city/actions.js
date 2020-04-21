import request from "superagent";

const baseUrl = "http://localhost:4000";

export const findCities = (key) => (dispatch) => {
  request(`${baseUrl}/city/${key}`)
    .then((res) => {
      console.log(res.body);

      dispatch(citiesFound(res.body));
    })
    .catch(console.error);
};
function citiesFound(cities) {
  return {
    type: "FOUND_CITIES",
    cities,
  };
}

export function renewPage() {
  return {
    type: "RENEW",
  };
}
