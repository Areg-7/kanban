import { FaDownload } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

export default function Hero() {
	return (
		<div className='pb-20 pt-36'>
			<div>
				<Spotlight
					className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
					fill='white'
				/>
				<Spotlight
					className='h-[80vh] w-[50vw] top-10 left-full'
					fill='purple'
				/>
				<Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
			</div>

			<div className='flex justify-center relative my-20 z-10 -mt-5'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
					<TextGenerateEffect
						words="Hi! I'm Areg, a "
						title='Next.js Developer based in Armenia'
						className='text-center text-[40px] md:text-5xl lg:text-6xl font-palanquin'
					/>

					<MagicButton
						title='DOWNLOAD CV'
						icon={<FaDownload />}
						position='right'
					/>
				</div>
			</div>
		</div>
	)
}
