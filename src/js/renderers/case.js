import Highway from '@dogstudio/highway';
import {imageScaleOnScroll} from "../animations/imageScaleOnScroll";
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {mouseFollow} from "../common/mouseFollow";
import {togglePlayingVideo} from "../common/togglePlayingVideo";

class CaseRenderer extends Highway.Renderer {
	onEnter() {
		mouseFollow();
		togglePlayingVideo();
	}
	onEnterCompleted() {
		imageScaleOnScroll();
		footerParallaxOnScroll();
	}
}

export default CaseRenderer;