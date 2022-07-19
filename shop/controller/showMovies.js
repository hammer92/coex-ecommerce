const showMovies = async (data) => {
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

			peliculas += `
			<div class="pelicula">
            <div class="arr"> <!-- parte donde va la imagen de la pelicula--!>
            <div class="hover"><p>${pelicula.overview}</p>  </div>
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <!-- <p class="title_poster">${pelicula.original_title}</p>--!>
            
            </div>
            <div class="aba"> <!-- parte donde va el genero de la pelicula y el boton--!>
                <div class="info">
					<div>
						${generoName}
					</div>
					<div>
						<star-rating rating="${pelicula.vote_average}"></star-rating>
					</div>
					</div>
					<div>
						<button class ="carrito" onclick="addToCart(${pelicula.id})" id="carrito">Add to card</button>
					</div>
            	</div>
			</div>
				`;
		});
		
		return peliculas;
		
	} catch (error) {
		console.log(error);
	}
}
export default showMovies();
