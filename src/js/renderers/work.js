import Highway from '@dogstudio/highway';
import {imageScaleOnScroll} from "../animations/imageScaleOnScroll";
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {tabsMobileCarousel} from "../common/tabsMobileCarousel";
import {scrollToNewCases} from "../common/scrollToNewCases";

class WorkRenderer extends Highway.Renderer {
	onEnter() {

	}
	onEnterCompleted() {
		imageScaleOnScroll();
		footerParallaxOnScroll();
		tabsMobileCarousel();
		scrollToNewCases();
	}
}

export default WorkRenderer;