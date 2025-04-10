// src/components/ValueAccrualChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { source: 'Fees Burned', value: 30 },
  { source: 'Staking Locked', value: 50 },
  { source: 'Governance Rewards', value: 20 },
];

export default function ValueAccrualChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="source" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip />
          <Bar dataKey="value" fill="#003C54" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center text-sm text-gray-500">
        *Approximate % of annual token supply captured through burns, staking,
        and governance incentives.
      </p>
    </div>
  );
}
