'use client'
import { navItems } from '@/data'
import { cn } from '@/utils/cn'
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from '../ThemeToggle'

export const FloatingNav = ({ className }: { className?: string }) => {
	const { scrollYProgress } = useScroll()

	const [visible, setVisible] = useState(true)

	useMotionValueEvent(scrollYProgress, 'change', current => {
		if (typeof current === 'number') {
			let direction = current! - scrollYProgress.getPrevious()!

			if (scrollYProgress.get() < 0.05) {
				setVisible(true)
			} else {
				if (direction < 0) {
					setVisible(true)
				} else {
					setVisible(false)
				}
			}
		}
	})

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					// change  pr-2 pl-8 py-2 to px-10 py-5
					'flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4',
					className
				)}
				style={{
					backdropFilter: 'blur(50px) saturate(180%)',
					// backgroundColor: 'rgb(165, 180, 252, 0.5)',
					borderRadius: '50px',
					border: '1px solid rgba(255, 255, 255, 0.125)',
					// backgroundColor: '#13162D'
				}}
			>
				{navItems.map((navItem: any, idx: number) => (
					<Link
						key={`link=${idx}`}
						href={navItem.link}
						className={cn(
							'relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
						)}
					>
						<ul className='hover-effect align-center expanded text-center menu cursor-pointer flex flex-row'>
							<li
								className='relative overflow-hidden block text-center grow p-0 text-indigo-300'
								data-hover={navItem.name}
							>
								<span className='block'>{navItem.name}</span>
							</li>
						</ul>
					</Link>
				))}
				<ThemeToggle />
			</motion.div>
		</AnimatePresence>
	)
}
