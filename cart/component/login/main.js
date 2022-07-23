import './style.css'
import templateLogin from './index.html?raw';
import * as HistoryComponent from '../history/main';
const IconSrc = '../../../assets/icons';
const user = new Object();

user.email = 'admin@admin.com';
user.password = 'admin';

function Login() {
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
				window.location ='../shop/index.html';
			} else {
				alert('Credenciales invalidas');
			}
		}
	};
}

function render(dom){
	dom.innerHTML = templateLogin.replace('${IconSrc}', IconSrc);
	document.addEventListener('load', Login())
}

export function logueo(dom, sesion){
	if (sesion){
		console.log('sesion: ', sesion)
		if (sesion === 'false') {
			render(dom);
		} else {
			if(localStorage.getItem('statusback', 'cart')){
				console.log('sesion: ', sesion)
				HistoryComponent.render(dom,readMovieList());
			} else {
				console.log('sesion: ', sesion)
				window.location = '../shop/index.html';
			}
		}
	} else {
		console.log('sesion: ', sesion)
		localStorage.setItem('iniciosesion', false);
		render(dom);
	}
	

}

