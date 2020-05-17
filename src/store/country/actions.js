import request from 'superagent';
const baseUrl = process.env.REACT_APP_SERVER;

export const findCountries = (key) => (dispatch) => {
  request(`${baseUrl}/country/${key}`)
    .then((res) => {
      dispatch(countriesFound(res.body));
    })
    .catch(console.error);
};
function countriesFound(countries) {
  return {
    type: 'FOUND_COUNTRIES',
    countries,
  };
}
