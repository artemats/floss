import Plyr from 'plyr';

export const togglePlayingVideo = () => {
	const videoBoxes = document.querySelectorAll('.video-toggle');

	for(let i = 0; i < videoBoxes.length; i++) {

		const videoId = videoBoxes[i].querySelector('video').getAttribute('id');
		const player = new Plyr(`#${videoId}`, {
			controls: [],
		});

		videoBoxes[i].addEventListener('click', (videoBox) => {
			// player.togglePlay();
			videoBoxes[i].classList.toggle('is-playing');
		});
	}
}