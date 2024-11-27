'use client'
import img from '@/app/favicon.ico'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
	{
		id: 1,
		title:
			'from each purchased item there will be 7-20% to HELP children from diseases.',
		description: '',
		img: '/child_2.jpg',
		url: '/',
		// bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
	},
	{
		id: 2,
		title: 'Help children and buy goods on Amazon only from here',
		description: '',
		img: '/child.jpg',
		url: '/',
		// bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
	},
	{
		id: 3,
		title: 'Every penny is important for children',
		description: '',
		img: '/a.jpg',
		url: '/',
		// bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
	},
]

const Slider = () => {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))
		}, 7000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='h-[calc(100vh-80px)] overflow-hidden'>
			<div
				className='w-max h-full flex transition-all ease-in-out duration-1000'
				style={{ transform: `translateX(-${current * 100}vw)` }}
			>
				{slides.map(slide => (
					<div
						className='w-screen h-full flex flex-col gap-16 xl:flex-row bg-background'
						key={slide.id}
					>
						{/* TEXT CONTAINER */}
						<div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center bg-background px-32'>
							<h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
								{slide.description}
							</h2>
							<h1 className='text-4xl lg:text-4xl 2xl:text-6xl font-Montserrat'>
								{slide.title}{' '}
								<Image className='w-12 text-center inline' src={img} alt='' />
							</h1>
						</div>
						{/* IMAGE CONTAINER */}
						<div className='h-1/2 xl:w-1/2 xl:h-full relative bg-background'>
							<Image
								src={slide.img}
								alt=''
								fill
								sizes='100%'
								className='object-cover'
							/>
						</div>
					</div>
				))}
			</div>
			<div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
				{slides.map((slide, index) => (
					<div
						className={`w-3 h-3  rounded-full ring-1 ring-primary cursor-pointer flex items-center justify-center ${
							current === index ? 'scale-150' : ''
						}`}
						key={slide.id}
						onClick={() => setCurrent(index)}
					>
						{current === index && (
							<div className='w-[6px] h-[6px] bg-primary rounded-full'></div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider
