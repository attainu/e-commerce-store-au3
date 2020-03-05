const signupResponseReducer = (
  signupResponse = {
    error: false,
    message: null
  },
  action
) => {
  if (action.type === "UPDATE_SIGNUP_RESPONSE") {
    return (signupResponse = action.payload);
  }

  return signupResponse;
};

export default signupResponseReducer;
