export const wishlistLoading = isLoggedIn => {
  const status = isLoggedIn.token ? true : false;
  return {
    type: "LOADING",
    payload: status
  };
};

export const wishlistLoaded = () => {
  return {
    type: "LOADED",
    payload: false
  };
};
