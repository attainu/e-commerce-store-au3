const isLoggedInReducer = (
  isLoggedIn = {
    success: null,
    error: null
  },
  action
) => {
  if (action.type === "UPDATE_LOGGEDIN_USER") {
    return (isLoggedIn = action.payload);
  }


  if (action.type === "RE_UPDATED_LOGGEDIN_USER") {
    const {
      firstname,
      lastname,
      email,
      gender,
      mobile,
      address
    } = action.payload;

    return (isLoggedIn = {
      ...isLoggedIn,
      firstname,
      lastname,
      email,
      gender,
      mobile,
      address
    });
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
