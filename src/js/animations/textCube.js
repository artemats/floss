import gsap from 'gsap';
import {transition} from "../constants/transitions";
import {cubeRotating} from "../constants/constants";

export let cubeInterval;

export const textCubeMoving = () => {

	const wrap = document.querySelector('.text-switcher');
	const wrapItems = wrap.querySelectorAll('.text-switcher-item');

	let counter = 1;
	let step = 1;
	let deg = -90;

	wrapItems[0].setAttribute('data-current', true);
	cubeInterval = setInterval(function(){

		if(cubeRotating.enable) {
			wrap.classList.add('with-transition');
			rotate(wrap, deg, wrapItems[step]);
			counter++;
			step++;
			deg -= 90;

			if(counter % 4 === 0) {
				step = 0;
			}
		} else {
			clearInterval(cubeInterval);
		}
	}, 3000);

}

const rotate = (part, deg, word) => {
	part.classList.add('start-rotate');
	const words = document.querySelectorAll('.text-switcher-item');
	for(let i = 0; i < words.length; i++) {
		words[i].removeAttribute('data-current');
	}

	gsap.to(part, {
		rotateX: deg,
		duration: transition.cubeMoving.duration,
		ease: transition.cubeMoving.ease,
		onComplete: () => {
			part.classList.remove('start-rotate');
		}
	});
	!!word
		? word.setAttribute('data-current', true)
		: null;
}