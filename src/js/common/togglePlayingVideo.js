import Plyr from 'plyr';

export const togglePlayingVideo = () => {
	const videoBoxes = document.querySelectorAll('.video-toggle');

	for(let i = 0; i < videoBoxes.length; i++) {

		const player = new Plyr(`#payer`, {
			controls: [],
		});

		videoBoxes[i].addEventListener('click', (videoBox) => {
			// player.togglePlay();
			videoBoxes[i].classList.toggle('is-playing');
		});
	}
}