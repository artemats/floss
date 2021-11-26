export const loadImages = () => {
	const images = document.querySelectorAll('img[data-src]');
	for(let i = 0; i < images.length; i++) {
		let src = images[i].getAttribute('data-src');
		images[i].setAttribute('src', src);
		images[i].removeAttribute('data-src');
	}
}