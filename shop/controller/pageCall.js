import cargarPeliculas from "./loadMovie.js";
import getMovies from "./getMovies.js";

async function pageCall(page) {
    let peticion = await cargarPeliculas('all');
    let lastUrl = peticion.lastUrl;
	console.log(lastUrl)
	let urlSplit = lastUrl.split('?');
	let queryParams = urlSplit[1].split('&');
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