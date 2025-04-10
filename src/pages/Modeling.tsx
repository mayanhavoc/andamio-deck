// src/pages/Modeling.tsx
import { useState } from 'react';
import {
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// Sample Data
const baseCaseData = Array.from({ length: 24 }, (_, i) => ({
  month: `Month ${i + 1}`,
  circulatingSupply: 100_000 + i * 20_000, // Grows steadily
  price: 0.1 + i * 0.005, // Slow price growth
  stakingParticipation: 0.4 + i * 0.01, // % Staking starts at 40%, grows 1% per month
}));

const bullCaseData = Array.from({ length: 24 }, (_, i) => ({
  month: `Month ${i + 1}`,
  circulatingSupply: 120_000 + i * 30_000, // Grows faster
  price: 0.15 + i * 0.01, // Faster price growth
  stakingParticipation: 0.5 + i * 0.012, // Higher staking growth
}));

const stressCaseData = Array.from({ length: 24 }, (_, i) => ({
  month: `Month ${i + 1}`,
  circulatingSupply: 80_000 + i * 10_000, // Grows slower
  price: 0.08 + i * 0.002, // Slower price growth
  stakingParticipation: 0.35 + i * 0.005, // Slower staking growth
}));

// Scenario Descriptions
const scenarioDescriptions = {
  base: 'Moderate adoption with steady onboarding of contributors and organizations.',
  bull: 'Rapid adoption with strong network effects and high verification activity.',
  stress:
    'Slow adoption with lower-than-expected contributor and organization growth.',
};

export default function Modeling() {
  const [scenario, setScenario] = useState<'base' | 'bull' | 'stress'>('base');
  const [isLoading, setIsLoading] = useState(false);

  const handleScenarioChange = (newScenario: 'base' | 'bull' | 'stress') => {
    setIsLoading(true);
    setTimeout(() => {
      setScenario(newScenario);
      setIsLoading(false);
    }, 300); // 300ms delay for subtle UX
  };

  const getScenarioData = () => {
    if (scenario === 'bull') return bullCaseData;
    if (scenario === 'stress') return stressCaseData;
    return baseCaseData;
  };

  return (
    <div className="flex min-h-screen flex-col space-y-24 bg-white p-8 text-slate-800">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-3xl space-y-6 text-center">
        <h1 className="text-primary text-3xl font-bold md:text-5xl">
          Modeling & Simulations
        </h1>
        <p className="text-lg text-gray-600">
          Explore interactive simulations of Andamio’s token economy. Understand
          how supply, staking, and adoption interact over time.
        </p>
      </section>

      {/* SCENARIO BUTTONS */}
      <section className="flex flex-col items-center space-y-6">
        <div className="flex justify-center gap-4">
          {['base', 'bull', 'stress'].map((type) => (
            <motion.button
              key={type}
              onClick={() =>
                handleScenarioChange(type as 'base' | 'bull' | 'stress')
              }
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg px-4 py-2 font-semibold ${
                scenario === type
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700'
              } transition`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Case
            </motion.button>
          ))}
        </div>

        {/* SCENARIO DESCRIPTION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-center"
          >
            <p className="text-lg text-gray-600">
              {scenarioDescriptions[scenario]}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CHART SECTION */}
      <section className="mx-auto w-full max-w-5xl space-y-12">
        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="border-primary h-12 w-12 animate-spin rounded-full border-b-4 border-t-4" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={scenario}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={getScenarioData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />

                  {/* Left Y Axis */}
                  <YAxis
                    yAxisId="0"
                    orientation="left"
                    stroke="#003C54"
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                    allowDataOverflow
                  />

                  {/* Right Y Axis */}
                  <YAxis
                    yAxisId="1"
                    orientation="right"
                    stroke="#006F8C"
                    tickFormatter={(value) =>
                      value < 1
                        ? `${(value * 100).toFixed(0)}%`
                        : `$${value.toFixed(2)}`
                    }
                    allowDataOverflow
                  />

                  <Tooltip />
                  <Legend
                    verticalAlign="top"
                    align="center"
                    iconType="circle"
                    wrapperStyle={{ paddingBottom: 20 }}
                  />

                  {/* Lines */}
                  <Line
                    type="monotone"
                    dataKey="circulatingSupply"
                    stroke="#003C54"
                    name="Circulating Supply"
                    strokeWidth={2.5}
                    yAxisId="0"
                    isAnimationActive={true}
                    animationDuration={800}
                  >
                    <Label
                      value="Circulating Supply"
                      position="top"
                      offset={10}
                      fill="#003C54"
                      fontSize={12}
                    />
                  </Line>

                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#006F8C"
                    name="Token Price"
                    strokeWidth={2.5}
                    yAxisId="1"
                    isAnimationActive={true}
                    animationDuration={800}
                  >
                    <Label
                      value="Token Price"
                      position="top"
                      offset={10}
                      fill="#006F8C"
                      fontSize={12}
                    />
                  </Line>
                  <Line
                    type="monotone"
                    dataKey="stakingParticipation"
                    stroke="#10B981" // Nice green
                    name="Staking Participation"
                    strokeWidth={2.5}
                    yAxisId="1" // Match it to price scale (both % and price are decimals)
                    isAnimationActive={true}
                    animationDuration={800}
                  >
                    <Label
                      value="Staking %"
                      position="top"
                      offset={10}
                      fill="#10B981"
                      fontSize={12}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </AnimatePresence>
        )}
      </section>
    </div>
  );
}
