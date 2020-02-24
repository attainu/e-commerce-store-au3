import { API_ORIGIN_URL } from "../../config";
import { updateLoggedInUser } from "../isLoggedIn/actions/isLoggedIn.actions";
import { updatesignupResponse } from "../signupResponse/actions/signupResponse.actions";
export const login = (email, password, dispatch) => {
  let url = `${API_ORIGIN_URL}/auth/login`;
  let data = {
    email: email,
    password: password
  };
  console.log(data);
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(data => data.json())
    .then(data => {
      console.log(data);
      dispatch(updateLoggedInUser(data));
    });
};

export const signup = (form, dispatch) => {
  let url = `${API_ORIGIN_URL}/auth/signup`;
  console.log(form);
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
