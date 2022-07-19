import showMovies from "./showMovies.js";

function getMovies(url) {
	lastUrl = url;
	fetch(url).then(res => res.json()).then(data => {
		console.log(data.results)
		if (data.results.length !== 0) {
			showMovies(data.results);
			currentPage = data.page;
			nextPage = currentPage + 1;
			prevPage = currentPage - 1;
			totalPages = data.total_pages;

			current.innerText = currentPage;

			if (currentPage <= 1) {
				prev.classList.add('disabled');
				next.classList.remove('disabled')
			} else if (currentPage >= totalPages) {
				prev.classList.remove('disabled');
				next.classList.add('disabled')
			} else {
				prev.classList.remove('disabled');
				next.classList.remove('disabled')
			}
		} else {
			return `<h1 class="no-results">No Results Found</h1>`
		}
	})
}

export default getMovies();