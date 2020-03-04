import request from "superagent";

const baseUrl = "http://localhost:4000";

export function logout() {
  return {
    type: "LOGOUT_USER"
  };
}

export const signup = (name, email, password, logo) => {
  return dispatch => {
    const data = {
      name: name,
      email: email,
      password: password,
      logo: logo
    };
    request
      .post(`${baseUrl}/user`)
      .send(data)
      .then(res => {
        dispatch(signupSuccess(res.body));
      })
      .catch(console.error);
  };
};
function signupSuccess(payload) {
  return {
    type: "NEW_USER",
    payload
  };
}

export const login = (email, password) => dispatch => {
  const data = {
    email: email,
    password: password
  };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const jwt = response.body.jwt;
      const user = response.body.userData;
      dispatch(loginSuccess(jwt, user));
    })
    .catch(console.error);
};
function loginSuccess(jwt, user) {
  return {
    type: "LOGIN_SESSION",
    payload: {
      jwt,
      user
    }
  };
}
