import Highway from '@dogstudio/highway';
import {imageScaleOnScroll} from "../animations/imageScaleOnScroll";
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {tabsMobileCarousel} from "../common/tabsMobileCarousel";

class WorkRenderer extends Highway.Renderer {
	onEnter() {

	}
	onEnterCompleted() {
		imageScaleOnScroll();
		footerParallaxOnScroll();
		tabsMobileCarousel();
	}
}

export default WorkRenderer;