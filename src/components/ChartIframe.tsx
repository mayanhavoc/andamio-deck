'use client';

export default function ChartIframe({ src }: { src: string }) {
  return (
    <div className="my-8 w-full overflow-x-auto">
      <iframe
        src={src}
        width="1200"
        height="700"
        style={{
          border: 'none',
          overflow: 'visible',
          minWidth: '1200px', // Prevent shrinking
        }}
        sandbox="allow-scripts allow-same-origin"
        loading="lazy"
      />
    </div>
  );
}
