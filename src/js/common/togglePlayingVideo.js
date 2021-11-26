import Player from '@vimeo/player';

export const togglePlayingVideo = () => {
	const videoParentWrap = document.querySelector('.video-wrap');
	const videoBox = document.querySelector('.video-toggle');
	const iframe = document.querySelector('#vimeo-player');
	const player = new Player(iframe);

	videoBox.addEventListener('click', () => {
		if(player.origin !== '*') {
			if (videoBox.classList.contains('is-playing')) {
				player.pause();
			} else {
				player.play();
			}
		}
	});

	videoBox.addEventListener('mousemove', () => {
		videoBox.classList.remove('hide-button');
		setTimeout(() => {
			if(videoBox.classList.contains('is-playing')) {
				videoBox.classList.add('hide-button');
			}
		}, 2000);
	});

	player.on('play', () => onPlay(videoBox, videoParentWrap));
	player.on('pause', () => onPause(videoBox, videoParentWrap));
}

const onPlay = (videoBox, videoParentWrap) => {
	videoBox.classList.add('is-playing', 'hide-button');
	videoParentWrap.classList.add('hide-poster');
}

const onPause = (videoBox) => {
	videoBox.classList.remove('is-playing', 'hide-button');
}