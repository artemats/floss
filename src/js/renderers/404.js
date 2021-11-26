import Highway from '@dogstudio/highway';
import {dynamicGradient} from "../animations/dynamicGradient";

class PageNotFoundRenderer extends Highway.Renderer {
	onEnter() {
		dynamicGradient();
	}
}

export default PageNotFoundRenderer;