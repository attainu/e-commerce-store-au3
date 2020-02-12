export const updateLoggedInUser = payload => {
  return {
    type: "UPDATE_LOGGEDIN_USER",
    payload: payload
  };
};

export const logout = () => {
  return {
    type: "LOGOUT"
  };
};
