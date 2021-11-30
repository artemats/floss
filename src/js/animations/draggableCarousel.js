import Splide from '@splidejs/splide';

export const draggableCarousel = () => {

	const splide = new Splide( '.gallery', {
		type: 'loop',
		drag: 'free',
		perPage: 3,
		pagination: false,
		arrows: false,
		autoWidth: true,
	} );

	splide.mount();

}