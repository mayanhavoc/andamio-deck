'use client';

import { motion } from 'framer-motion';
import BackToTopButton from '@/components/BackToTopButton';
import TOC from '@/components/TOC';

const constitutionSections = [
  { label: 'Preamble' },
  { label: 'Article I: Foundation' },
  { label: 'Article II: Citizenship and Roles' },
  { label: 'Article III: Governance Domains' },
  { label: 'Article IV: Voting and Decision-Making' },
  { label: 'Article V: Treasury and Incentives' },
  { label: 'Article VI: Dispute Resolution & Accountability' },
  { label: 'Article VII: Ratification & Amendments' },
];

export default function ConstitutionPage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] w-screen overflow-x-hidden bg-white text-slate-800">
      {/* TOC Sidebar */}
      <TOC sections={constitutionSections} position="right" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary mb-12 mt-16 text-center text-4xl font-bold md:text-6xl"
      >
        Constitution of the Andamio Republic
      </motion.h1>

      <div className="mx-auto max-w-3xl space-y-24">
        {/* Preamble */}
        <motion.section id="preamble" className="min-h-[80vh] scroll-mt-24">
          <h2 className="text-accent mb-4 text-2xl font-bold">Preamble</h2>
          <p className="leading-relaxed">
            We, the contributors and stewards of the Andamio Republic, in
            pursuit of a fair and verifiable knowledge economy, do hereby
            establish this Constitution.
            <br />
            <br />
            We commit to a republic of merit, equity, and open collaboration,
            guided by reason, evidence, and shared values.
          </p>
        </motion.section>

        {/* Article I */}
        <motion.section
          id="article-i-foundation"
          className="min-h-[80vh] scroll-mt-24"
        >
          <h2 className="text-accent mb-4 text-2xl font-bold">
            Article I: Foundation
          </h2>
          <h3 className="mb-2 text-xl font-semibold">Purpose</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Issue and maintain verifiable skill credentials</li>
            <li>Enable pathways from learning to work</li>
            <li>Incentivize meaningful contributions</li>
            <li>Govern through domain-specific expertise</li>
          </ul>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Guiding Principles
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Merit over wealth</li>
            <li>Decentralized governance</li>
            <li>Transparent verification</li>
            <li>Inclusive participation</li>
            <li>Progress through learning and contribution</li>
          </ul>
        </motion.section>

        {/* Article II */}
        <motion.section
          id="article-ii-citizenship-and-roles"
          className="min-h-[80vh] scroll-mt-24"
        >
          <h2 className="text-accent mb-4 text-2xl font-bold">
            Article II: Citizenship and Roles
          </h2>
          <h3 className="mb-2 text-xl font-semibold">
            Citizens of the Republic
          </h3>
          <p>
            All users with a verified identity and token-holding wallet are
            Citizens of the Andamio Republic.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">Roles</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Observers:</strong> Newcomers with passive read-only
              participation.
            </li>
            <li>
              <strong>Contributors:</strong> Active individuals with verified
              on-chain work.
            </li>
            <li>
              <strong>Guardians:</strong> Verified domain experts with
              credentialed authority.
            </li>
            <li>
              <strong>Producers:</strong> Token holders participating through
              funding or delegation.
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-xl font-semibold">Rights and Duties</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Propose, deliberate, and vote (as permitted by role)</li>
            <li>Uphold truth, verify contributions, promote learning</li>
            <li>
              Appeal unjust outcomes through structured dispute resolution
            </li>
          </ul>
        </motion.section>

        {/* Article III */}
        <motion.section
          id="article-iii-governance-domains"
          className="min-h-[80vh] scroll-mt-24"
        >
          <h2 className="text-accent mb-4 text-2xl font-bold">
            Article III: Governance Domains
          </h2>
          <h3 className="mb-2 text-xl font-semibold">Definition</h3>
          <p>
            A Governance Domain is a defined area of expertise (e.g., Smart
            Contracts, UX, Legal).
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Credentialing and Authority
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Guardians must possess verifiable credentials to vote with higher
              weight.
            </li>
            <li>
              Credentials are issued by trusted authorities and are subject to
              expiration and renewal.
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Domain Creation and Evolution
          </h3>
          <p>
            New domains may be proposed by Citizens and require Guardian
            endorsement plus community vote.
          </p>
        </motion.section>

        {/* Article IV */}
        <motion.section
          id="article-iv-voting-and-decision-making"
          className="min-h-[80vh] scroll-mt-24"
        >
          <h2 className="text-accent mb-4 text-2xl font-bold">
            Article IV: Voting and Decision-Making
          </h2>
          <h3 className="mb-2 text-xl font-semibold">Voting Power Formula</h3>
          <p>Voting Power (VP) is calculated as:</p>
          <p className="mb-4 mt-2 rounded-md bg-gray-100 p-4 text-center font-mono">
            VP = √(Tokens) + (Reputation × Domain Relevance × Weight)
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">Vote Types</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>General Votes:</strong> All Citizens (token + reputation
              weighted)
            </li>
            <li>
              <strong>Domain-Specific Votes:</strong> Guardians have elevated
              weight
            </li>
            <li>
              <strong>Constitutional Amendments:</strong> Require Guardian
              supermajority + quorum
            </li>
          </ul>

          <h3 className="mb-2 mt-6 text-xl font-semibold">Governance Bodies</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Assembly:</strong> All Citizens
            </li>
            <li>
              <strong>Council of Guardians:</strong> Verified domain experts
            </li>
            <li>
              <strong>Steward Nodes:</strong> Elected multisig signers for
              on-chain execution
            </li>
          </ul>
        </motion.section>

        {/* Article V */}
        <motion.section
          id="article-v-treasury-and-incentives"
          className="min-h-[80vh] scroll-mt-24"
        >
          <h2 className="text-accent mb-4 text-2xl font-bold">
            Article V: Treasury and Incentives
          </h2>
          <h3 className="mb-2 text-xl font-semibold">Treasury Sources</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Network fees (in $AND token)</li>
            <li>Staking rewards</li>
            <li>Grants and donations</li>
          </ul>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Spending Proposals
          </h3>
          <p>
            Spending proposals may be submitted by any Citizen, reviewed by
            Guardians, and voted on by the Assembly.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Incentive Alignment
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Contributors rewarded based on quality and verification</li>
            <li>Guardians earn bonuses for governance work</li>
            <li>Emission policies adapt to network maturity</li>
          </ul>
        </motion.section>

        {/* Article VI */}
        <motion.section
          id="article-vi-dispute-resolution-accountability"
          className="min-h-[80vh]"
        >
          <h2 className="text-accent mb-4 text-2xl font-bold">
            Article VI: Dispute Resolution & Accountability
          </h2>
          <h3 className="mb-2 text-xl font-semibold">Disputes</h3>
          <p>
            Disputes may be raised by any Citizen and resolved by domain
            Guardians and arbitrators.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            Slashing and Sanctions
          </h3>
          <p>
            Reputation loss and token slashing for misuse of governance
            processes.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">Appeals</h3>
          <p>
            Final appeals reviewed by the Council of Guardians and recorded
            on-chain.
          </p>
        </motion.section>

        {/* Article VII */}
        <motion.section
          id="article-vii-ratification-amendments"
          className="min-h-[80vh] scroll-mt-24"
        >
          <h2 className="text-accent mb-4 text-2xl font-bold">
            Article VII: Ratification & Amendments
          </h2>
          <h3 className="mb-2 text-xl font-semibold">Ratification</h3>
          <p>
            The Constitution is ratified by 66% community approval with Guardian
            quorum.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">Amendment Process</h3>
          <p>
            Proposals undergo 30-day debate, require 75% Guardian approval, and
            a token holder quorum.
          </p>
        </motion.section>

        {/* Final Quote */}
        <motion.blockquote className="border-primary mt-8 border-l-4 pl-4 italic text-slate-600">
          “Until philosophers become kings, or the kings and princes of this
          world have the spirit and power of philosophy… there can be no rest
          from troubles… nor, I think, will the human race.”
          <br />
          <span className="mt-2 block text-right">— Plato, *The Republic*</span>
        </motion.blockquote>
      </div>

      {/* Back to Top */}
      <BackToTopButton />
    </div>
  );
}
