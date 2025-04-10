'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BackToTopButton from '@/components/BackToTopButton';
import TokenSupplyChart from '@/components/TokenSupplyChart';
import ValueAccrualChart from '@/components/ValueAccrualChart';
import TokenomicsTOC from '@/components/TokenomicsTOC';

export default function Charts() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] w-screen overflow-x-hidden bg-white text-slate-800">
      {/* Hero */}
      <section className="bg-primary flex flex-col items-center justify-center px-8 py-16 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-4xl font-bold md:text-6xl"
        >
          Andamio Tokenomics Report
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl text-lg md:text-2xl"
        >
          Building the Republic of Verified Skills and Contributions
        </motion.p>
        <Link
          href="/docs/Andamio_Tokenomics.pdf"
          target="_blank"
          className="bg-accent hover:bg-accent/80 mt-6 inline-block rounded px-6 py-3 text-white transition"
        >
          Download PDF
        </Link>
      </section>
      <TokenomicsTOC />
      {/* Content */}
      <div className="flex flex-col gap-24 px-6 py-16 md:px-16">
        {/* 1. Executive Summary */}
        <section className="mx-auto max-w-4xl" id="executive-summary">
          <h2 className="mb-4 text-3xl font-bold">Executive Summary</h2>
          <p className="text-lg">
            Andamio is building the decentralized trust layer for work by
            verifying skills, contributions, and reputation on-chain. The
            Andamio Network Token (ANT) aligns incentives between contributors,
            organizations, and the broader ecosystem to drive sustainable value
            creation.
          </p>
        </section>

        {/* 2. Token Design Philosophy */}
        <section className="mx-auto max-w-4xl" id="token-design">
          <h2 className="mb-4 text-3xl font-bold">Token Design Philosophy</h2>
          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>Incentivize verified contribution, not just participation.</li>
            <li>Empower qualified governance over raw wealth voting.</li>
            <li>
              Promote long-term network growth over short-term speculation.
            </li>
          </ul>
        </section>

        {/* 3. Token Overview */}
        <section className="mx-auto max-w-4xl" id="overview">
          <h2 className="mb-4 text-3xl font-bold">Token Overview</h2>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div>
              Name: <span className="font-semibold">Andamio Network Token</span>
            </div>
            <div>
              Symbol: <span className="font-semibold">ANT</span>
            </div>
            <div>
              Chain: <span className="font-semibold">Cardano</span>
            </div>
            <div>
              Max Supply:{' '}
              <span className="font-semibold">1,000,000,000 ANT</span>
            </div>
            <div>
              Decimals: <span className="font-semibold">6</span>
            </div>
            <div>
              Type: <span className="font-semibold">Native Token</span>
            </div>
          </div>
        </section>

        {/* 4. Supply Breakdown & Emissions */}
        <section className="mx-auto max-w-4xl" id="supply-emissions">
          <h2 className="mb-4 text-3xl font-bold">
            Supply Breakdown & Emissions
          </h2>
          <TokenSupplyChart />
          <p className="mt-6 text-lg">
            Token emissions are designed to gradually decrease over a 5-year
            period, rewarding early contributors while preserving long-term
            sustainability.
          </p>
        </section>

        {/* 5. Funding and Sales */}
        <section className="mx-auto max-w-4xl" id="funding-sales">
          <h2 className="mb-4 text-3xl font-bold">Funding and Sales</h2>
          <p className="mb-4 text-lg">
            ANT was distributed through private sales, ISPO mechanisms, and a
            planned public sale.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left text-lg">
              <thead>
                <tr>
                  <th className="border-b p-2">Sale Round</th>
                  <th className="border-b p-2">Tokens</th>
                  <th className="border-b p-2">Price</th>
                  <th className="border-b p-2">Terms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2">Private Sale</td>
                  <td className="border-b p-2">100M ANT</td>
                  <td className="border-b p-2">$0.05</td>
                  <td className="border-b p-2">1Y lock, 2Y vest</td>
                </tr>
                <tr>
                  <td className="border-b p-2">ISPO</td>
                  <td className="border-b p-2">50M ANT</td>
                  <td className="border-b p-2">Delegation Rewards</td>
                  <td className="border-b p-2">Liquid</td>
                </tr>
                <tr>
                  <td className="border-b p-2">Public Sale</td>
                  <td className="border-b p-2">50M ANT</td>
                  <td className="border-b p-2">$0.08</td>
                  <td className="border-b p-2">Liquid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. Token Utility */}
        <section className="mx-auto max-w-4xl" id="utility">
          <h2 className="mb-4 text-3xl font-bold">Token Utility</h2>
          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>Reward verified contributions.</li>
            <li>Stake to access higher-tier project opportunities.</li>
            <li>Vote in governance proposals.</li>
            <li>Pay for credential verification or project listing fees.</li>
          </ul>
        </section>

        {/* 7. Value Accrual */}
        <section className="mx-auto max-w-4xl" id="value-accrual">
          <h2 className="mb-4 text-3xl font-bold">Value Accrual</h2>
          <ValueAccrualChart />
          <p className="mt-6 text-lg">
            ANT’s value grows through an increase in verified contributors,
            organizational demand, network fees, and scarcity mechanisms such as
            staking and token burns.
          </p>
        </section>

        {/* 8. Treasury and Incentives */}
        <section className="mx-auto max-w-4xl" id="treasury-incentives">
          <h2 className="mb-4 text-3xl font-bold">Treasury and Incentives</h2>
          <p className="text-lg">
            20% of initial supply and 10% of ongoing fees replenish the
            community treasury, enabling grants, bounties, and contributor
            incentives for network growth.
          </p>
        </section>

        {/* 9. Governance */}
        <section className="mx-auto max-w-4xl" id="governance">
          <h2 className="mb-4 text-3xl font-bold">Governance</h2>
          <p className="text-lg">
            Governance is hybrid. Token holders and certified subject matter
            experts vote on protocol decisions, standards evolution, and
            treasury allocation.
          </p>
        </section>

        {/* 10. Risks and Disclaimers */}
        <section className="mx-auto max-w-4xl" id="risks">
          <h2 className="mb-4 text-3xl font-bold">Risks and Disclaimers</h2>
          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>Regulatory uncertainty around token classifications.</li>
            <li>Liquidity fluctuations in early markets.</li>
            <li>Adoption and network growth challenges.</li>
            <li>
              Mitigations include conservative treasury management and gradual
              expansion.
            </li>
          </ul>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Join the Republic of Work</h2>
          <p className="mb-6 text-lg">
            Help build the decentralized skills economy. Contribute. Verify.
            Govern.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-accent inline-block rounded px-6 py-3 text-white transition"
          >
            Contact Us
          </Link>
        </section>
      </div>

      {/* Back to Top */}
      <BackToTopButton />
    </div>
  );
}
