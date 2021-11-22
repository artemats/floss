export const switchEmails = () => {
	const tabs = document.querySelectorAll('[data-tab-email]');
	const form = document.querySelector('#contact-form');

	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', (tab) => {
			let { tabEmail, location } = tab.target.dataset;
			!!tabEmail ? form.setAttribute('data-email', tabEmail) : null;
			console.log(transformData(location));
			clearButtons(tabs);
			tab.target.classList.add('active');
		});
	}
}

const clearButtons = (tabs) => {
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove('active');
	}
}

const transformData = (data) => {
	return data.toLowerCase().replace(/\s/g, '');
}