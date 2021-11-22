export const inputFocus = () => {

	const inputs = document.querySelectorAll('.input');

	for(let i = 0; i < inputs.length; i++) {

		inputs[i].onfocus = () => {
			inputs[i].classList.add('is-focus');
		}

		inputs[i].onblur = () => {
			detectEmpty(inputs[i]);
		}

	}

}

const detectEmpty = (input) => {
	if(input.value.length) {
		input.classList.add('is-focus');
	} else {
		input.classList.remove('is-focus');
	}
}