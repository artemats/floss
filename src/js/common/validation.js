import Pristine from '../libs/pristine.min';

export const initValidation = () => {

	const subscribeForm = document.querySelector('#subscribe-form');
	const contactForm = document.querySelector('#contact-form');
	/*
	remove after check
	 */
	// const closeElements = document.querySelectorAll('.modal-close');
	// const modal = document.querySelector('#thank');

	if(!!subscribeForm) {

		const subscribeValid = new Pristine(subscribeForm, {
			classTo: 'input-container',
			errorClass: 'has-error',
		});

		subscribeForm.addEventListener('submit', (e) => {
			if(!subscribeValid.validate()) {
				e.preventDefault();
			}
			/*
			remove after check
			 */
			// else {
			// 	e.preventDefault();
			// 	openModalThank();
			// }
		});
	}

	if(!!contactForm) {

		const contactValid = new Pristine(contactForm, {
			classTo: 'input-container',
			errorClass: 'has-error',
		});

		contactForm.addEventListener('submit', (e) => {
			if(!contactValid.validate()) {
				e.preventDefault();
			}
			/*
			remove after check
			 */
			// else {
			// 	e.preventDefault();
			// 	openModalThank();
			// }
		});
	}

}

/*
remove after check
 */
// const openModalThank = () => {
// 	modal.style.display = 'block';
// 	setTimeout(() => { modal.classList.add('is-visible') }, 500);
// }
// const closeModalThank = () => {
// 	modal.classList.remove('is-visible');
// 	setTimeout(() => { modal.style.display = 'none' }, 500);
// }