import getMovies from "./getMovies.js";

async function pageCall(page) {
	const keyData = 'd2b1df9d64af7fb2a0342bd9d23e1449';
	let lastUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${keyData}`;
	let urlSplit = lastUrl.split('?');
	let queryParams = urlSplit[0].split('&');
	let key = queryParams[queryParams.length - 1].split('=');
	if (key[0] != 'page') {
		let url = lastUrl + '&page=' + page;
		getMovies(url);
	} else {
		key[1] = page.toString();
		let a = key.join('=');
		queryParams[queryParams.length - 1] = a;
		let b = queryParams.join('&');
		let url = urlSplit[0] + '?' + b;
		getMovies(url);
	}
}

export default pageCall;