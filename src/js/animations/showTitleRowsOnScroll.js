import Tween, { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {transition} from "../constants/transitions";

gsap.registerPlugin(ScrollTrigger);

export const showTitleRowsOnScroll = () => {

	const words = document.querySelectorAll('.word');

	for(let i = 0; i < words.length; i++) {

		const wordTl = Tween.timeline({
			scrollTrigger: {
				trigger: words[i],
				scrub: false,
			}
		});

		wordTl.to(words[i],
		{
			y: 0,
			opacity: 1,
			duration: transition.cubeMoving.duration,
			ease: transition.cubeMoving.ease,
		}, 0.1);

	}

}