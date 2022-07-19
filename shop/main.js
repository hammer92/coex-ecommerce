import 'normalize.css';
import '../cart/style-cart.css';
import '../style.css';
import './style.css';
import '../cart/component/starsComponent.js';
import templatelogin from '../cart/views/login.js';

import { addMovieList, getData } from '../cart/lib/conection.js';

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);
const filtros = document.getElementById('filtros');
const app = document.querySelector('#app');
const key = 'd2b1df9d64af7fb2a0342bd9d23e1449';
const searchURL =
	'https://api.themoviedb.org/3/search/movie?api_key=d2b1df9d64af7fb2a0342bd9d23e1449';

const historialBtn = document.getElementById('historial-btn');

document.getElementById('checkButton').addEventListener('click', () => {
	let data = getData();
	addMovieList(data);
	localStorage.setItem('shoppingCart', []);
	localStorage.setItem('statusback', 'cart');
	window.location = '../cart/index.html';
});

document.getElementById('history-shop').addEventListener('click', () => {
	localStorage.setItem('statusback', 'cart');
});
//paginacion
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

// Verifica si hay un usuario logueado y en dicho caso se renderiza su correo electrónico

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
};

let getByCategory = '';
let categorySelected = document.querySelectorAll('#categorySelected');

categorySelected.forEach((element) => {
	element.addEventListener('click', async () => {
		categorySelected.forEach((minCategory) => {
			if (
				minCategory.getAttribute('value') !=
				element.getAttribute('value')
			) {
				minCategory.classList.remove('seleccionado');
			}
		});

		element.classList.add('seleccionado');
		getByCategory = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${element.value}`;
		console.log('Seleccionaste: ' + element.value);
		cargarPeliculas(getByCategory);
	});
});

const cargarPeliculas = async (category) => {
	lastUrl = category;
	let allMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;

	if (category == '') {
		console.log('No hay categoría seleccionada');
	} else {
		allMovies = category;
	}

	console.log(`Has seleccionado categorías en URL: ${allMovies}`);

	try {
		getMovies(allMovies);
	} catch (error) {
		console.log(error);
	}
};

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

//Paginacion
prev.addEventListener('click', () => {
	if (prevPage > 0) {
		pageCall(prevPage);
	}
});

next.addEventListener('click', () => {
	if (nextPage <= totalPages) {
		pageCall(nextPage);
	}
});

function pageCall(page) {
	let urlSplit = lastUrl.split('?');
	let queryParams = urlSplit[1].split('&');
	let key = queryParams[queryParams.length - 1].split('=');
	if (key[0] != 'page') {
		let url = lastUrl + '&page=' + page;
		getMovies(url);
	} else {
		key[1] = page.toString();
		let a = key.join('=');
		queryParams[queryParams.length - 1] = a;
		let b = queryParams.join('&');
		let url = urlSplit[0] + '?' + b;
		getMovies(url);
	}
}

cargarFiltros();
cargarPeliculas(getByCategory);

//--------------------------------------------------
// Configuracion del navbar para esta de la sesion

window.onload = () => {
	const nologinstate = document.querySelector('#btn-nosesion-nav');
	const loginstate = document.querySelector('#btn-sesion-nav');
	let estatesesion = localStorage.getItem('iniciosesion');

	if (estatesesion === 'false') {
		nologinstate.classList.remove('btn-hidden');
		loginstate.classList.add('btn-hidden');
	} else {
		nologinstate.classList.add('btn-hidden');
		loginstate.classList.remove('btn-hidden');
	}
};

//funcion del boton log out
const buttonlogout = document.getElementById('logout');
buttonlogout.addEventListener('click', () => {
	console.log('click en log out');
	let estado = false;
	localStorage.setItem('iniciosesion', estado);
	window.location.reload();
});

//funcion btn log in
const buttonlogin = document.getElementById('login-btn');
buttonlogin.addEventListener('click', () => {
	window.location = '../cart/index.html';
});
