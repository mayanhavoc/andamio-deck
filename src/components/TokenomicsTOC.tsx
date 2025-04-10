'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const sections = [
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'token-design', label: 'Token Design Philosophy' },
  { id: 'overview', label: 'Token Overview' },
  { id: 'supply-emissions', label: 'Supply & Emissions' },
  { id: 'funding-sales', label: 'Funding & Sales' },
  { id: 'utility', label: 'Token Utility' },
  { id: 'value-accrual', label: 'Value Accrual' },
  { id: 'treasury-incentives', label: 'Treasury & Incentives' },
  { id: 'governance', label: 'Governance' },
  { id: 'risks', label: 'Risks & Disclaimers' },
];

export default function TokenomicsTOC() {
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
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed right-8 top-32 hidden w-64 rounded-lg bg-white p-6 shadow-lg lg:block">
      <h3 className="mb-4 text-xl font-bold">On This Page</h3>
      <nav className="flex flex-col space-y-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`text-sm transition ${
              activeSection === section.id
                ? 'text-accent font-bold'
                : 'text-primary hover:underline'
            }`}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
