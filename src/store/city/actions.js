import request from 'superagent';
const baseUrl = process.env.REACT_APP_SERVER;

export const findCities = (key) => (dispatch) => {
  request(`${baseUrl}/city/${key}`)
    .then((res) => {
      dispatch(citiesFound(res.body));
    })
    .catch(console.error);
};
function citiesFound(cities) {
  return {
    type: 'FOUND_CITIES',
    cities,
  };
}
