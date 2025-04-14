// src/components/EmissionsDeflationChart.tsx
'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: '0', totalSupply: 1000, circulatingSupply: 0 },
  { month: '6', totalSupply: 995, circulatingSupply: 50 },
  { month: '12', totalSupply: 990, circulatingSupply: 150 },
  { month: '18', totalSupply: 985, circulatingSupply: 250 },
  { month: '24', totalSupply: 980, circulatingSupply: 350 },
  { month: '30', totalSupply: 975, circulatingSupply: 500 },
  { month: '36', totalSupply: 970, circulatingSupply: 650 },
  { month: '42', totalSupply: 965, circulatingSupply: 800 },
  { month: '48', totalSupply: 960, circulatingSupply: 900 },
  { month: '60', totalSupply: 950, circulatingSupply: 950 },
];

export default function EmissionsDeflationChart() {
  return (
    <div className="h-96 w-full">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 60, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
          />
          <YAxis domain={[0, 1000]} tickFormatter={(value) => `${value}M`} />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Area
            type="monotone"
            dataKey="totalSupply"
            stroke="#003C54"
            fill="#003C54"
            name="Total Supply"
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="circulatingSupply"
            stroke="#009FB7"
            fill="#009FB7"
            name="Circulating Supply"
            fillOpacity={0.7}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
