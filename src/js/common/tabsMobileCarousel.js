import Splide from '@splidejs/splide';

export const tabsMobileCarousel = () => {
	const carousel = document.querySelector('.tabs-carousel');
	const tabs = document.querySelectorAll('.tabs-item');
	const perPage = 2;

	if(window.innerWidth < 768 && !!carousel) {
		const navBtn = document.querySelector('.tabs-nav');
		const splide = new Splide('.tabs-carousel', {
			type: 'slide',
			perPage,
			arrows: false,
			pagination: false,
			rewind: true,
			speed: 1000,
		});
		splide.mount();

		navBtn.addEventListener('click', () => {
			splide.go('>');
		});

		splide.on( 'move', (a, b, c) => {
			a === ( tabs.length - perPage ) ? navBtn.classList.add('is-end') : navBtn.classList.remove('is-end');
		});
	}
}