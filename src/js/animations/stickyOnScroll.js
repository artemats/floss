import Tween, { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const stickyOnScroll = () => {
	const stickyElements = document.querySelectorAll('.sticky-on-scroll');
	for(let j = 0; j < stickyElements.length; j++) {
		let tl = Tween.timeline({
			scrollTrigger: {
				trigger: stickyElements[j],
				scrub: true,
				start: "50% 50%",
				// end: "bottom top",
			},
		});

		tl.to(stickyElements[j], {
			yPercent: 100,
			ease: 'none'
		});
	}
}