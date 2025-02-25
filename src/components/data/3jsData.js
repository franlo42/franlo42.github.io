/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef ThreejsData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {ThreejsData[]}
 */
export const threejsData = [
	{
		imgSrc: '../img/toDoList.jpeg',
		title: 'toDo List Webapp',
		descripcion:
			'Simple web application that allows you to organize your daily tasks effectively. You can add new tasks, mark them as completed or delete them when you no longer need them. Ideal for those who want to keep a clear and accesible control of their to-dos. This application is your personal assistant to keep you focused and organized. Managing your tasks has never been so easy!',
		demoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '../img/NATS.png',
		title: 'CLI chat NATS',
		descripcion:
			'A lightweight, real-time chat application built using NATS as the messaging system. This application supports multiple chat channels, message persistence, and replay functionality.',
		demoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '../img/OAuth.jpg',
		title: 'OAuth 2.0',
		descripcion:
			'Proyecto de aprendizaje sobre OAuth 2.0 para autenticar y autorizar usuarios en una pequeña aplicación web de prueba para crear y gestionar una lista de tareas.',
		demoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/ThreeJS.jpg',
		title: 'ThreeJS Playground',
		descripcion:
			'A place for learning ThreeJS and discovering new things! The limit is our imagination.',
		demoURL: 'https://franlo42.is-a.dev/3js',
		anim: 'fade-left',
	}
];
