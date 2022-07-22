import '../components/movieCard/movieCardComponent.js';

const showMovies = async (data) => {
	const key = 'd2b1df9d64af7fb2a0342bd9d23e1449';
	try {
		const respuestaGeneros = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);

		//accedemos a los datos
		const generos = await respuestaGeneros.json();
		// const templateMovies = document.createElement('div');
		const templateMovies = document.getElementById('MovieGalery');
		let peliculas = '';
		data.forEach(pelicula => {
			if (pelicula.overview === "") {
				pelicula.overview = "Dont have overview"
			}
			let generoId = pelicula.genre_ids[0];
			let generoName = "";
			generos.genres.forEach(genero => {
				if (genero.id === generoId) {
					generoName += genero.name;
				}
			})

			peliculas +=  /*html*/ `
				<movie-card 
					title="${pelicula.title}" 
					genre="${generoName}" 
					overview="${pelicula.overview}" 
					path="${pelicula.poster_path}" 
					vote="${pelicula.vote_average}"
				>
				</movie-card>
			`
		});
		
		templateMovies.innerHTML = peliculas;
		// templateMovies.classList.add('app');
		// app.appendChild(templateMovies);

		
	} catch (error) {
		console.log(error);
	}
}
export default showMovies;
