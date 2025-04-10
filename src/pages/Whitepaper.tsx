'use client';

import { motion } from 'framer-motion';
import TOC from '@/components/TOC';
import FloatingButton from '@/components/FloatingButton';
import { ArrowLeft } from 'lucide-react';

const sections = [
  { label: 'Executive Summary' },
  { label: 'Token Utility' },
  { label: 'Governance' },
  { label: 'Allocation & Vesting' },
  { label: 'Emission Schedule & Deflation' },
  { label: 'Staking Mechanics' },
  { label: 'Value Accrual Design' },
  { label: 'Funding Model' },
  { label: 'Compliance Strategy' },
  { label: 'Timeline' },
  { label: 'Corruption Resilience Framework' },
];

export default function Whitepaper() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] w-screen overflow-x-hidden bg-white p-8 text-slate-800">
      <TOC sections={sections} position="right" />

      {/* HERO TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary mb-16 text-center text-4xl font-bold md:text-6xl"
      >
        Andamio Tokenomics Whitepaper
      </motion.h1>

      <div className="mx-auto max-w-3xl space-y-24">
        {/* Sections */}

        {/* Executive Summary */}
        <Section title="Executive Summary">
          <p>
            Andamio introduces a novel tokenomics model powering a decentralized
            ecosystem of verified skills, contributor reputation, and
            governance. The $ANT token incentivizes quality participation and
            enables context-specific governance where knowledge outweighs
            wealth.
          </p>
        </Section>

        {/* Token Utility */}
        <Section title="Token Utility">
          <ul className="list-inside list-disc space-y-2">
            <li>
              Credential Validation: Stake ANT to issue, endorse, or challenge
              credentials
            </li>
            <li>
              Reputation Collateral: Guardians stake ANT to activate
              domain-specific voting power
            </li>
            <li>Contribution Rewards: Earn ANT for verified contributions</li>
            <li>
              Governance Participation: Vote on treasury, credential standards,
              ecosystem rules
            </li>
            <li>
              Access/Gating: Stake ANT to access premium opportunities and
              analytics
            </li>
          </ul>
        </Section>

        {/* Governance */}
        <Section title="Governance">
          <p>Classes: Observers, Contributors, Guardians, Producers</p>
          <p className="mt-4 rounded-md bg-gray-100 p-4 text-center font-mono">
            Voting Power = sqrt(Tokens) + (Reputation × Domain Relevance ×
            Credential Weight)
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Token quadratic weighting + reputation score + credential-based
            domain relevance
          </p>
        </Section>

        {/* Allocation & Vesting */}
        <Section title="Allocation & Vesting">
          <p>
            35% Ecosystem Incentives | 20% Founders | 15% Private Sale | 15%
            Treasury | 10% ISPO | 5% Grants
          </p>
        </Section>

        {/* Emission Schedule & Deflation */}
        <Section title="Emission Schedule & Deflation">
          <ul className="list-inside list-disc space-y-2">
            <li>Fixed Supply: 1B tokens max cap</li>
            <li>Burn Mechanisms for bad behavior</li>
            <li>Credential Bonds to discourage spam</li>
            <li>Reputation Decay over time</li>
          </ul>
        </Section>

        {/* Staking Mechanics */}
        <Section title="Staking Mechanics">
          <ul className="list-inside list-disc space-y-2">
            <li>Contributors stake to access high-trust tasks</li>
            <li>Guardians stake to activate voting rights</li>
            <li>Organizations stake for dashboards and premium access</li>
          </ul>
        </Section>

        {/* Value Accrual Design */}
        <Section title="Value Accrual Design">
          <ul className="list-inside list-disc space-y-2">
            <li>Earn ANT for verified task completions</li>
            <li>Stake for access and governance</li>
            <li>Token-governed treasury spending</li>
            <li>Stake for org-level verification</li>
          </ul>
        </Section>

        {/* Funding Model */}
        <Section title="Funding Model">
          <p>
            $1M Private Sale | 10M ADA ISPO | Catalyst Grants | Enterprise
            Subscriptions.
          </p>
          <p>
            Use of Funds: 55% Product, 25% Marketing, 10% Legal, 10% Reserve
          </p>
        </Section>

        {/* Compliance Strategy */}
        <Section title="Compliance Strategy">
          <ul className="list-inside list-disc space-y-2">
            <li>KYC/AML for private sale</li>
            <li>Non-custodial ISPO</li>
            <li>Legal and regulatory audits</li>
          </ul>
        </Section>

        {/* Timeline */}
        <Section title="Timeline">
          <ul className="list-inside list-disc space-y-2">
            <li>Q2 2025: Finalize tokenomics</li>
            <li>Q3 2025: Private Sale + Testnet</li>
            <li>Q4 2025: ISPO + Contributor Rewards</li>
            <li>Q1 2026: Token integrated</li>
            <li>Q2 2026: DAO transition</li>
          </ul>
        </Section>

        {/* Corruption Resilience Framework */}
        <Section title="Corruption Resilience Framework">
          <p>
            Measures to defend against capture, bribery, inactivity, and
            expertise dilution through slashing, quadratic voting, reputation
            decay, and audits.
          </p>
        </Section>
      </div>

      {/* Back to Top Floating Button */}
      <FloatingButton
        href="/Tokenomics"
        download={false}
        label="Back to Tokenomics"
        icon={<ArrowLeft />}
      />
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-accent text-2xl font-bold">{title}</h2>
      {children}
    </motion.section>
  );
}
