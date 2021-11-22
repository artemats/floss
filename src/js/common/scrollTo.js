export const scrollTo = () => {
	const links = document.querySelectorAll('.scroll-to');

	for(let i = 0; i < links.length; i++) {

		links[i].addEventListener('click', () => {

			let target = links[i].getAttribute('data-scroll');
			let top = document.querySelector(target).offsetTop;

			window.scrollTo({
				top,
				behavior: 'smooth',
			});

		});

	}
}