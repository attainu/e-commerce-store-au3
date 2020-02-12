export const createFilterList = payload => {
  return {
    type: "CREATE_FILTER_LIST",
    payload: payload
  };
};

export const clearFilterList = () => {
  return {
    type: "CLEAR_FILTER_LIST"
  };
};
