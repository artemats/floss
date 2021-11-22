import Splitting from 'splitting';

export const splittingText = () => {
	const splitText = document.querySelectorAll('.split-text');
	for(let i = 0; i < splitText.length; i++) {
		Splitting({
			target: splitText[i],
			by: 'lines'
		});
	}
};