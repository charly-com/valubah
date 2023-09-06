import { data2 } from "../Data/data";

import { PieChart, Pie,  Cell,  } from "recharts";

const COLORS = ["#146614", "#F4AFA7"];

const PieCharts = () => {
  return (
    <PieChart
      width={800}
      height={400}
      // onMouseEnter={this.onPieEnter}
    >
        
        <Pie
          data={data2}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
    </PieChart>
  );
};

export default PieCharts;
