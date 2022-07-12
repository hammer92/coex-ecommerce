import '../style.css'
import './style.css'

const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);
const app = document.getElementById('app');
//paginacion
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const key = 'd2b1df9d64af7fb2a0342bd9d23e1449';

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

let getByCategory = "";
let categorySelected = document.querySelectorAll("#categorySelected");
categorySelected.forEach(element => {
	element.addEventListener("click", async () => {
		getByCategory = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${pagina}&with_genres=${element.value}`;
		console.log("Seleccionaste: "+element.value );
		cargarPeliculas(getByCategory);
	});
});


const cargarPeliculas = async (category) => {

	let allMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-MX&page=${pagina}`;
	if (category == "") {
		console.log("No hay categoría seleccionada");
	}else{
		allMovies = category;
	}

	console.log(`Has seleccionado categorías en URL: ${allMovies}`);
	try {
		const respuesta = await fetch(allMovies);

		console.log(respuesta);

		// Respuesta OK
		if (respuesta.status === 200) {
			//accedemos a los datos 
			const datos = await respuesta.json();

			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
				
					<div class="pelicula">
						<span class="circulo">${pelicula.vote_average}</span>	
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">	
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

cargarPeliculas(getByCategory);



