import getMovies from "./getMovies.js";

const cargarPeliculas = async (category) => {
    const key = 'd2b1df9d64af7fb2a0342bd9d23e1449';
	let lastUrl = category;
	let allMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;

	if (category == '') {
		console.log('No hay categoría seleccionada');
	} else {
        allMovies = category;
		
	}

    try {
        getMovies(allMovies);
        return {
            getMovies: getMovies,
            allMovies: allMovies,
            lastUrl: lastUrl
        }
    } catch (e) {
        console.log(e)
    }
};

export default cargarPeliculas;