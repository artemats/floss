export const switchEmails = () => {
	const tabs = document.querySelectorAll('[data-tab-email]');
	const form = document.querySelector('#contact-form');
	const mapIframe = document.querySelector('#map-iframe');

	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', (tab) => {
			let { tabEmail, url } = tab.target.dataset;
			let currentSrc = mapIframe.getAttribute('src');
			!!tabEmail ? form.setAttribute('data-email', tabEmail) : null;
			!!url && currentSrc !== url ? mapIframe.setAttribute('src', url) : null;
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