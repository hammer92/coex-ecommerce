import showMovies from "./showMovies.js";


async function getMovies(url) {
	let lastUrl = url;
	let peticion = await fetch(url);
	let data = await peticion.json();
	if (data.results.length !== 0) {
		showMovies(data.results);
		let currentPage = data.page;
		let totalPages = data.total_pages;
		return {
			currentPage : currentPage,
			totalPages : totalPages
		}
	} else {
		return `<h1 class="no-results">No Results Found</h1>`
	}

}

export default getMovies;