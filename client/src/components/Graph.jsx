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
  console.log(affiliateData.affiliate_details.order_details);
  console.log(
    moment(affiliateData.affiliate_details.order_details[0].time).format("MMM")
  );

  const data = {};

  affiliateData.affiliate_details.order_details.map(d => {
    console.log(moment(d.time).format("MMM"), "MONTH");
    if (data[moment(d.time).format("MMM")]) {
      console.log(
        "in if : ",
        d.amount,
        "|| in if to there prior value is : ",
        data[moment(d.time).format("MMM")].revenue
      );
      data[moment(d.time).format("MMM")].revenue =
        data[moment(d.time).format("MMM")].revenue + d.amount;
    } else {
      console.log("in else", d.amount);

      data[moment(d.time).format("MMM")] = {
        name: moment(d.time).format("MMM"),
        revenue: d.amount
      };
    }
  });

  const chartData = Object.values(data);

  console.log(data);

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

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   }
// ];
