import { store } from "../..";
import { apiGetAffiliateDetails } from "../../api/get";

const affiliateDetailsReducer = (affiliateDetails = null, action) => {
  if (action.type === "FETCH_AFFILIATE_DETAILS") {
    console.log("from reducer");
    apiGetAffiliateDetails(store, action.user_id, action.token);
  }

  if (action.type === "UPDATE_AFFILIATE_DETAILS") {
    return (affiliateDetails = action.payload);
  }
  return affiliateDetails;
};

export default affiliateDetailsReducer;
