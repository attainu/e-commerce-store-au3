import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Authorize from "./Authorize";
import { API_ORIGIN_URL } from "../config";
import RegisterAffiliate from "./RegisterAffiliate";
import AffiliateDetail from "./AffiliateDetail";
const Affiliate = props => {
  const user_id = props.match.params.user_id;
  const [affiliateData, setAffiliateData] = useState(null);
  const token = useSelector(state => state.isLoggedIn.token);

  useEffect(() => {
    const url = `${API_ORIGIN_URL}/affiliations/${user_id}`;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(data => data.json())
      .then(result => setAffiliateData(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <Authorize />
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div className=" h-100 col-md-4 col-sm-12">
          {affiliateData && affiliateData.isAffiliate ? (
            <AffiliateDetail affiliateData={affiliateData} />
          ) : (
            <RegisterAffiliate user_id={user_id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
