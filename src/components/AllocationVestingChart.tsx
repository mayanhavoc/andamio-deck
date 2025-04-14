// src/components/AllocationVestingChart.tsx
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
  {
    month: '0',
    founders: 0,
    privateSale: 0,
    ecosystem: 0,
    treasury: 15,
    ispo: 0,
    grants: 0,
  },
  {
    month: '6',
    founders: 0,
    privateSale: 2,
    ecosystem: 5,
    treasury: 15,
    ispo: 3,
    grants: 1,
  },
  {
    month: '12',
    founders: 5,
    privateSale: 5,
    ecosystem: 10,
    treasury: 15,
    ispo: 5,
    grants: 2,
  },
  {
    month: '18',
    founders: 10,
    privateSale: 10,
    ecosystem: 15,
    treasury: 15,
    ispo: 7,
    grants: 3,
  },
  {
    month: '24',
    founders: 13,
    privateSale: 13,
    ecosystem: 20,
    treasury: 15,
    ispo: 9,
    grants: 4,
  },
  {
    month: '30',
    founders: 16,
    privateSale: 14,
    ecosystem: 25,
    treasury: 15,
    ispo: 10,
    grants: 5,
  },
  {
    month: '36',
    founders: 18,
    privateSale: 15,
    ecosystem: 30,
    treasury: 15,
    ispo: 10,
    grants: 5,
  },
  {
    month: '42',
    founders: 19,
    privateSale: 15,
    ecosystem: 33,
    treasury: 15,
    ispo: 10,
    grants: 5,
  },
  {
    month: '48',
    founders: 20,
    privateSale: 15,
    ecosystem: 35,
    treasury: 15,
    ispo: 10,
    grants: 5,
  },
];

export default function AllocationVestingChart() {
  return (
    <div className="h-96 w-full">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            label={{ value: 'Months', position: 'insideBottom', offset: -5 }}
          />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip />

          <Legend verticalAlign="top" align="right" />
          <Area
            type="monotone"
            dataKey="founders"
            stackId="1"
            stroke="#003C54"
            fill="#003C54"
            name="Founders & Core Team"
          />
          <Area
            type="monotone"
            dataKey="privateSale"
            stackId="1"
            stroke="#006F8C"
            fill="#006F8C"
            name="Private Sale"
          />
          <Area
            type="monotone"
            dataKey="ecosystem"
            stackId="1"
            stroke="#009FB7"
            fill="#009FB7"
            name="Ecosystem Incentives"
          />
          <Area
            type="monotone"
            dataKey="treasury"
            stackId="1"
            stroke="#66BFBF"
            fill="#66BFBF"
            name="Treasury Reserve"
          />
          <Area
            type="monotone"
            dataKey="ispo"
            stackId="1"
            stroke="#8FCACA"
            fill="#8FCACA"
            name="ISPO Rewards"
          />
          <Area
            type="monotone"
            dataKey="grants"
            stackId="1"
            stroke="#B2D8D8"
            fill="#B2D8D8"
            name="Community Grants"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
