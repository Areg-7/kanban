import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { ThemeProvider } from './provider'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "Areg's portfolio",
	description: 'Modern portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<CustomCursor />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
