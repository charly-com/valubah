import data from "../Data/data";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Charts = () => {
    return (
        <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey="name" interval={0} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#146614"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#F4AFA7" />
      </LineChart>
    )
}

export default Charts;