'use client'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		const root = window.document.documentElement
		if (darkMode) {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
	}, [darkMode])

	const toggleMode = () => {
		setDarkMode(!darkMode)
	}

	return (
		<button
			onClick={toggleMode}
			//   className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 transition-colors duration-300"
		>
			{darkMode ? <FiSun /> : <FiMoon />}
		</button>
	)
}

export default ThemeToggle
