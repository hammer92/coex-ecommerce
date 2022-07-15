// import '../style.css'
import './style.css';
import templateHistory from './views/history.js';
import templatelogin from './views/login.js';
import myorderView from './views/myorderView.js';
import { readMovieList } from './lib/conection.js';
import './lib/conection.js';

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const UNIQUE_USER_TOKEN = 'ABC';

const app = document.querySelector('#app');
const sesion = localStorage.getItem('iniciosesion');


function Login() {
    app.innerHTML = templatelogin;
    var iniciosesion = false;
    localStorage.setItem('iniciosesion', iniciosesion);
    var user = new Object();
    user.email = 'admin@admin.com';
    user.password = 'admin';
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
                alert('inicio de sesion correcto');
                iniciosesion = true;
                localStorage.setItem('iniciosesion', iniciosesion);
                app.innerHTML = templateprueba;
            } else {
                alert('Credenciales invalidas');
            }
            console.log(correo, contra);
        }
    };
}

const template = `
<h1>Hello world! Product Page</h1>
${urlParams.get('product')}
<button id="accion"> Cambio </button>
<a href="/index.html" >Home</a>
<button id="history">History</button>
<button id="login">Log in </button>
<button id="myorder">myOrder</button>
`;

if (sesion === 'false') {
    Login();
} else {
    renderHistory()
}

// History

function renderHistory() {
    app.innerHTML = templateHistory;

    const boton_g = document.getElementById('boton_guardar');

    
    document.addEventListener("load", readMovieList());

}
/// Render del login
const buttonlogin = document.getElementById('login');

buttonlogin.addEventListener('click', () => {
    Login();
});

// ------------------------
// MyOrder View

const myorder = document.getElementById('myorder');
myorder.addEventListener('click', () => {
    if (UNIQUE_USER_TOKEN === 'ABC') {
        app.innerHTML = myorderView;
        const BACK = document.getElementById('back-arrow');
        BACK.addEventListener('click', () => {
            window.location.reload();
        });
    } else {
        console.log('denegado');
    }
});

// -----------------------
