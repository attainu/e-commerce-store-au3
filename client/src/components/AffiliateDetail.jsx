import React from "react";

const AffiliateDetail = ({ affiliateData }) => {
  return (
    <>
      <div className="alert alert-success rounded py-3 m-0">
        <h5 className="text-center text-dark">Link</h5>
        <p className="font-weight-bold text-center">
          <code>{affiliateData.affiliate_details.affiliate_name}</code>
        </p>
        <div className=" p-3 bg-light border rounded border-dark">
          <h5 className="text-center text-dark">Total Revenue</h5>
          <h6 className="font-weight-bold text-center">
            ₹ {affiliateData.affiliate_details.revenue}
          </h6>
          <h5 className="text-center text-dark">Total Orders</h5>

          <h6 className="font-weight-bold text-center">
            {affiliateData.affiliate_details.total_orders}
          </h6>
        </div>
      </div>
    </>
  );
};

export default AffiliateDetail;
