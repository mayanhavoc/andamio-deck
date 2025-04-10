'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export type TOCSection = {
  label: string;
  id?: string;
};

export default function TOC({
  sections,
  position = 'right',
}: {
  sections: TOCSection[];
  position?: 'left' | 'right';
}) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px', // Scroll sensitivity tuned
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const id = section.id ?? generateIdFromLabel(section.label);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  function generateIdFromLabel(label: string) {
    return label
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  return (
    <aside
      className={`fixed top-32 hidden w-64 rounded-xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 transition-all duration-500 lg:block ${
        position === 'left' ? 'left-8' : 'right-8'
      }`}
    >
      <h3 className="text-primary mb-4 text-2xl font-bold">On This Page</h3>
      <nav className="flex flex-col space-y-3">
        {sections.map((section) => {
          const id = section.id ?? generateIdFromLabel(section.label);
          const isActive = activeSection === id;

          return (
            <Link
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium transition-all ${
                isActive
                  ? 'text-accent scale-105 font-bold'
                  : 'hover:text-accent text-slate-600'
              }`}
            >
              {section.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
