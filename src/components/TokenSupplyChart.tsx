// src/components/TokenSupplyChart.tsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { name: 'Community Incentives', value: 40 },
  { name: 'Team & Advisors', value: 20 },
  { name: 'Private Sale', value: 15 },
  { name: 'Treasury', value: 15 },
  { name: 'Ecosystem Growth', value: 10 },
];

const COLORS = ['#003C54', '#006F8C', '#00AFC1', '#8BD5E2', '#B9E9F0'];

export default function TokenSupplyChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
