export const loadVimeoPlayer = () => {
	const iframe = document.querySelector('#vimeo-player');
	const preUrlPath = `https://player.vimeo.com/video/`;
	const urlPath = `?title=0&byline=0&portrait=0&transparent=1&controls=0&loop=1&responsive=1`;
	let src = !!iframe ? iframe.getAttribute('data-src') : '';
	if(!!src && !!iframe) {

		let videoUrlArray = src.split('/');
		let videoId = videoUrlArray.length ? videoUrlArray[3] : '';

		if(!!videoId) {
			iframe.setAttribute('src', `${preUrlPath}${videoId}${urlPath}`);
			iframe.removeAttribute('data-src');
			document.querySelector('.video-toggle').classList.add('enable-toggle');

			return true;
		}
	}
	return false;
}