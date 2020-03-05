export const fetchAffiliateDetails = (token, user_id) => {
  return {
    type: "FETCH_AFFILIATE_DETAILS",
    token: token,
    user_id: user_id
  };
};

export const updateAffiliateDetails = payload => {
  return {
    type: "UPDATE_AFFILIATE_DETAILS",
    payload: payload
  };
};
