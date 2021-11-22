import Highway from '@dogstudio/highway';
import {footerParallaxOnScroll} from "../animations/footerParallaxOnScroll";
import {switchEmails} from "../common/switchEmails";

class ContactRenderer extends Highway.Renderer {
	onEnter() {
		switchEmails();
	}
	onEnterCompleted() {
		footerParallaxOnScroll();
	}
}

export default ContactRenderer;