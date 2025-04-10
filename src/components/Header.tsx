import Link from "next/link"; // If using Next.js

export default function Header() {
	return (
		<header className='p-4 flex justify-between items-center border-b border-slate-200'>
			<h1 className='text-2xl font-bold text-[#003C54]'>Andamio</h1>
			<nav className='space-x-4'>
				<Link href='/' className='hover:text-[#006F8C]'>
					Home
				</Link>
				<Link href='/PitchDeck' className='hover:text-[#006F8C]'>
					Pitch Deck
				</Link>
				<Link href='/Tokenomics' className='hover:text-[#006F8C]'>
					Tokenomics
				</Link>
				<Link href='/Governance' className='hover:text-[#006F8C]'>
					Governance
				</Link>
				<Link href='/Modeling' className='hover:text-[#006F8C]'>
					Modeling
				</Link>
				<Link href='/Team' className='hover:text-[#006F8C]'>
					Team
				</Link>
				<Link href='/FAQ' className='hover:text-[#006F8C]'>
					FAQ
				</Link>
				<Link href='/Contact' className='hover:text-[#006F8C]'>
					Contact
				</Link>
			</nav>
		</header>
	);
}
