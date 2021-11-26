export const loadVimeoPlayer = () => {
	const iframe = document.querySelector('#vimeo-player');
	const urlPath = `?title=0&byline=0&portrait=0&transparent=1&controls=0&loop=1&responsive=1`;
	let src = iframe.getAttribute('src');
	if(!!src) {
		iframe.setAttribute('src', `${src}${urlPath}`);
		document.querySelector('.video-toggle').classList.add('enable-toggle');
		return true;
	}
	return false;
}