import React from 'react'

const MagicButton = ({
	title,
	icon,
	position,
	// handleClick,
	otherClasses,
}: {
	title: string
	icon: React.ReactNode
	position: string
	// handleClick?: () => void
	otherClasses?: string
}) => {
	return (
		<a href='/CV.pdf' download='CV.pdf'>
			<div className='hover-effect'>
				<button
					className='relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none'
					// onClick={handleClick}
				>
					<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
					<span
						className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
					>
						{position === 'left' && icon}
						<li
							className='relative overflow-hidden block text-center grow p-0'
							data-hover={title}
						>
							<span className='block'>{title}</span>
						</li>
						{position === 'right' && icon}
					</span>
				</button>
			</div>
		</a>
	)
}

export default MagicButton
