import Tween, { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {transition} from "../constants/transitions";

gsap.registerPlugin(ScrollTrigger);

export const imageScaleOnScroll = () => {

	const images = document.querySelectorAll('.scale-on-scroll');

	for(let i = 0; i < images.length; i++) {

		let tl = Tween.timeline({
			scrollTrigger: {
				trigger: images[i],
				scrub: false,
			}
		});

		tl.to(images[i], {
			scale: 1,
			duration: transition.scale.duration,
			ease: transition.scale.ease,
		});

	}

}