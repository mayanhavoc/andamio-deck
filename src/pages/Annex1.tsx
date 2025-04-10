'use client';

import { motion } from 'framer-motion';
import BackToTopButton from '@/components/BackToTopButton';

export default function AnnexGovernancePage() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] w-screen overflow-x-hidden bg-white text-slate-800">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary mb-12 text-center text-5xl font-bold md:text-7xl"
      >
        Annex I: Governance Details
      </motion.h1>

      {/* Content */}
      <div className="mx-auto max-w-3xl space-y-20 px-6">
        {/* Voting Power Formula */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent mb-6 text-3xl font-bold">
            🧠 Voting Power Formula
          </h2>
          <p className="mb-4">Voting Power (VP) is calculated as:</p>
          <div className="rounded-md bg-gray-100 p-4 text-center font-mono text-lg">
            VP = √(Tokens) + (Reputation × Domain Relevance × Weight)
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Tokens:</strong> token holdings, quadratically weighted.
            <br />
            <strong>Reputation:</strong> contribution score based on verified
            work.
            <br />
            <strong>Domain Relevance:</strong> 1 if credentialed in subject, 0
            otherwise.
            <br />
            <strong>Weight:</strong> reflects quality of credential and
            endorsements.
          </p>
        </motion.section>

        {/* Credential Verification */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent mb-6 text-3xl font-bold">
            🔐 Credential Verification
          </h2>
          <ul className="list-inside list-disc space-y-3">
            <li>
              Issued by recognized issuers or validated by community standards.
            </li>
            <li>Subject to expiration, renewal, and challenge mechanisms.</li>
            <li>Verifiable on-chain with linked metadata proofs.</li>
          </ul>
        </motion.section>

        {/* Governance Bodies Powers */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent mb-6 text-3xl font-bold">
            🏛️ Governance Bodies Powers
          </h2>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Citizens:</strong> Participate in all general votes,
              propose initiatives, and appeal disputes.
            </li>
            <li>
              <strong>Guardians:</strong> Validate credentials, resolve
              disputes, oversee domain-specific votes.
            </li>
            <li>
              <strong>Council of Guardians:</strong> Final arbiter on appeals,
              manages slashing of bad actors.
            </li>
            <li>
              <strong>Steward Nodes:</strong> Execute decisions on-chain,
              maintain protocol-level integrity.
            </li>
          </ul>
        </motion.section>

        {/* Dispute Handling */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent mb-6 text-3xl font-bold">
            ⚖️ Dispute Handling
          </h2>
          <p>
            Disputes related to credential validity, governance abuse, or fraud
            are resolved transparently by Guardians. Escalations are reviewed by
            the Council with finality.
          </p>
        </motion.section>
      </div>

      <BackToTopButton />
    </div>
  );
}
