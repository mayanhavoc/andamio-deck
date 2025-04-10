// src/components/ScrollProgressBar.tsx
import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = (totalScroll / windowHeight) * 100;
      setScroll(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent">
      <div
        className="bg-primary h-full transition-all duration-300"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
