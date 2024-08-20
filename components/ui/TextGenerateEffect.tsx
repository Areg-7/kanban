'use client'
import { cn } from '@/utils/cn'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import Title from './BubbleText'

export const TextGenerateEffect = ({
	words,
	title,
	className,
}: {
	words: string
	title: string
	className?: string
}) => {
	const [scope, animate] = useAnimate()
	let wordsArray = words.split(' ')
	useEffect(() => {
		console.log(wordsArray)
		animate(
			'span',
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.2),
			}
		)
	}, [scope.current])

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map(word => {
					return (
          <>
						<motion.span className='dark:text-white text-black opacity-0 text-4xl'>
							{word}{' '}
						</motion.span>
             
          </>
					)
				})}
			</motion.div>
		)
	}


	return (
		<div className={cn(className)}>
			{/* mt-4 to my-4 */}
			<div className='my-4'>
				<div className=' dark:text-white text-black leading-snug tracking-wide'>
					{renderWords()}
					<Title title={title} />
				</div>
			</div>
		</div>
	)
}
