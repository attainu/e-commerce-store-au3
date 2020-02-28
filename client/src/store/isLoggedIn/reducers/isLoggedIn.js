const isLoggedInReducer = (
  isLoggedIn = {
    success: null,
    error: null
  },
  action
) => {
  if (action.type === "UPDATE_LOGGEDIN_USER") {
    console.log("From Reducer : ", action.payload);
    return (isLoggedIn = action.payload);
  }

  if (action.type === "LOGOUT") {
    localStorage.clear();
    return (isLoggedIn = {
      success: null,
      error: null
    });
  }

  return isLoggedIn;
};

export default isLoggedInReducer;
