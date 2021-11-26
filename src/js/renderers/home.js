import Highway from '@dogstudio/highway';
import {cubeInterval, textCubeMoving} from "../animations/textCube";
import {cubeRotating} from "../constants/constants";
import {dynamicGradient} from "../animations/dynamicGradient";
import {parallaxOnScroll} from "../animations/parallaxOnScroll";
import {stickyOnScroll} from "../animations/stickyOnScroll";
import {imageScaleOnScroll} from "../animations/imageScaleOnScroll";
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {mouseFollow} from "../common/mouseFollow";
import {loadImages} from "../common/loadImages";

class HomeRenderer extends Highway.Renderer {
	onEnter() {
		cubeRotating.enable = false;
		clearInterval(cubeInterval);
		dynamicGradient();
	}
	onEnterCompleted() {
		cubeRotating.enable = true;
		textCubeMoving();
		mouseFollow();
		parallaxOnScroll();
		stickyOnScroll();
		imageScaleOnScroll();
		footerParallaxOnScroll();
		loadImages();
	}
}

export default HomeRenderer;