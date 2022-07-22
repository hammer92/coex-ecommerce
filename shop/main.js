import 'normalize.css';
import '../style.css';
import './style.css';
import './components/nav-bar.js';
import cargarPeliculas from './controller/loadMovie.js';
import templatelogin from '../cart/views/login.js';

import { addMovieList, getData } from '../cart/lib/conection.js';

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);
const filtros = document.getElementById('filtros');
const app = document.querySelector('#app');
const searchURL =
	'https://api.themoviedb.org/3/search/movie?api_key=d2b1df9d64af7fb2a0342bd9d23e1449';

const historialBtn = document.getElementById('historial-btn');

// document.getElementById('checkButton').addEventListener('click', () => {
// 	let data = getData();
// 	addMovieList(data);
// 	localStorage.setItem('shoppingCart', []);
// 	localStorage.setItem('statusback', 'cart');
// 	window.location = '../cart/index.html';
// });

// document.getElementById('history-shop').addEventListener('click', () => {
// 	localStorage.setItem('statusback', 'cart');
// });
let templateNav = document.createElement('template');
templateNav.innerHTML += /*html*/ `
	<nav-bar></nav-bar>
`
app.appendChild(templateNav.content);
cargarPeliculas('');


// Verifica si hay un usuario logueado y en dicho caso se renderiza su correo electrónico

// const cargarFiltros = async () => {
// 	try {
// 		let filt = '';

// 		filt += `	
	
// 		<input type="text" class="search" id="search" name="search" placeholder="Buscar">
// 	`;
// 		filtros.innerHTML = filt;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };








// filtros.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const searchTerm = search.value;
// 	console.log(searchTerm);

// 	if (searchTerm) {
// 		getMovies(searchURL + '&query=' + searchTerm);
// 	} else {
// 		cargarPeliculas();
// 	}
// });



// cargarFiltros();


// //--------------------------------------------------
// // Configuracion del navbar para esta de la sesion

// window.onload = () => {
// 	const nologinstate = document.querySelector('#btn-nosesion-nav');
// 	const loginstate = document.querySelector('#btn-sesion-nav');
// 	let estatesesion = localStorage.getItem('iniciosesion');

// 	if (estatesesion === 'false') {
// 		nologinstate.classList.remove('btn-hidden');
// 		loginstate.classList.add('btn-hidden');
// 	} else {
// 		nologinstate.classList.add('btn-hidden');
// 		loginstate.classList.remove('btn-hidden');
// 	}
// };

// //funcion del boton log out
// const buttonlogout = document.getElementById('logout');
// buttonlogout.addEventListener('click', () => {
// 	console.log('click en log out');
// 	let estado = false;
// 	localStorage.setItem('iniciosesion', estado);
// 	window.location.reload();
// });

// //funcion btn log in
// const buttonlogin = document.getElementById('login-btn');
// buttonlogin.addEventListener('click', () => {
// 	window.location = '../cart/index.html';
// });
