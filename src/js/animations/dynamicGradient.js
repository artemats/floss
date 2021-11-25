import Tween, { Power2 } from 'gsap';
import {transition} from "../constants/transitions";

export const dynamicGradient = () => {
	const wraps = document.querySelectorAll('.dynamic-gradient');
	if(!!wraps && window.innerWidth > 991) {
		for (let i = 0; i < wraps.length; i++) {
			wraps[i].addEventListener('mousemove', (event) => {
				const x = event.clientX;
				const y = event.clientY;
				const item1 = wraps[i].querySelector('.dynamic-gradient-item.__1');
				const item2 = wraps[i].querySelector('.dynamic-gradient-item.__2');
				const item3 = wraps[i].querySelector('.dynamic-gradient-item.__3');
				const item4 = wraps[i].querySelector('.dynamic-gradient-item.__4');

				moveGradients(item1, item2, item3, item4, x, y);

			});
		}
	}
}

const moveGradients = (item1, item2, item3, item4, x, y) => {
	Tween.to(item1, {
		x: (x / 2),
		y: (y / 4),
		scale: Math.max(1, (x / 1300)),
		rotate: Math.max(0, ((x - y) / 800)),
		duration: transition.gradientMove.duration,
		ease: transition.gradientMove.ease,
	});
	Tween.to(item2, {
		x: 0 - (x / 2),
		y: 0 - (y / 4),
		scale: Math.max(1.2, Math.min(1, ((x - 100) / x))),
		rotate: 0 - ((x - y) / 50),
		duration: transition.gradientMove.duration,
		ease: transition.gradientMove.ease,
	});
	Tween.to(item3, {
		x: (x / 40),
		y: (0 - x) / 10,
		scaleY: Math.max(1, (x / 1200)),
		scaleX: Math.max(0.7, Math.min(1, (0 - (x - window.innerWidth)) / 100)),
		rotate: 0 - Math.max(0, ((x - y) / 1000)),
		duration: transition.gradientMove.duration,
		ease: transition.gradientMove.ease,
	});
	Tween.to(item4, {
		x: 0 - (x / 8),
		y: 0 - (y / 8),
		scale: Math.max(1.2, Math.min(1, ((x - 100) / x))),
		// rotate: 0 - ( ( x - y ) / 50 ),
		duration: transition.gradientMove.duration,
		ease: transition.gradientMove.ease,
	});
}