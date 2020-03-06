import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import moment from "moment";
const Graph = ({ affiliateData }) => {

  const data = {};

  affiliateData.affiliate_details.order_details.map(d => {
    if (data[moment(d.time).format("MMM")]) {
      data[moment(d.time).format("MMM")].revenue =
        data[moment(d.time).format("MMM")].revenue + d.amount;
    } else {

      data[moment(d.time).format("MMM")] = {
        name: moment(d.time).format("MMM"),
        revenue: d.amount
      };
    }
  });

  const chartData = Object.values(data);


  return (
    <BarChart
      width={window.innerWidth / 2}
      height={400}
      data={chartData}
      margin={{
        top: 20,
        right: 60,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );
};

export default Graph;
