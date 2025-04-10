import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StickyNavDots({ sections }: { sections: string[] }) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;

      const currentSection = Math.round(scrollY / sectionHeight);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDotClick = (index: number) => {
    const sectionId = sections[index].toLowerCase().replace(/\s+/g, '-');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed right-8 top-1/2 z-50 flex -translate-y-1/2 transform flex-col gap-4"
    >
      {sections.map((label, index) => (
        <div key={index} className="group relative flex items-center">
          {/* Tooltip with Slide Out */}
          <div className="absolute right-6 translate-x-4 whitespace-nowrap rounded bg-gray-700 px-2 py-1 text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            {label}
          </div>

          {/* Dot */}
          <button
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full focus:outline-none ${
              index === activeSection ? 'bg-primary scale-125' : 'bg-slate-400'
            } transition-transform duration-300`}
          />
        </div>
      ))}
    </motion.div>
  );
}
