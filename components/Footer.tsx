import img from '@/app/favicon.ico'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	const socialMedia = [
		// {
		// 	id: 1,
		// 	img: '/git.svg',
		// 	link: '/git.svg',
		// },
		{
			id: 2,
			img: '/insta.svg',
			link: 'https://www.instagram.com/christmas__finds/',
		},
		// {
		// 	id: 3,
		// 	img: '/link.svg',
		// 	link: '/link.svg',
		// },
	]

	return (
		<footer className='w-full pt-20 pb-10' id='contact'>
			<div className='flex flex-col items-center'>
				<h1 className='heading lg:max-w-[65vw] font-Montserrat text-text'>
					<span className='text-primary font-Montserrat'>HELP</span>{' '}children and buy goods on Amazon only from here{' '}
						<Image className='w-10 text-center inline' src={img} alt='' />
          
				</h1>
        
				<p className='text-xl	 md:mt-10 my-5 text-center text-primary font-Montserrat'>
					IF ITEM IS UNAVAILABLE CONTACT ME IN SOCIAL MEDIA
				</p>
			</div>
			<div className='flex mt-16 md:flex-row flex-col justify-between items-center px-12'>
				{/* <p className='md:text-base text-sm md:font-normal font-light'>
					Copyright © 2024 Amazon fids
				</p> */}
				<div className='flex items-center md:gap-3 gap-6'>
					{socialMedia.map(info => (
						<Link key={info.id} href={info.link}>
							<div
								key={info.id}
								className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-primary rounded-lg border border-black-300'
							>
								<img src={info.img} alt='icons' width={20} height={20} />
							</div>
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
