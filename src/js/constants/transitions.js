import { Power1, Power2, Power3, Power4 } from 'gsap';

export const transition = {
	opacity: {
		duration: 0.5,
		ease: Power4.easeOut
	},
	mouseMoving: {
		duration: 1,
		ease: Power1.easeOut,
	},
	scale: {
		duration: 1,
		ease: Power2.easeOut,
	},
	cubeMoving: {
		duration: 1,
		ease: Power2.easeOut,
	},
	gradientMove: {
		duration: 0.5,
		ease: Power3.easeOut,
	}
};