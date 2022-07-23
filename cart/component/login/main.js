import './style.css'
import templateLogin from './index.html?raw';
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

export function render(dom){
    dom.innerHTML = templateLogin.replace('${IconSrc}', IconSrc);
    document.addEventListener('load', Login())
}



