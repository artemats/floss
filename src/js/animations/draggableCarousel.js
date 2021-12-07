import Splide from '@splidejs/splide';

export const draggableCarousel = () => {

	if(!!document.querySelector('.gallery')) {

		const splide = new Splide('.gallery', {
			type: 'loop',
			drag: 'free',
			perPage: 3,
			pagination: false,
			arrows: false,
			autoWidth: true,
			speed: 5000,
			easing: 'linear',
		});

		splide.mount();

	}

}