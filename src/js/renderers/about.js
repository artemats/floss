import Highway from '@dogstudio/highway';
import {imageScaleOnScroll} from "../animations/imageScaleOnScroll";
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {dynamicGradient} from "../animations/dynamicGradient";
import {mouseFollow} from "../common/mouseFollow";
import {videoMaskMouseMoving} from "../animations/videoMaskMouseMoving";

class AboutRenderer extends Highway.Renderer {
	onEnter() {
		dynamicGradient();
	}
	onEnterCompleted() {
		mouseFollow();
		imageScaleOnScroll();
		footerParallaxOnScroll();
		videoMaskMouseMoving();
	}
}

export default AboutRenderer;