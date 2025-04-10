import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // fancier icon!

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="bg-primary hover:bg-accent fixed bottom-8 right-8 z-50 rounded-full p-3 text-white shadow-lg transition-all duration-300"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
