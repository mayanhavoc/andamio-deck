// src/components/EmissionsScheduleChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

const data = [
  { month: 'Month 0', circulating: 0 },
  { month: 'Month 6', circulating: 10 },
  { month: 'Month 12', circulating: 25 },
  { month: 'Month 18', circulating: 40 },
  { month: 'Month 24', circulating: 55 },
  { month: 'Month 30', circulating: 70 },
  { month: 'Month 36', circulating: 85 },
  { month: 'Month 42', circulating: 95 },
  { month: 'Month 48', circulating: 100 },
];

export default function EmissionsScheduleChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="circulating"
            stroke="#003C54"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
