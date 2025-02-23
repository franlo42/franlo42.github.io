/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '../img/toDoList.jpeg',
		title: 'toDo List Webapp',
		skills: ['Golang', 'Docker'],
		descripcion:
			'Simple web application that allows you to organize your daily tasks effectively. You can add new tasks, mark them as completed or delete them when you no longer need them. Ideal for those who want to keep a clear and accesible control of their to-dos. This application is your personal assistant to keep you focused and organized. Managing your tasks has never been so easy!',
		demoURL: '',
		repoURL: 'https://github.com/franlo42/ToDoListWebApplication',
		anim: 'fade-right',
	},
	{
		imgSrc: '../img/NATS.png',
		title: 'CLI chat NATS',
		skills: ['Golang', 'Bash', 'Docker'],
		descripcion:
			'A lightweight, real-time chat application built using NATS as the messaging system. This application supports multiple chat channels, message persistence, and replay functionality.',
		demoURL: '',
		repoURL: 'https://github.com/franlo42/NATSchatCLI',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '../img/OAuth.jpg',
		title: 'OAuth 2.0',
		skills: ['Python', 'CSS', 'HTML', 'JavaScript'],
		descripcion:
			'Proyecto de aprendizaje sobre OAuth 2.0 para autenticar y autorizar usuarios en una pequeña aplicación web de prueba para crear y gestionar una lista de tareas.',
		demoURL: '',
		repoURL: 'https://github.com/alerone/OAuthRSE',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/ThreeJS.jpg',
		title: 'ThreeJS Playground',
		skills: ['JavaScript', 'HTML'],
		descripcion:
			'A place for learning ThreeJS and discovering new things! The limit is our imagination.',
		demoURL: '',
		repoURL: 'https://github.com/franlo42/3jsPlayground',
		anim: 'fade-left',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Golang: 'skill-icons:golang',
	Python: 'skill-icons:python-light',
	Docker: 'skill-icons:docker',
	Bash: 'skill-icons:bash-dark',
	HTML: 'skill-icons:html'

};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
