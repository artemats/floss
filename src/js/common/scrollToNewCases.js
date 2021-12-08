export const scrollToNewCases = () => {

	const cases = document.querySelectorAll('.case');
	const currentPage = !!window.location.search ? parseInt(window.location.search.split('?page=')[1]) : 0;

	if(currentPage > 1) {

		const top = cases[cases.length - 6].getBoundingClientRect().y - 50;

		window.scrollTo({
			top,
			behavior: 'smooth',
		});

	}

}