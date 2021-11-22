export const switchOpacityOnHover = () => {

	const elements = document.querySelectorAll('.switch-opacity-on-hover');
	const cases = document.querySelectorAll('.case');

	for(let i = 0; i < cases.length; i++) {
		cases[i].addEventListener('mouseenter', () => {
			hideElements(elements);
			cases[i].classList.remove('switch-opacity-on-hover');
		});
		cases[i].addEventListener('mouseleave', () => {
			cases[i].classList.add('switch-opacity-on-hover');
			showElement(elements);
		});
	}

}

const showElement = (elements) => {
	for(let i = 0; i < elements.length; i++) {
		elements[i].classList.remove('is-hidden');
	}
}

const hideElements = (elements) => {
	for(let i = 0; i < elements.length; i++) {
		elements[i].classList.add('is-hidden');
	}
}