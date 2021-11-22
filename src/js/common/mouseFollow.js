import Tween from 'gsap';
import {transition} from "../constants/transitions";

export const mouseFollow = () => {

	const boxes = document.querySelectorAll('.follow-wrap');

	for(let i = 0; i < boxes.length; i++){

		const link = boxes[i].querySelector('.follow-wrap-item');
		// const linkWidth = link.clientWidth;
		// const linkHeight = link.clientHeight;
		const linkWidth = 100;
		const linkHeight = 100;

		boxes[i].addEventListener('mousemove', function (event) {
			if(event.offsetX && event.offsetY) {
				Tween.to(link, {
					duration: transition.mouseMoving.duration,
					translateX: event.offsetX - ( linkWidth / 2 ),
					translateY: event.offsetY - ( linkHeight / 2 ),
					ease: transition.mouseMoving.ease,
				});
			}
		});
	}

};