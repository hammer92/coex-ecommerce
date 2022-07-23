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
app.appendChild(templateNav.content);
cargarPeliculas('');












