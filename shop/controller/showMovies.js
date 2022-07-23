import '../components/movieCard/movieCardComponent.js';
import * as shoppingCart from '../../cart/component/cart-modal/main.js'

shoppingCart.render()
shoppingCart.initialize()

const showMovies = async (data, categoryId='') => {
	const key = 'd2b1df9d64af7fb2a0342bd9d23e1449';
	try {
		const respuestaGeneros = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`);
		//accedemos a los datos
		const generos = await respuestaGeneros.json();
		const templateMovies = document.getElementById('MovieGalery');
		const tituloGeneroContainer = document.getElementById('genre-movies-shop-container')
		let tituloGenero = ``
		let peliculas = ``
		data.forEach(pelicula => {
			if (pelicula.overview === "") {
				pelicula.overview = "Dont have overview"
			}
			let generoId = pelicula.genre_ids[0];
			let generoName = "";
			let generoTitle = "";
			generos.genres.forEach(genero => {
				if (genero.id === generoId) {
					generoName += genero.name;
				}
				if(genero.id === +categoryId){
					generoTitle = genero.name
				}
			})
			tituloGenero = `<h2 class="genre-movies-shop">${generoTitle}</h2>`
			peliculas +=  /*html*/ `
				<movie-card 
					id="${pelicula.id}"
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
		tituloGeneroContainer.innerHTML = tituloGenero

		const ELEMENTS = document.querySelectorAll('button.s-go-to-detail');
		ELEMENTS.forEach((element) => {
			element.addEventListener('click', () => {
				window.location = `/product/index.html?movie=${element.getAttribute('id')}`
			});
		});
		const BUTTONS_ADD_TO_CART = document.querySelectorAll('div.s-table__btn--add')
		BUTTONS_ADD_TO_CART.forEach(button => {
			
			button.addEventListener('click', ()=> {
				const obj = data.filter(movie => movie.id === +button.id)
				const genre = generos.genres.filter(genre => genre.id === obj[0].genre_ids[0])
				const movie = {
					id: obj[0].id,
					name: obj[0].title,
					raiting: obj[0].vote_average,
					genre: genre[0].name,
					img: obj[0].poster_path
				}
				console.log(movie)
				shoppingCart.add(movie)
			})
		})
	} catch (error) {
		console.error(error);
	}
}
export default showMovies;
