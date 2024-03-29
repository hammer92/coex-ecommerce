//ARIR CARRITO

const cartContainer = document.querySelector('.cart-container');
const checkoutButton = document.querySelector('.checkout-button-container');

const openCart = () => {
	cartContainer.style.right = `0`;
};

const closeCart = () => {
	cartContainer.style.right = `-30%`;
};

const showCheckoutButton = (arrLength) => {
	if (arrLength > 0) {
		checkoutButton.style.display = 'block';
	} else {
		checkoutButton.style.display = 'none';
	}
};

//URL LISTADO DE PELIS
//https://api.themoviedb.org/4/list/${list_id}?page=1&api_key=dde722cb807472090076a60be85c0010
//https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=d2b1df9d64af7fb2a0342bd9d23e1449&language=es-MX&page=2

//URL PELIS POR ID
//https://api.themoviedb.org/3/movie/${movie_id}?api_key=dde722cb807472090076a60be85c0010&language=en-US

const imageUrl = `https://image.tmdb.org/t/p/w500/`;
const moviesInCart = [];

//cargar los datos del localStorage a moviesInCart para luego renderizar las movies del shoppingCart
window.onload = () => {
	const moviesLocalStorage = localStorage.getItem('shoppingCart') || [];
	const moviesArr = JSON.parse(moviesLocalStorage);
	moviesArr.forEach((movie) => {
		moviesInCart.push(movie);
	});
	renderMovieInCart(moviesInCart);
};

//redirige a LOGIN / MYHISTORY dependiendo de la sesion
const renderCart = () => {
	window.location = '/cart/index.html';
}

//Barra de error visible para el usuario
const errorBar = document.querySelector('.error-bar-container')
const messageContainer = document.getElementById('errorMessage')

const throwError = (message) => {
	messageContainer.innerText = message
	errorBar.style.display = 'block'
	errorBar.style.opacity = '1'
	setTimeout(() => {
	errorBar.style.display = 'none'
	errorBar.style.opacity = '0'
		
	}, 2000);
}

//Obtengo las pelis de la lista numero 1

//funcion para añadir una peli al shopping cart
const addToCart = async (id) => {
	try {
		const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dde722cb807472090076a60be85c0010&language=en-US`)
		const response = await movie.json();
		const indexMovies = moviesInCart.map((movie) => movie.id);
		//comprobamos que la pelicula seleccionada no este repetida en moviesCart
		if (!indexMovies.includes(response.id)) {
			moviesInCart.push(response);
			renderMovieInCart(moviesInCart);
			showCheckoutButton(moviesInCart.length);
			openCart();
			localStorage.setItem(
				'shoppingCart',
				JSON.stringify(moviesInCart)
			);
		} else {
			throwError('Peli repetida')
			return;
		}
	} catch (error) {
		console.error(error);
	}
};



const cartList = document.querySelector('.cart-list');

//renderizar moviesInCart
const renderMovieInCart = async (moviesArray) => {
	try {
		const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=dde722cb807472090076a60be85c0010&language=en-US`)
		const response = await genres.json()
		let template = ``;
		moviesArray.map((movie) => {
			let genreMovie = '';
			response.genres.forEach((genero) => {
				if (genero.id === movie.genres[0].id) {
					genreMovie = genero.name;
				}
			});
			let url = imageUrl + movie.poster_path;
			const cart = `
				<div class="cart-item">
					<div class="cart-item-img">
						<img 
						src="${url}" alt="movie-img">
					<div class="cart-info-container">
						<h2>${movie.title}</h2>
						<span>${genreMovie}</span>
						<star-rating rating="${movie.vote_average}"></star-rating>
					</div>
				</div>
				<div class="delete-button" onclick="deleteMovieInCart(${movie.id})">X</div>
			</div>
			`;
			template += cart;
		});
		cartList.innerHTML = template;
	} catch (error) {
			console.log(error)
	}
};

//funcion de eliminar elemento de shopping cart
const deleteMovieInCart = (id) => {
	let indexMovie = moviesInCart.findIndex((movie) => movie.id === id);
	moviesInCart.splice(indexMovie, 1);
	showCheckoutButton(moviesInCart.length);
	localStorage.setItem('shoppingCart', JSON.stringify(moviesInCart));
	renderMovieInCart(moviesInCart);
};
