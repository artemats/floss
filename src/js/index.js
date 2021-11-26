import Highway from '@dogstudio/highway';
import '../scss/index.scss';
import Fade from "./router-transitions/fade";
import HomeRenderer from "./renderers/home";
import AboutRenderer from "./renderers/about";
import WorkRenderer from "./renderers/work";
import CaseRenderer from "./renderers/case";
import ContactRenderer from "./renderers/contact";
import Scale, {switchHeader} from "./router-transitions/scale";
import {inputFocus} from "./common/inputFocus";
import {mouseFollow} from "./common/mouseFollow";
import {switchOpacityOnHover} from "./animations/switchOpacityOnHover";
import {scrollTo} from "./common/scrollTo";
import {imageScaleOnScroll} from "./animations/imageScaleOnScroll";
import {parallaxOnScroll} from "./animations/parallaxOnScroll";
import {stickyOnScroll} from "./animations/stickyOnScroll";
import {footerParallaxOnScroll} from "./animations/footerParallaxOnScroll";
import {splittingText} from "./common/sliceText";
import {showTitleRowsOnScroll} from "./animations/showTitleRowsOnScroll";
import {showCubeText} from "./common/showCubeText";
import {closeNav, toggleNav} from "./common/toggleNav";
import {initValidation} from "./common/validation";

const H = new Highway.Core({
	renderers: {
		home: HomeRenderer,
		about: AboutRenderer,
		work: WorkRenderer,
		case: CaseRenderer,
		contact: ContactRenderer,
	},
	transitions: {
		default: Fade,
		contextual: {
			scale: Scale,
		}
	}
});

H.on('NAVIGATE_IN', () => {
	splittingText();
	switchOpacityOnHover();
	scrollTo();
	showTitleRowsOnScroll();
	showCubeText();
	initValidation();
});

document.addEventListener('DOMContentLoaded', function(event) {
	splittingText();
	inputFocus();
	switchOpacityOnHover();
	scrollTo();
	mouseFollow();
	stickyOnScroll();
	imageScaleOnScroll();
	parallaxOnScroll();
	footerParallaxOnScroll();
	showTitleRowsOnScroll();
	showCubeText();
	switchHeader(true);
	toggleNav();
	initValidation();
});

window.addEventListener('scroll', () => {
	closeNav();
});

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
isSafari ? document.body.classList.add('is-safari') : null;