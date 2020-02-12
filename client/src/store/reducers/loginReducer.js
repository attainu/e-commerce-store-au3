const isLoggedInReducer = (isLoggedIn = null, action) => {
  if (action.type === "UPDATE_LOGGEDIN_USER") {
    return (isLoggedIn = action.payload);
  }

  if (action.type === "LOGOUT") {
    localStorage.clear();
    return (isLoggedIn = null);
  }

  return isLoggedIn;
};

export default isLoggedInReducer;
