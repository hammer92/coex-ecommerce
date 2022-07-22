import showMovies from "./showMovies.js";


function getMovies(url) {
	fetch(url).then(res => res.json()).then(data => {
		console.log(data.results)
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
	})
}

export default getMovies;