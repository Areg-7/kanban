import { BackgroundBeams } from '@/components/BackgroundBeams'
import BasicSkills from '@/components/BasicSkills'
import Clients from '@/components/Clients'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Footer from '@/components/Footer'
import { FloatingNav } from '@/components/ui/FloatingNav'

export default function Home() {
	return (
		<main className='relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 z-0'>
			<div className='max-w-7xl w-full'>
				<BackgroundBeams />
				<FloatingNav />
				<Hero />
				<BasicSkills />
				<RecentProjects />
				<Clients />
				{/* <Footer /> */}
			</div>
		</main>
	)
}
