import Tween from 'gsap';
import {transition} from "../constants/transitions";

export const toggleNav = () => {
	const burger = document.querySelector('.burger');
	const navLi = document.querySelectorAll('.header-nav li');
	if(!!burger) {
		burger.addEventListener('click', () => {
			burger.classList.contains('is-active') ? closeNav() : openNav();
		});
		for (let i = 0; i < navLi.length; i++) {
			navLi[i].addEventListener('click', () => {
				closeNav();
			});
		}
	}
}

export const openNav = () => {
	const nav = document.querySelector('.header-nav');
	document.querySelector('.burger').classList.add('is-active');
	Tween.set(nav, {
		display: 'block',
		onComplete: () => {
			Tween.to(nav, {
				opacity: 1,
				duration: transition.opacity.duration,
				ease: transition.opacity.ease,
			});
		}
	});
}

export const closeNav = () => {
	const nav = document.querySelector('.header-nav');
	document.querySelector('.burger').classList.remove('is-active');
	Tween.to(nav, {
		opacity: 0,
		duration: transition.opacity.duration,
		ease: transition.opacity.ease,
		onComplete: () => {
			Tween.set(nav, {
				display: 'none',
			})
		}
	})
}