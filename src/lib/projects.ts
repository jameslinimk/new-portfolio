export interface Project {
	id: string
	title: string
	description: string
	image: string
	github: string
}

export const projects: Project[] = [
	{
		id: "chess-engine",
		title: "Chess engine",
		description:
			"Lorem ipsum dolor sit amet ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo",
		image: "https://wallpaperaccess.com/full/2918041.jpg",
		github: "the-blue-guy"
	},
	{
		id: "chess-engine-2 2",
		title: "Chess engine",
		description:
			"Lorem ipsum dolor sit amet ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo",
		image: "https://wallpaperaccess.com/full/2918041.jpg",
		github: "the-blue-guy"
	},
	{
		id: "chess-engine-3",
		title: "Chess engine 3",
		description:
			"Lorem ipsum dolor sit amet ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo",
		image: "https://wallpaperaccess.com/full/2918041.jpg",
		github: "the-blue-guy"
	},
	{
		id: "chess-engine-4",
		title: "Chess engine 4",
		description:
			"Lorem ipsum dolor sit amet ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo",
		image: "https://wallpaperaccess.com/full/2918041.jpg",
		github: "the-blue-guy"
	}
]

export const projectsMap = projects.reduce<{ [id: string]: Project }>((acc, cur) => {
	acc[cur.id] = cur
	return acc
}, {})
