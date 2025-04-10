// src/components/TokenomicsFAQ.tsx
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How does $ANT token supply stay sustainable?',
    answer:
      'Supply growth is carefully managed through a combination of fixed emissions schedules, token sinks (such as fees and staking locks), and governance-controlled adjustments to future emissions rates.',
  },
  {
    question: 'What drives demand for $ANT tokens?',
    answer:
      '$ANT tokens are required for skill verification, contributor onboarding, project participation, and governance. As the Andamio network grows, so does the demand for verified credentials and trusted contributions.',
  },
  {
    question: 'How can I participate in governance?',
    answer:
      'Token holders can propose and vote on changes to network rules, credential standards, reward mechanisms, and ecosystem initiatives. Governance is merit-weighted to balance expertise and broad participation.',
  },
  {
    question: 'Is $ANT inflationary or deflationary?',
    answer:
      'Initially, $ANT has scheduled emissions to bootstrap the network. Over time, token sinks like fee burns and staking locks are expected to create net deflationary pressure.',
  },
];

export default function TokenomicsFAQ() {
  return (
    <section className="mx-auto mt-24 max-w-5xl px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary mb-12 text-center text-2xl font-bold md:text-4xl"
      >
        Tokenomics FAQ
      </motion.h2>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-xl bg-gray-50 p-6 shadow-sm"
          >
            <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
