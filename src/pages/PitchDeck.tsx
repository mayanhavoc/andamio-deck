// src/pages/PitchDeck.tsx
'use client';

import { motion } from 'framer-motion';
import StickyNavDots from '@/components/StickyNavDots';
import FloatingDownloadButton from '@/components/FloatingButton';
import MobileHint from '@/components/MobileHint';
import { FileText } from 'lucide-react';

const slides = [
  {
    title: 'Work Reimagined',
    subtitle:
      'Verified skills. Trusted contributions. Decentralized governance.',
    content:
      'Andamio is reimagining how work is verified, rewarded, and governed — creating the trust infrastructure for the decentralized economy.',
  },
  {
    title: 'The Problem',
    subtitle: 'Credentials Are Broken',
    content:
      'Hiring is one of the biggest bottlenecks for fast-growing teams. It is slow, expenside and unpredictable.',
  },
  {
    title: 'The Opportunity',
    subtitle: 'Verified Skills = New Economy',
    content:
      'Organizations need a reliable way to verify skills, contributions, and reputation. Andamio creates a portable trust layer for talent.',
  },
  {
    title: 'The Solution',
    subtitle: 'Learn → Verify → Contribute → Earn → Govern',
    content:
      'Andamio makes it faster, cheaper, and easier to assemble high-performing teams - turning recruitment from a bottleneck into an engine of growth.',
  },
  {
    title: 'The Product',
    subtitle: 'Onboarding, Learning, Credentials, Contribution',
    content:
      'A seamless Web3 platform where users onboard, prove skills, contribute to real projects, earn credentials, and build their governance influence.',
  },
  {
    title: 'Governance',
    subtitle: 'Meritocratic Decision-Making',
    content:
      'Governance weight is earned through skills, reputation, and contributions — not just token holdings. Experts vote on what they’re credentialed in.',
  },
  {
    title: 'Traction',
    subtitle: 'Live Alpha on Cardano',
    content:
      'Core modules are deployed. Early organizations are onboarding. Credentials and contribution verification are happening on-chain today.',
  },
  {
    title: 'Business Model',
    subtitle: 'Subscription + Transaction Fees',
    content:
      'Organizations pay for access to verified contributor networks. Fees are collected on credential issuance and contribution verification.',
  },
  {
    title: 'Why Now',
    subtitle: 'Blockchain Maturity + AI Skill Disruption',
    content:
      'Blockchain finally provides trust. AI is disrupting credentials. Remote work is the norm. The time is right for the Republic of Work to emerge.',
  },
  {
    title: 'Roadmap',
    subtitle: 'MVP → Growth → Decentralization',
    content:
      '2025: MVP Launch. 2026: Contributor Growth. 2027: Full Community Governance. 2028+: Expansion across industries and verticals.',
  },
  {
    title: 'Join Us',
    subtitle: 'Build the Future of Work',
    content:
      'Join Andamio to help create a trusted, decentralized future for skills, contribution, and governance.',
  },
];

export default function PitchDeck() {
  const sections = slides.map((_, idx) => `slide-${idx}`);

  return (
    <div className="min-h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-gradient-to-b from-white via-slate-100 to-white">
      {/* Sticky Navigation Dots */}
      <StickyNavDots sections={sections} />

      {/* Mobile Navigation Hint */}
      <MobileHint />

      {/* Slides */}
      {slides.map((slide, index) => (
        <section
          key={index}
          id={`slide-${index}`}
          className="relative flex min-h-[calc(100vh-2rem)] w-screen snap-start flex-col items-center justify-center px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 max-w-3xl"
          >
            <h2 className="text-primary mb-6 text-4xl font-bold md:text-5xl">
              {slide.title}
            </h2>
            <h3 className="text-accent mb-4 text-2xl font-semibold md:text-3xl">
              {slide.subtitle}
            </h3>
            <p className="text-lg text-slate-700 md:text-xl">{slide.content}</p>
          </motion.div>

          {/* Down arrow animation */}
          {index < slides.length - 1 && (
            <div className="absolute bottom-8 animate-bounce">
              <svg
                className="h-8 w-8 text-slate-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </section>
      ))}

      {/* Floating Download Button */}
      <FloatingDownloadButton
        label="Download Deck"
        download={true}
        href="/andamio-pitch-deck.pdf" // Update with your actual file
        icon={<FileText />}
      />
    </div>
  );
}
