import Highway from '@dogstudio/highway';
import {imageScaleOnScroll} from "../animations/imageScaleOnScroll";
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";

class WorkRenderer extends Highway.Renderer {
	onEnter() {
		console.log('enter to work');
	}
	onEnterCompleted() {
		imageScaleOnScroll();
		footerParallaxOnScroll();
	}
}

export default WorkRenderer;