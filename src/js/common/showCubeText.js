import Tween from 'gsap';
import {transition} from "../constants/transitions";

export const showCubeText = () => {

	const cube = document.querySelector('.text-switcher-overlay');

	Tween.to(cube, {
		y: 0,
		opacity: 1,
		duration: transition.cubeMoving.duration,
		ease: transition.cubeMoving.ease,
	});

}