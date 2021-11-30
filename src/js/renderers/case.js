import Highway from '@dogstudio/highway';
import {imageScaleOnScroll} from "../animations/imageScaleOnScroll";
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {mouseFollow} from "../common/mouseFollow";
import {togglePlayingVideo} from "../common/togglePlayingVideo";
import {loadVimeoPlayer} from "../common/loadVimeoPlayer";
import {loadImages} from "../common/loadImages";
import {draggableCarousel} from "../animations/draggableCarousel";

class CaseRenderer extends Highway.Renderer {
	onEnter() {
		mouseFollow();
		loadVimeoPlayer() ? togglePlayingVideo() : null;
	}
	onEnterCompleted() {
		imageScaleOnScroll();
		footerParallaxOnScroll();
		loadImages();
		draggableCarousel();
	}
}

export default CaseRenderer;