export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Skills', link: '#skills' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' },
]

export const mySkills = [
	{
		id: 1,
		title: 'React JS',
		desc: 'front-end JavaScript library for building user interfaces based on components by Facebook Inc.',
		className: 'md:col-span-2',
		thumbnail: '/re.svg',
		link: 'https://react.dev/',
	},
	{
		id: 2,
		title: 'Next JS',
		desc: 'Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.',
		className: 'md:col-span-2',
		thumbnail: '/next.svg',
		link: 'https://nextjs.org/',
	},
	{
		id: 3,
		title: 'Tailwind CSS',
		desc: 'Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/tail.svg',
		link: 'https://tailwindcss.com/',
	},
	{
		id: 4,
		title: 'TypeScript',
		desc: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.",
		className: 'md:col-span-2',
		thumbnail: '/ts.svg',
		link: 'https://www.typescriptlang.org/',
	},
]

export const projects = [
	{
		id: 1,
		title: 'Tour agency',
		des: 'Web Platform for Travel Agency — Simple-to-use website for travel agents. Book hotels and air tickets in one place',
		img: '/p1.png',
		iconLists: ['/php.svg', '/js.svg', '/mysql.svg', '/scss.svg', '/html.svg'],
		link: 'http://aregtour.rf.gd/',
	},
	{
		id: 2,
		title: 'Theme switcher',
		des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
		img: '/p2.png',
		iconLists: ['/next.svg', '/re.svg', '/ts.svg', '/tail.svg', '/scss.svg'],
		link: '/ui.yoom.com',
	},
	{
		id: 3,
		title: 'Kanban',
		des: 'Kanban is a visual system used to manage and keep track of work as it moves through a process.',
		img: '/p3.png',
		iconLists: ['/next.svg', '/re.svg', '/ts.svg', '/tail.svg', '/scss.svg'],
		link: 'https://kanban-two-puce.vercel.app/',
	},
	{
		id: 4,
		title: 'Math test',
		des: 'Test yourself on calculating numbers, fractions, angles, areas, volumes, pythagorean theorem and etc.',
		img: 'https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg',
		iconLists: ['/next.svg', '/re.svg', '/ts.svg', '/tail.svg', '/scss.svg'],
		link: '/ui.apple.com',
	},
]

export const testimonials = [
	{
		quote:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fugit doloribus eum adipisci enim voluptatibus sapiente cum! Adipisci libero beatae, ratione vel odio maiores consectetur.',
		name: 'Lorem, ipsum',
		title: 'Lorem, ipsum dolor sit amet',
	},
	{
		quote:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fugit doloribus eum adipisci enim voluptatibus sapiente cum! Adipisci libero beatae, ratione vel odio maiores consectetur.',
		name: 'Lorem, ipsum',
		title: 'Lorem, ipsum dolor sit amet',
	},
	{
		quote:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fugit doloribus eum adipisci enim voluptatibus sapiente cum! Adipisci libero beatae, ratione vel odio maiores consectetur.',
		name: 'Lorem, ipsum',
		title: 'Lorem, ipsum dolor sit amet',
	},
	{
		quote:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fugit doloribus eum adipisci enim voluptatibus sapiente cum! Adipisci libero beatae, ratione vel odio maiores consectetur.',
		name: 'Lorem, ipsum',
		title: 'Lorem, ipsum dolor sit amet',
	},
	{
		quote:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fugit doloribus eum adipisci enim voluptatibus sapiente cum! Adipisci libero beatae, ratione vel odio maiores consectetur.',
		name: 'Lorem, ipsum',
		title: 'Lorem, ipsum dolor sit amet',
	},
]