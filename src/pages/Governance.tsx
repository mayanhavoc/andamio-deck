'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Governance() {
  return (
    <div className="relative flex min-h-screen flex-col space-y-24 bg-white p-8 text-slate-800">
      {/* Animated Gradient Background */}
      <div className="from-primary/20 via-accent/10 to-primary/20 animate-gradient absolute inset-0 -z-10 bg-gradient-to-br" />

      {/* HERO SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl space-y-6 text-center"
      >
        <h1 className="text-primary text-4xl font-bold md:text-5xl">
          Governance
        </h1>
        <p className="text-lg text-gray-600">
          Andamio’s governance model prioritizes skill, contribution, and
          integrity over wealth.
        </p>
      </motion.section>

      {/* Divider */}
      <div className="my-12 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* GOVERNANCE LIFECYCLE */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto w-full max-w-5xl space-y-8"
      >
        <h2 className="text-center text-2xl font-semibold">
          Governance Lifecycle
        </h2>
        <div className="flex justify-center">
          <Image
            src="/assets/governance-lifecycle.png"
            alt="Governance Lifecycle Diagram"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </motion.section>

      {/* Divider */}
      <div className="my-20 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* CONSTITUTION SUMMARY */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto w-full max-w-5xl space-y-8"
      >
        <h2 className="text-center text-2xl font-semibold">
          📝 Constitution of the Andamio Network
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: '1. 🧠 Merit Over Wealth',
              desc: 'Voting weight is based on verified skills and contributions — not token holdings.',
            },
            {
              title: '2. 🎓 Domain Sovereignty',
              desc: 'Only certified experts can vote on proposals in their verified domains.',
            },
            {
              title: '3. 🪪 Transparent Process',
              desc: 'All governance processes are recorded on-chain for public auditability.',
            },
            {
              title: '4. 🛠️ Progressive Decentralization',
              desc: 'Governance rights expand gradually as trust and maturity grow.',
            },
            {
              title: '5. ⭐ Integrity and Reputation',
              desc: 'Reputation is earned and misconduct reduces governance power.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="hover:border-primary hover:border-accent rounded-lg border border-gray-200 bg-white p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-primary mb-2 text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Constitution Read Button */}
        <div className="mt-8 flex justify-center">
          <Link href="/_constitution">
            <button className="bg-primary hover:bg-accent mt-8 rounded-md px-6 py-3 font-semibold text-white shadow transition duration-300">
              Read the Full Constitution
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="my-20 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* VOTING FORMULA */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto w-full max-w-3xl space-y-6 text-center"
      >
        <h2 className="text-primary text-2xl font-semibold">
          ⚖️ Voting Weight Formula
        </h2>
        <p className="text-lg text-gray-600">
          Your voting power is determined by your verified expertise,
          contribution quality, and commitment to the ecosystem.
        </p>
        <div className="inline-block rounded-xl bg-gray-100 p-8 shadow-lg">
          <p className="text-primary text-2xl font-bold">
            Voting Weight = <span className="text-accent">√Tokens</span> +{' '}
            <span className="text-accent">Reputation</span> ×{' '}
            <span className="text-accent">Domain Alignment</span> ×{' '}
            <span className="text-accent">Weight</span>
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="my-20 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* META-GOVERNANCE HEADER */}
      <h2 className="text-primary relative text-center text-2xl font-semibold">
        🌍 Meta-Governance & Future Evolution
        <div className="bg-accent absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2"></div>
      </h2>

      {/* FUTURE GOVERNANCE MODULES */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto w-full max-w-5xl space-y-8"
      >
        <p className="mx-auto max-w-2xl text-center text-lg text-gray-600">
          As the network matures, Andamio will adopt innovative governance
          mechanisms to stay aligned with community values.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: '🗳️ Voting Slates',
              desc: 'Organize proposals into bundles for structured, efficient voting.',
            },
            {
              title: '🧮 Quadratic Voting',
              desc: 'Balance passionate contributor influence and limit whale dominance.',
            },
            {
              title: '🔮 Futarchy Experiments',
              desc: 'Use prediction markets to govern based on forecasted impact, not just opinions.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="hover:border-primary hover:border-accent rounded-lg border border-gray-200 bg-white p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-primary mb-2 text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
