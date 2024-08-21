'use client'
import OrbitingCircles from '@/components/ui/orbiting-circles'
import { AnimatePresence, motion } from 'framer-motion'
// import {&apos} from 'react/no-unescaped-entities'
import { useState } from 'react'
import { FiCheckSquare, FiX } from 'react-icons/fi'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export function OrbitingCirclesDemo() {
	const [notification, setNotification] = useState<string | null>(null)
	const email = 'areg.abrahamyan3@gmail.com'

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email)
			setNotification('Email copied to clipboard!')
			setTimeout(() => setNotification(null), 3000)
		} catch (err) {
			console.error('Failed to copy!', err)
			setNotification('Failed to copy email.')
			setTimeout(() => setNotification(null), 3000)
		}
	}

	const deleteNotification = () => {
		setNotification(null)
	}

	return (
		<div className='relative top-16 flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg'>
			<Router>
				<Link to=''>
					<HoverBorderGradient className='p-2 px-3 hover-effect'>
						<li
							className='relative overflow-hidden block text-center grow p-0 text-indigo-300'
							data-hover="Lets get in touch"
						>
							<span className='block'>Lets get in touch</span>
						</li>
					</HoverBorderGradient>
				</Link>
			</Router>
		</div>
	)
}

