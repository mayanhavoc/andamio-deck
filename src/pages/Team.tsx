'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Adrian',
    role: 'Smart Contract Developer',
    image: '/images/adrian.webp',
    bio: 'Builds scalable and secure smart contracts, enabling Andamio’s credentialing and reputation systems.',
  },
  {
    name: 'James',
    role: 'Lead App Developer',
    image: '/images/james.webp',
    bio: 'Leads the vision and builds Andamio’s contributor-facing application with a focus on seamless UX and decentralized learning experiences.',
  },
  {
    name: 'Jingles',
    role: 'Technical Product Manager & Solutions Architect',
    image: '/images/jingles.webp',
    bio: 'Designs technical solutions bridging product requirements and engineering, enabling scalable platform architecture.',
  },
  {
    name: 'Mix',
    role: 'Community Manager',
    image: '/images/mix.webp',
    bio: 'Fosters vibrant community growth across decentralized networks.',
  },
  {
    name: 'Nelson',
    role: '	Lead API Developer',
    image: '/images/nelson.webp',
    bio: 'Develops Andamio’s core API infrastructure, ensuring secure, scalable access for contributors and organizations.',
  },
  {
    name: 'Nori',
    role: 'Governance & Community Building Lead',
    image: '/images/nori.jpeg',
    bio: 'Fosters decentralized governance, cultivating vibrant communities and resilient decision-making frameworks.',
  },
  {
    name: 'Roberto',
    role: 'Product Manager',
    image: '/images/rmh.webp',
    bio: 'Leads the design, and delivery of Andamio’s platform, blending product innovation and community-driven development.',
  },
  {
    name: 'Sebastian',
    role: 'Key Partnerships & Customer Relations',
    image: '/images/sebastian.webp',
    bio: 'Cultivates strategic partnerships and drives user onboarding to grow the Andamio ecosystem.',
  },
  {
    name: 'Yoram',
    role: 'Business Models & Strategy Lead',
    image: '/images/yoram.jpeg',
    bio: 'Develops Andamio’s sustainable business models, aligning decentralized impact with long-term growth.',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen w-full bg-white px-6 py-16 text-slate-800 md:px-16">
      <div className="mb-16 text-center">
        {/* Animate the header container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-primary mb-4 text-4xl font-bold md:text-6xl">
            Meet the Andamio Team
          </h1>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer flex-col items-center py-4 text-center transition-transform duration-300 ease-in-out hover:rounded-2xl hover:shadow-2xl"
          >
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
                priority={index < 3}
              />
            </div>
            <h2 className="text-primary mb-1 text-xl font-bold">
              {member.name}
            </h2>
            <h3 className="text-accent mb-2 text-sm font-semibold">
              {member.role}
            </h3>
            <p className="max-w-96 text-sm text-slate-600">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
