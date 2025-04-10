import Link from 'next/link';
import { motion } from 'framer-motion';
import TokenSupplyChart from '@/components/TokenSupplyChart';
import EmissionsScheduleChart from '@/components/EmissionsScheduleChart';
import ValueAccrualChart from '@/components/ValueAccrualChart';
import TokenUtilityFlow from '@/components/TokenUtilityFlow';
import TokenomicsFAQ from '@/components/TokenomicsFAQ';
import BackToTopButton from '@/components/BackToTopButton';
import FloatingDownloadButton from '@/components/FloatingButton';
import { FileText } from 'lucide-react';

export default function Tokenomics() {
  return (
    <div className="min-h-screen space-y-16 bg-white p-4 text-slate-800 md:p-8">
      {/* Hero Section */}
      <section className="mt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary mb-4 text-4xl font-bold md:text-6xl"
        >
          Andamio Tokenomics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 md:text-2xl"
        >
          Building a verified skills economy, powered by blockchain.
        </motion.p>
      </section>

      {/* Token Utility Section */}
      <section className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold md:text-4xl"
        >
          Token Utility
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700"
        >
          $ANT tokens are the fuel of Andamio’s skills network. Contributors
          earn tokens for verified learning and quality contributions.
          Organizations stake tokens for priority access to top talent.
        </motion.p>
      </section>

      {/* Token Supply Breakdown */}
      <section className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-bold md:text-4xl"
        >
          Token Supply Breakdown
        </motion.h2>

        {/* You can insert a pie chart image here or use a component */}
        <div className="flex justify-center">
          <TokenSupplyChart />
        </div>
      </section>

      {/* Emissions Schedule */}
      <section className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-3xl font-bold md:text-4xl"
        >
          Emissions Schedule
        </motion.h2>

        {/* Placeholder for emissions chart */}
        <div className="flex justify-center">
          <EmissionsScheduleChart />
        </div>
      </section>

      {/* Value Accrual Section */}
      <section className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold md:text-4xl"
        >
          Value Accrual
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700"
        >
          Token value grows through network effects: more verified skills, more
          organizations, more trusted contributions. Fees and staking mechanisms
          ensure token demand grows with network size.
        </motion.p>
        {/* Value accrual chart */}
        <div className="flex justify-center">
          <ValueAccrualChart />
        </div>
      </section>

      {/* Token Utility Flow */}
      <section className="mt-24">
        <TokenUtilityFlow />
      </section>

      {/* FAQ  */}
      <section className="mt-24">
        <TokenomicsFAQ />
      </section>

      {/* Download Button */}
      <section className="mt-16 space-y-6 text-center">
        <h2 className="text-primary text-2xl font-bold md:text-4xl">
          Download Tokenomics Report
        </h2>
        <p className="text-lg text-gray-600">
          Want to dive deeper? Read the full tokenomics modeling report.
        </p>
        <FloatingDownloadButton
          href="/Charts"
          label="Read Full Report"
          download={false}
          icon={<FileText />}
        />
      </section>

      {/* CTA */}
      <section className="mt-24 space-y-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary text-2xl font-bold md:text-4xl"
        >
          Get Involved
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          Ready to join the future of verified skills?
        </motion.p>
        <div className="mt-6 flex flex-col items-center justify-center gap-6 md:flex-row">
          <Link
            href="/Whitepaper"
            className="bg-primary hover:bg-accent rounded-lg px-6 py-3 font-bold text-white transition duration-300"
          >
            Read the Whitepaper
          </Link>
          <Link
            href="https://discord.gg/eWBsCfpb"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-primary rounded-lg px-6 py-3 font-bold text-white transition duration-300"
          >
            Join Our Community
          </Link>
        </div>
      </section>
      <BackToTopButton />
    </div>
  );
}
