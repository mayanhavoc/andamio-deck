import { useEffect, useState } from 'react';

export default function MobileHint() {
  const [showHint, setShowHint] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fading out
      setTimeout(() => setShowHint(false), 500); // Remove completely after fade
    }, 4000); // Show for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showHint && (
        <div
          className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-opacity duration-500 md:hidden ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="flex animate-bounce flex-col items-center text-gray-400">
            <svg
              className="mb-1 h-6 w-6"
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
            <span className="text-xs">Swipe down</span>
          </div>
        </div>
      )}
    </>
  );
}
