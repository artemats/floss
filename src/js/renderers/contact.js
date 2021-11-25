import Highway from '@dogstudio/highway';
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {switchEmails} from "../common/switchEmails";
import {inputFocus} from "../common/inputFocus";

class ContactRenderer extends Highway.Renderer {
	onEnter() {
		switchEmails();
		inputFocus();
	}
	onEnterCompleted() {
		footerParallaxOnScroll();
	}
}

export default ContactRenderer;