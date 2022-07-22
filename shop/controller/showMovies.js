import '../components/card-movie.js';

const showMovies = async (data) => {
	const key = 'd2b1df9d64af7fb2a0342bd9d23e1449';
	try {
		const respuestaGeneros = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);

		//accedemos a los datos
		const generos = await respuestaGeneros.json();

		let peliculas = '';
		data.forEach(pelicula => {
			if (pelicula.overview === "") {
				pelicula.overview = "Dont have overview"
			}
			let generoId = pelicula.genre_ids[0];
			let generoName = "";
			generos.genres.forEach(genero => {
				if (genero.id === generoId) {
					generoName = genero.name;
				}
			})

			peliculas +=  /*html*/ `
				<card-movie 
					overview="${pelicula.overview}" 
					imgPath="${pelicula.poster_path}" 
					gender="${generoName}" 
					vote_average="${pelicula.vote_average}"
				>
				</card-movie>
			`
		});
		
		return peliculas;
		
	} catch (error) {
		console.log(error);
	}
}
export default showMovies;
