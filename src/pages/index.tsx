import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-primary flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center px-8 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Work Reimagined</h1>
        <p className="max-w-2xl text-lg md:text-2xl">
          Verified skills. Trusted contributions. Decentralized governance.
        </p>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Andamio builds the trust infrastructure for the new economy —
          empowering contributors and organizations to work, verify, and grow
          together.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/pitch">
            <button className="text-primary hover:bg-accent rounded-lg bg-white px-6 py-3 font-semibold shadow transition hover:text-white">
              View Pitch Deck
            </button>
          </Link>
          <Link href="/tokenomics">
            <button className="hover:text-primary rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white">
              Explore Tokenomics
            </button>
          </Link>
        </div>
      </section>
      <section className="space-y-12 bg-white px-8 py-24 text-center text-slate-800">
        <div>
          <h2 className="mb-4 text-3xl font-bold">The Problem</h2>
          <p className="mx-auto max-w-3xl text-lg">
            Skills are invisible. Credentials are inflated. Organizations can't
            verify ability — and contributors can't prove it.
          </p>
        </div>

        <div>
          <h2 className="text-primary mb-4 text-3xl font-bold">Our Solution</h2>
          <p className="mx-auto max-w-3xl text-lg">
            Andamio verifies skills and contributions on-chain, unlocking a
            decentralized marketplace of trusted work, faster hiring, and fairer
            governance.
          </p>
        </div>
      </section>
      <section className="space-y-16 bg-slate-50 px-8 py-24 text-center">
        <h2 className="mb-12 text-3xl font-bold">How It Works</h2>
        <div className="grid gap-12 md:grid-cols-5">
          {[
            {
              title: 'Learn',
              desc: 'Acquire skills through curated programs.',
            },
            {
              title: 'Verify',
              desc: 'Earn verifiable, blockchain-backed credentials.',
            },
            {
              title: 'Contribute',
              desc: 'Apply skills to real projects and tasks.',
            },
            { title: 'Earn', desc: 'Get rewarded for verified contributions.' },
            {
              title: 'Govern',
              desc: 'Shape the future through domain-based governance.',
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="bg-primary flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
