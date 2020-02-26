import React from "react";

const AffiliateDetail = ({ affiliateData }) => {
  return (
    <div>
      <h5 className="text-center">Link</h5>
      <p className="font-weight-bold text-center">
        {affiliateData.affiliate_details.affiliate_name}
      </p>

      <h5 className="text-center mt-5">Total Revenue</h5>
      <p className="font-weight-bold text-center">
        {affiliateData.affiliate_details.revenue}
      </p>
    </div>
  );
};

export default AffiliateDetail;
