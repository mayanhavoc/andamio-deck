'use client';

import ChartIframe from '@/components/ChartIframe';
import { motion } from 'framer-motion';

export default function ResearchPage() {
  return (
    <div className="min-h-screen w-full bg-white px-8 py-16 text-slate-800">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary mb-16 text-center text-4xl font-bold md:text-6xl"
      >
        Research & Token Modeling
      </motion.h1>

      <div className="mx-auto max-w-6xl space-y-24">
        {/* Chart 1 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Token Supply Projection</h2>
          <ChartIframe src="/charts/ant_token_supply_chart.html" />
        </section>

        {/* Chart 2 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">
            Buy Pressure from Token Sinks
          </h2>
          <ChartIframe src="/charts/ant_token_sink_strategies_buy_pressure.html" />
        </section>

        {/* Chart 3 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Staking Impact</h2>
          <ChartIframe src="/charts/ant_staking_participation_vs_buy_pressure.html" />
        </section>

        {/* Chart 4 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">
            Total Market Cap Scenarios
          </h2>
          <ChartIframe src="/charts/ant_token_market_cap_scenarios.html" />
        </section>

        {/* Chart 5 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Governance Feedback Loops</h2>
          <ChartIframe src="/charts/ant_feedback_model_interactive.html" />
        </section>

        {/* Chart 6 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">
            Token Market Cap Scenarios
          </h2>
          <ChartIframe src="/charts/ant_token_market_cap_scenarios.html" />
        </section>

        {/* Chart 7 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">
            Holdings Distribution vs DAO Participation
          </h2>
          <ChartIframe src="/charts/ant_avg_holdings_impact.html" />
        </section>
      </div>
    </div>
  );
}
