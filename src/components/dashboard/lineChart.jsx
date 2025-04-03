import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Feb", value: 300 },
  { month: "Apr", value: 500 },
  { month: "May", value: 700 },
  { month: "Jun", value: 800 },
  { month: "Jul", value: 900 },
  { month: "Aug", value: 1200 },
  { month: "Sep", value: 1500 },
  { month: "Oct", value: 1700 },
  { month: "Nov", value: 1900 },
  { month: "Dec", value: 2000 }
];

const LineChartComponent = () => {
  return (
    <div className=" rounded-lg w-full h-[250px]">
      <h2 className="text-white mb-2">Performance</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#14c8c8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
