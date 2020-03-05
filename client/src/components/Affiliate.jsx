import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Authorize from "./Authorize";
import RegisterAffiliate from "./RegisterAffiliate";
import AffiliateDetail from "./AffiliateDetail";
import { fetchAffiliateDetails } from "../store/affiliateDetails/actions/affiliateDetails.actions";
const Affiliate = props => {
  const dispatch = useDispatch();
  const user_id = props.match.params.user_id;
  const affiliateDetails = useSelector(state => state.affiliateDetails);
  const token = useSelector(state => state.isLoggedIn.token);

  useEffect(() => {
    dispatch(fetchAffiliateDetails(token, user_id));
  }, []);

  return (
    <div className="container-fluid">
      <Authorize />
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div className=" h-100 col-md-6 col-sm-12">
          {affiliateDetails && affiliateDetails.isAffiliate ? (
            <AffiliateDetail affiliateData={affiliateDetails} />
          ) : (
            <RegisterAffiliate user_id={user_id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
