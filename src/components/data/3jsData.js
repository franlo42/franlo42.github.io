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
			'desc1.',
		demoURL: '/3js/practica1/',
		anim: 'fade-right',
	},
	{
		imgSrc: '../img/practica1.png',
		title: 'Animación & GUI',
		descripcion:
			'desc2.',
		demoURL: '/3js/practica2/',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '../img/practica1.png',
		title: 'Iluminación & Materiales',
		descripcion:
			'dec3.',
		demoURL: '/3js/practica3/',
		anim: 'fade-left',
	}
];
