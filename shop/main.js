import 'normalize.css';
import '../style.css';
import './style.css';
import './components/nav-bar.js';
import './components/pagination.js';
import './components/filtro.js';
import cargarPeliculas from './controller/loadMovie.js';
import templatelogin from '../cart/views/login.js';

import { addMovieList, getData } from '../cart/lib/conection.js';

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);
const app = document.querySelector('#app');
const API_KEY = 'd2b1df9d64af7fb2a0342bd9d23e1449';

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
templateNav.innerHTML = `
<div class="s-container">
	<header class="s-header">
		<nav-bar></nav-bar>
	</header>
	<main class="s-content">
		<div class="s-filter">
			<filter-bar></filter-bar>
		</div>
		<section class="s-grid" id="MovieGalery"></section>
	</main>
	<footer class="s-footer">
		<pagination-bar></pagination-bar>
	</footer>
</div>
`;
const sParams = new URLSearchParams(window.location.search);
// const active =
// 	parseInt(sParams.get('category')) === id
// 		? 'active-category'
// 		: '';
app.appendChild(templateNav.content);
if (sParams.get('category')) {
	const CATEGORY_ID = sParams.get('category');
	const getByCategory = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${CATEGORY_ID}`;
	cargarPeliculas(getByCategory);
} else {
	cargarPeliculas('');
}











