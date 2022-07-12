import '../style.css'
import './style.css'


const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);
const filtros = document.getElementById('filtros');
const app = document.querySelector('#app');

//paginacion
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const key = 'd2b1df9d64af7fb2a0342bd9d23e1449'
const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=d2b1df9d64af7fb2a0342bd9d23e1449";

//Paginacion
btnSiguiente.addEventListener('click', () => {
	if (pagina < 1000) {
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if (pagina > 1) {
		pagina -= 1;
		cargarPeliculas();
	}
});

const cargarFiltros = async () => {
	try {
		let filt = '';

		filt += `	
	
		<input type="text" class="search" id="search" name="search" placeholder="Buscar">
	`;
		filtros.innerHTML = filt;
	} catch (error) {
		console.log(error);
	}
}

const cargarPeliculas = async () => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-MX&page=${pagina}`);
		const respuestaGeneros = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);

		console.log(respuesta);

		// Respuesta OK
		if (respuesta.status === 200 && respuestaGeneros.status === 200) {
			//accedemos a los datos
			const datos = await respuesta.json();
      		const generos = await respuestaGeneros.json();

			let peliculas = '';
			datos.results.forEach(pelicula => {
        if(pelicula.overview === ""){
          	pelicula.overview = "Dont have overview"
        }
        let generoId = pelicula.genre_ids[0];
        let generoName = "";
        generos.genres.forEach(genero =>{
          	if(genero.id === generoId){
            	generoName = genero.name;
          	}
        })

		peliculas += `
			<div class="pelicula">
            <div class="arr">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <!-- <p class="title_poster">${pelicula.original_title}</p>--!>
            </div>
            <div class="aba">
                <div class="info">
					<div>
						${generoName}
					</div>
					<div>
						<span class="circulo">${pelicula.vote_average}</span>
					</div>
					</div>
					<div>
						<button class ="carrito" id="carrito">Add to card</button>
					</div>
            	</div>
			</div>
				`;
			});

			app.innerHTML = peliculas;

		} else if (respuesta.status === 401) {
			console.log('key incorrecta');
		} else if (respuesta.status === 404) {
			console.log('ERROR 404: Movie doesnt exist in our records');
		} else {
			console.log('Error');
		}

	} catch (error) {
		console.log(error);
	}

}

function getMovies(url) {

	fetch(url).then(res => res.json()).then(data => {
		console.log(data.results)
		if (data.results.length !== 0) {
			showMovies(data.results);
		}
	})
}

function showMovies(data) {

	let peliculas = '';
	data.forEach(pelicula => {
		peliculas += `
				
					<div class="pelicula">
					<span class="circulo">${pelicula.vote_average}</span>	
					<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">	
					</div>
				`;
	});

	app.innerHTML = peliculas;
}

filtros.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;
	console.log(searchTerm);
	
	if (searchTerm) {
		getMovies(searchURL + '&query=' + searchTerm);
	} else {
		cargarPeliculas();
	}

});

cargarFiltros();
cargarPeliculas();