import Tween, { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {transition} from "../constants/transitions";

export const footerParallaxOnScroll = () => {
	const footer = document.querySelector('.footer');

	Tween.set(footer, {
		yPercent: -50
	});

	const uncover = Tween.timeline({
		paused:true
	});

	uncover.to(footer, {
		yPercent: 0,
		ease: transition.mouseMoving.ease,
	});

	ScrollTrigger.create({
		trigger: '[data-router-wrapper]',
		start: 'bottom bottom',
		end: '+=75%',
		animation: uncover,
		scrub: true,
	})

}