export const scrollToNewCases = () => {

	const cases = document.querySelectorAll('.case');
	const currentPage = !!window.location.search ? parseInt(window.location.search.split('?page=')[1]) : 0;

	if(currentPage > 1) {

		let a = ( ( currentPage - 1 ) * 6 ) + 1;
		if(cases.length >= a) {
			const top = cases[a - 1].getBoundingClientRect().y - 50;
			window.scrollTo({
				top,
				behavior: 'smooth',
			});
		}

	}

}