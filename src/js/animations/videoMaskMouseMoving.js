export const videoMaskMouseMoving = () => {
	const box = document.querySelector('.video');
	const mask = document.querySelector('.video-mask');
	let maskSize = 'transparent 280px, var(--color-black) 280px';
	if(!!mask) {
		box.addEventListener('mousemove', function (e) {
			updateMask(box, mask, e, maskSize);
		});
	}
}

const updateMask = (box, mask, e, maskSize) => {
	mask.style.backgroundImage = `radial-gradient(circle at 
	${e.offsetX / box.clientWidth * 100}% 
	${e.offsetY / box.clientHeight * 100}%, ${maskSize})`;
}