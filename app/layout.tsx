import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'
import { WixClientContextProvider } from '@/context/wixContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { ThemeProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'charity for children',
	description: 'charity for children',
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
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<WixClientContextProvider>
						{/* <Navbar /> */}
						{/* <FloatingNav /> */}
						<CustomCursor />
						{children}
						<Footer />
					</WixClientContextProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
