import Tween, { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const parallaxOnScroll = () => {
	const elements = document.querySelectorAll('.parallax-on-scroll');
	for(let i = 0; i < elements.length; i++) {

		const tl = Tween.timeline({
			scrollTrigger: {
				trigger: elements[i],
				scrub: true,
				start: "30% 70%",
				// end: "bottom top",
			},
		});

		tl.to(elements[i], {
			yPercent: 0 - parseInt(elements[i].dataset.speed),
			ease: 'none',
		});
	}
}