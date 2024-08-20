import Title from './ui/BubbleText'
import { OrbitingCirclesDemo } from './OrbitingCirclesDemo'

const Footer = () => {
	return (
		<footer className='w-full pb-10' id='contact'>
			<h1 className='heading flex justify-center pt-10'>
			<span className="pr-3"><Title title={'Contact'} /></span> with me
			</h1>
			<OrbitingCirclesDemo />
			
			<div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
				<p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 font-montserrat'>
					Dynamic Portfolio with Next.js
				</p>
			</div>
		</footer>
	)
}

export default Footer
