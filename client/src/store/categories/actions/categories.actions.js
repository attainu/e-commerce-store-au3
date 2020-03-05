export const fetchCategories = () => {
  return {
    type: "FETCH_CATEGORIES"
  };
};

export const updateCategories = payload => {
  return {
    type: "UPDATE_CATEGORIES",
    payload: payload
  };
};
