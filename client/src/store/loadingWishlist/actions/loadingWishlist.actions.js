export const wishlistLoading = () => {
  return {
    type: "LOADING",
    payload: true
  };
};

export const wishlistLoaded = () => {
  return {
    type: "LOADED",
    payload: false
  };
};
