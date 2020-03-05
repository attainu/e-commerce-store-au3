import { API_ORIGIN_URL } from "../../config";
import {
  updateLoggedInUser,
  reUpdateLoggedInUser
} from "../isLoggedIn/actions/isLoggedIn.actions";
import { updatesignupResponse } from "../signupResponse/actions/signupResponse.actions";
export const login = (email, password, dispatch) => {
  let url = `${API_ORIGIN_URL}/auth/login`;
  let data = {
    email: email,
    password: password
  };
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json())
    .then(data => {
      localStorage.setItem("auth_user_token", JSON.stringify(data));
      dispatch(updateLoggedInUser(data));
    });
};

export const signup = (form, dispatch) => {
  let url = `${API_ORIGIN_URL}/auth/signup`;
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(form)
  })
    .then(data => data.json())
    .then(json => {
      dispatch(updatesignupResponse(json));
    });
};

export const fetchProfile = (token, dispatch) => {
  const url = `${API_ORIGIN_URL}/profile`;
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => data.json())
    .then(result => dispatch(reUpdateLoggedInUser(result)))
    .catch(err => console.log(err));
};

export const updatePassword = (form, setResponse, token) => {
  const url = `${API_ORIGIN_URL}/profile`;

  fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      password: form.password
    })
  })
    .then(response => response.json())
    .then(data => setResponse(data));
};

export const updateProfile = (form, setResponse, token, dispatch) => {
  const url = `${API_ORIGIN_URL}/profile`;

  fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(form)
  })
    .then(response => response.json())
    .then(data => {
      setResponse(data);
      fetchProfile(token, dispatch);
    });
};
