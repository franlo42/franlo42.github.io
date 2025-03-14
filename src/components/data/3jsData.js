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
		imgSrc: '../img/practica1.png',
		title: 'Introducción',
		descripcion:
			'Escena básica: 5 objetos organizados en los vertices de un pentágono, animación básica y modelos importados.',
		demoURL: '/3js/practica1/',
		anim: 'fade-right',
	},
	{
		imgSrc: '../img/practica1.png',
		title: 'Animación & GUI',
		descripcion:
			'Escena básica: Añadir al trabajo anterior una interfaz de usuario para interactuar con la escena y animaciones disparadas por acción del usuario. Además posibilidad de mover la camara con el ratón.',
		demoURL: '/3js/practica2/',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '../img/practica1.png',
		title: 'Iluminación & Materiales',
		descripcion:
			'Escena básica: Añadir al trabajo anterior iluminación, sombras, videos y otros diferentes materiales.',
		demoURL: '/3js/practica3/',
		anim: 'fade-left',
	},
	{
		imgSrc: '../img/introCut.png',
		title: 'WarioKart 3D',
		descripcion:
			'Mini web port of the famous saga Mario Kart dedicated to Wario.',
		demoURL: 'https://franlo42.is-a.dev/3js/wariokart3d/',
		anim: 'fade-left',
	}
];
