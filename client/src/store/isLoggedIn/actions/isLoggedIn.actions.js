export const updateLoggedInUser = payload => {
  console.log("from action : ", payload);
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
