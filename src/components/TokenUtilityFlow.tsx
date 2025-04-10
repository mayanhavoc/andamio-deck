// src/components/TokenUtilityFlow.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Learn',
    description: 'Acquire new skills through courses and onboarding pathways.',
  },
  {
    title: 'Verify',
    description: 'Earn on-chain credentials to prove your capabilities.',
  },
  {
    title: 'Contribute',
    description: 'Apply your skills to real-world projects and challenges.',
  },
  {
    title: 'Earn',
    description: 'Receive fair, verifiable rewards for quality contributions.',
  },
  {
    title: 'Govern',
    description:
      'Shape the evolution of the network through governance participation.',
  },
];

export default function TokenUtilityFlow() {
  return (
    <div className="mx-auto mt-24 flex max-w-5xl flex-col items-center space-y-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary mb-12 text-center text-2xl font-bold md:text-4xl"
      >
        How $ANT Powers the Andamio Network
      </motion.h2>

      {/* Flow */}
      <div className="scrollbar-hide flex w-full items-center justify-start gap-8 overflow-x-auto pb-4 md:gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Step */}
            <div className="flex max-w-[160px] flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-primary mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white"
              >
                {index + 1}
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>

            {/* Arrow (if not last step) */}
            {index !== steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="text-primary hidden md:block"
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
