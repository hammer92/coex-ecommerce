import 'normalize.css'
import '../cart/style-cart.css'
import '../style.css'
import './style.css'
import '../cart/component/starsComponent.js';

import { addMovieList, getData } from '../cart/lib/conection.js';

const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);
const filtros = document.getElementById('filtros');
const app = document.querySelector('#app');
const key = 'd2b1df9d64af7fb2a0342bd9d23e1449'
const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=d2b1df9d64af7fb2a0342bd9d23e1449";

document.getElementById('checkButton').addEventListener('click', () => {
	let data = getData();
	addMovieList(data);
	localStorage.setItem('shoppingCart', []);
	window.location = '../cart/index.html'
})
//paginacion
const headerNav = document.getElementById('header');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

// Verifica si hay un usuario logueado y en dicho caso se renderiza su correo electrónico

const loadPagination = () => {

	let templatePagination = `
	<div class="page" id="prev">Previous Page</div>
	<div class="current" id="current">1</div>
	<div class="page" id="next">Next Page</div>`;

	pagination.innerHTML = templatePagination;

	const prev = document.getElementById('prev');
	const current = document.getElementById('current')
	const next = document.getElementById('next');
	//Paginacion
	prev.addEventListener('click', () => {
		if (prevPage > 0) {
			pageCall(prevPage);
		}
	})

	next.addEventListener('click', () => {
		if (nextPage <= totalPages) {
			pageCall(nextPage);
		}
	})

}

const loadNav = () => {
	try {
		let templateNav = '';

		templateNav = `
		<div class="izHeader">
		<a class="logo" href="">
		  <img src="../assets/icons/logo_coexbuster.svg" width="80px" alt="">
		</a>
		
		<div class="categories">
		  <nav class="nav">
			<ul>
			  <button id="categorySelected" value="All">
				<li>All</li>
			  </button>
  
			  <button id="categorySelected" value="28">
				<li>Action</li>
			  </button>
  
			  <button id="categorySelected" value="12">
				<li>Adventure</li>
			  </button>
  
			  <button id="categorySelected" value="16">
				<li>Animation</li>
			  </button>
  
			  <button id="categorySelected" value="35">
				<li>Comedy</li>
			  </button>
  
			  <li>
				<select class="list-categories" name="" id="categorySelected">
  
				  <option id="categorySelected">- Others categories -</option>
  
				  <option id="categorySelected" value="80">Crime</option>
  
				  <option id="categorySelected" value="99">Documentary</option>
  
				  <option id="categorySelected" value="18">Drama</option>
  
				  <option id="categorySelected" value="10751">Family</option>
  
				  <option id="categorySelected" value="14">Fantasy</option>
  
				  <option id="categorySelected" value="36">History</option>
  
				  <option id="categorySelected" value="27">Horror</option>
  
				  <option id="categorySelected" value="10402">Music</option>
  
				  <option id="categorySelected" value="9648">Mistery</option>
  
				  <option id="categorySelected" value="10749">Romance</option>
  
				  <option id="categorySelected" value="878">Fiction</option>
  
				  <option id="categorySelected" value="10770">TV Movie</option>
  
				  <option id="categorySelected" value="53">Thriller</option>
  
				  <option id="categorySelected" value="10752">War</option>
  
				  <option id="categorySelected" value="37">Western</option>
				</select>
			  </li>
			</ul>
		  </nav>
		</div>
	  </div>
  
	  <div class="derHeader">
      <div class="btn-sesion" id="btn-nosesion-nav">
        <button id="login-btn" class="btn-login-nav" >Log in</button>
        <button id="singup-btn" class="btn-singup-nav">Sing up</button>
      </div>
      <div class="btn-sesion-login btn-hidden" id="btn-sesion-nav">
        <div class="btn-drop-menu">
          <label class="user-correo">admin@admin.com</label>
          <a href="#" class="sigin__arrow" as="button" ><img src="../assets/icons/arrow_down.svg" alt="" width="18px" heigth="27"></a>
        </div>
        <div class="drop-menu">
          <a class="historial-btn" href="#">History orders</a><br><hr class="hr-dropdown">
          <button id="logout" class="btn-logout">Sing out</button>
        </div>
      </div>
      <a href="#" as="button" onclick="openCart()" ><img src="../assets/icons/icon_shopping_cart_notification.svg" alt="" width="30px" heigth="27"></a>
    </div>
	  
		`;
		headerNav.innerHTML = templateNav;

	} catch (error) {
		console.log(error);
	}
}
loadNav();

const cargarFiltros = async () => {
	try {
		let filt = '';

		filt = `	
	
		<input type="text" class="search" id="search" name="search" placeholder="Buscar">
	`;
		filtros.innerHTML = filt;
	} catch (error) {
		console.log(error);
	}
}

let getByCategory = "";
let categorySelected = document.querySelectorAll("#categorySelected");

categorySelected.forEach(element => {
	element.addEventListener("click", async () => {

		categorySelected.forEach(minCategory => {
			if (minCategory.getAttribute('value') != element.getAttribute('value')) {
				minCategory.classList.remove("seleccionado");
			}
		})

		element.classList.add("seleccionado");
		getByCategory = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${element.value}`;
		console.log("Seleccionaste: " + element.value);
		cargarPeliculas(getByCategory);
	});
});


const cargarPeliculas = async (category) => {
	lastUrl = category;
	let allMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;

	if (category == "") {
		console.log("No hay categoría seleccionada");
	} else {
		allMovies = category;
	}

	console.log(`Has seleccionado categorías en URL: ${allMovies}`);

	try {
		getMovies(allMovies);
	} catch (error) {
		console.log(error);
	}
}


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
			app.innerHTML = `<h1 class="no-results">No Results Found</h1>`
		}
	})
}

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

		app.innerHTML = peliculas;

	} catch (error) {
		console.log(error);
	}
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


function pageCall(page) {
	let urlSplit = lastUrl.split('?');
	let queryParams = urlSplit[1].split('&');
	let key = queryParams[queryParams.length - 1].split('=');
	if (key[0] != 'page') {
		let url = lastUrl + '&page=' + page
		getMovies(url);
	} else {
		key[1] = page.toString();
		let a = key.join('=');
		queryParams[queryParams.length - 1] = a;
		let b = queryParams.join('&');
		let url = urlSplit[0] + '?' + b
		getMovies(url);
	}
	
}
loadPagination();
cargarFiltros();
cargarPeliculas(getByCategory);
//--------------------------------------------------
// Configuracion del navbar para esta de la sesion

document.addEventListener("DOMContentLoaded", () => {

	const nologinstate = document.querySelector("#btn-nosesion-nav");
	const loginstate = document.querySelector("#btn-sesion-nav");

	if (localStorage.getItem("iniciosesion")) {
		nologinstate.classList.add("btn-hidden");
		loginstate.classList.remove("btn-hidden");
	} else {
		nologinstate.classList.remove("btn-hidden");
		loginstate.classList.add("btn-hidden");
	}

})

//funcion del boton log out 
const buttonlogout = document.getElementById('logout');
buttonlogout.addEventListener('click', () => {
	let estado = false;
	localStorage.setItem('iniciosesion', estado);
});


//funcion btn log in
const buttonlogin = document.getElementById('login-btn');
buttonlogin.addEventListener('click', () => {
	window.location = '../cart/index.html';
});
