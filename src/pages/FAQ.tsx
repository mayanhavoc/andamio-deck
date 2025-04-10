'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // using lucide icons

const faqs = [
  {
    question: 'What is Andamio?',
    answer:
      'Andamio is a decentralized Learn-to-Work platform where skills and contributions are blockchain-verified, portable, and trusted.',
  },
  {
    question: 'How does skill verification work?',
    answer:
      'Skills are verified through blockchain-issued credentials linked to completed courses, assessments, and real contributions to projects.',
  },
  {
    question: 'Who can use Andamio?',
    answer:
      'Learners, contributors, organizations, and project teams can all benefit from accessing verified skills and trusted contribution records.',
  },
  {
    question: 'What blockchain does Andamio use?',
    answer:
      'Andamio is built on the Cardano blockchain, leveraging its secure and scalable infrastructure for credentialing and reputation systems.',
  },
  {
    question: 'How do organizations access talent?',
    answer:
      'Organizations subscribe to Andamio and gain access to verified contributors for projects, reducing onboarding time and improving project outcomes.',
  },
  {
    question: 'How does governance work?',
    answer:
      'Contributors earn governance rights through verified skills and contributions, participating in decision-making for credential standards and network evolution.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-16 text-slate-800 md:px-16">
      <div className="mb-12 text-center">
        <h1 className="text-primary mb-4 text-4xl font-bold md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl">
          Learn more about how Andamio is building the future of trusted skills
          and contributions.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-primary flex w-full items-center justify-between text-left text-lg font-medium focus:outline-none"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <ChevronDown className="text-primary h-6 w-6" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="mt-2 overflow-hidden text-base text-slate-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
