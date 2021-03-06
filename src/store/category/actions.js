import request from 'superagent';
const baseUrl = process.env.REACT_APP_SERVER;

export const fetchCategories = () => (dispatch) => {
  request(`${baseUrl}/category`)
    .then((res) => {
      dispatch(categoriesFetched(res.body));
    })
    .catch(console.error);
};
function categoriesFetched(categories) {
  return {
    type: 'FETCH_CATEGORIES',
    categories,
  };
}

export const findCategory = (id) => (dispatch) => {
  request(`${baseUrl}/category/${id}`)
    .then((res) => {
      dispatch(categoryFound(res.body));
    })
    .catch(console.error);
};
function categoryFound(category) {
  return {
    type: 'ONE_CATEGORY',
    category,
  };
}
