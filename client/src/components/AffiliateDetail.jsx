import React from "react";
import Graph from "./Graph";

const AffiliateDetail = ({ affiliateData }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded p-3 m-0">
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
      <div className="container mt-5">
        {
          affiliateData.affiliate_details.order_details===null ?''
          :  
          <Graph affiliateData={affiliateData} />
        }
      </div>
    </>
  );
};

export default AffiliateDetail;
