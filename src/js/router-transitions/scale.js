import Highway from '@dogstudio/highway';
import Tween, { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {transition} from "../constants/transitions";

gsap.registerPlugin(ScrollToPlugin);

class Scale extends Highway.Transition {
	out({ from, trigger, done }) {

		trigger.classList.remove('hide-on-scale');
		switchHeader(false);
		hideContent();

		const { x } = trigger.getBoundingClientRect();

		Tween.to(window, {
			duration: transition.scale.duration,
			scrollTo: 0,
			ease: transition.scale.ease,
		});

		Tween.set(trigger.querySelector('img'), {
			scale: 1,
		});

		Tween.to(trigger, {
			width: window.innerWidth,
			height: window.innerHeight,
			top: -trigger.offsetTop,
			left: -x,
			zIndex: 9,
			paddingTop: 282,
			borderRadius: 0,
			duration: transition.scale.duration,
			ease: transition.scale.ease,
			onComplete: () => {
				done();
				Tween.to(trigger, {
					paddingTop: 362,
					duration: transition.scale.duration,
					ease: transition.scale.ease,
				});
				switchHeader(true);
			},
		});

	}
	in({ from, to, done }) {

		preHide();
		showContent();

		Tween.fromTo(to,
			{
				opacity: 0,
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
			},
			{
				opacity: 1,
				duration: transition.scale.duration,
				ease: transition.scale.ease,
				onComplete: () => {
					from.remove();
					showBanner();
					done();

					Tween.to(to, {
						position: 'relative',
					});
				},
			});
	}
}

export default Scale;

const hideContent = () => {
	const elements = document.querySelectorAll('.hide-on-scale');
	for(let i = 0; i < elements.length; i++) {
		// Tween.set(elements[i],{
		// 	opacity: 0,
		// 	duration: 0,
		// });
		elements[i].style.opacity = '0';
	}
}

const preHide = () => {
	const elements = document.querySelectorAll('.show-on-scale');
	const banner = document.querySelector('.pre-hide-on-scale');
	for(let i = 0; i < elements.length; i++) {
		Tween.set(elements[i], {
			y: -100,
		});
	}
	Tween.set(banner, {
		opacity: 0,
	});
}

const showContent = () => {
	const elements = document.querySelectorAll('.show-on-scale');
	for(let i = 0; i < elements.length; i++) {
		Tween.to(elements[i], {
			opacity: 1,
			y: 0,
			duration: transition.scale.duration,
			ease: transition.scale.ease,
		});
	}
}

const switchHeader = (status) => {
	const header = document.querySelector('.header');
	Tween.to(header, {
		top: status ? 0 : -180,
		duration: transition.scale.duration,
		ease: transition.scale.ease,
	});
}

const showBanner = () => {
	const banner = document.querySelector('.pre-hide-on-scale');
	Tween.set(banner, {
		opacity: 1,
	});
}