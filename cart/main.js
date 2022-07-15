//import '../style.css'
import './style.css';
import templateHistory from './views/history.js';
import templatelogin from './views/login.js';
import { OrderList } from './views/myorderView.js';
import { readMovieList } from './lib/conection.js';
import './lib/conection.js';

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const app = document.querySelector('#app') ;
const sesion = localStorage.getItem('iniciosesion');
const user = new Object();
user.email = 'admin@admin.com';
user.password = 'admin';

function Login() {
	app.innerHTML = templatelogin;
	var iniciosesion = false;
	localStorage.setItem('iniciosesion', iniciosesion);
	const form = document.getElementById('form_login');
	form.onsubmit = () => {
		const mail = document.getElementById('email');
		const con = document.getElementById('password');
		const correo = mail.value;
		const contra = con.value;

		if (correo == '' || contra == '') {
			alert('Debe llenar todos los campos');
		} else {
			if (correo == user.email && contra == user.password) {
                iniciosesion = true
				localStorage.setItem('iniciosesion', iniciosesion);
                alert('inicio de sesion correcto');
				window.location.href ='../shop/index.html';
				// app.innerHTML = templateprueba;
			} else {
				alert('Credenciales invalidas');
			}
		}
	};
}

function RenderMyOrder(id, date) {
	const order = new OrderList(id, date);
	app.innerHTML = order.myorderView;
	const BACK = document.getElementById('back-arrow');
	BACK.addEventListener('click', () => {
		window.location.reload();
	});
}

function renderHistory() {
    app.innerHTML = templateHistory;

    // const boton_g = document.getElementById('boton_guardar');
	// // let add_date = document.getElementById("history__section__orders__date");

	// let capa = document.getElementsByClassName(
	// 	'history__section--orders--shopping'
	// );

	// let tag_div = document.createElement('div');
	// tag_div.setAttribute('id', 'history__section--orders--items');

	// for (let i = 0; i < capa.length; i++) {
	// 	capa[i].appendChild(tag_div);
	// }

	// let tag_h1 = document.createElement('h1');
	// let tag_img = document.createElement('img');

	// let capa_2 = document.getElementsByClassName(
	// 	'history__section--orders--items'
	// );

	// tag_h1.innerHTML = output;
	// tag_img.setAttribute(
	// 	'src',
	// 	'/assets/icons/angle-small-right-free-icon-font.svg'
	// );
	// tag_img.style.width = '20px';

	// for (let j = 0; j < capa.length; j++) {
	// 	capa[j].appendChild(tag_h1);
	// 	capa[j].appendChild(tag_img);
	// }
	// boton_g.addEventListener('click', call_date);
	document.addEventListener("load", readMovieList());
}

const template = `
<h1>Hello world! Product Page</h1>
${urlParams.get('product')}
<button id="accion"> Cambio </button>
<a href="/index.html" >Home</a>
<button id="history2">History</button>
<button id="login">Log in </button>
<button id="myorder">myOrder</button>
`;

if (sesion){
	console.log('sesion: ', sesion)
	if (sesion === 'false') {
		Login();
	} else {
		if(localStorage.getItem('statusback', 'cart')){
			renderHistory();
		} else {
			window.location = '../shop/index.html';
		}
	}
} else {
	localStorage.setItem('iniciosesion', false);
	Login();
}

// app.innerHTML = templateHistory;
// app.innerHTML = template;

// History

// const history = document.getElementById('history2');
// history.addEventListener('click', () => {});

// const button = document.getElementById('accion');
// button.addEventListener('click', () => {
// 	const h1 = document.querySelector('h1');
// 	console.log('click', h1.style.color);
// 	if (h1.style.color === 'blue') h1.style.color = 'red';
// 	else h1.style.color = 'blue';
// });

/// Render del login
// const buttonlogin = document.getElementById('login');

// buttonlogin.addEventListener('click', () => {
// 	Login();
// });

// ------------------------
// Render My Order

const ORDER_LIST = document.querySelectorAll('button.myorder');

ORDER_LIST.forEach((order) => {
	order.addEventListener('click', (e) => {
		e.preventDefault();
		const ID = order.querySelector('.id_order').innerHTML;
		const DATE = order.querySelector('.date_order').innerHTML;
		RenderMyOrder(ID, DATE);
	});
});

// ------------------------
