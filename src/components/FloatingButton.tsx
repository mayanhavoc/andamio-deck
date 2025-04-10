// src/components/FloatingDownloadButton.tsx
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { Download } from 'lucide-react';

import Link from 'next/link';

export default function FloatingButton({
  href,
  label,
  icon,
  download,
}: {
  href: string;
  label: string;
  download: boolean;
  icon: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = (totalScroll / windowHeight) * 100;

      if (scrollPosition > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <Link
        href={href}
        download={download ? '' : undefined}
        className="bg-accent hover:bg-primary fixed bottom-24 right-8 z-50 flex items-center gap-2 rounded-full p-3 text-white shadow-lg transition-all duration-300"
      >
        <div className="flex gap-2">
          <span>{icon}</span>
          {download && <Download className="h-5 w-5" />}
          <span className="hidden font-semibold md:block">{label}</span>
        </div>
      </Link>
    )
  );
}
