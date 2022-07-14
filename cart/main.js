// import '../style.css'

import './style.css';
import './lib/conection.js';
import templateHistory from "./views/history.js";
import templatelogin from './views/login.js';
import myorderView from './views/myorderView.js';

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const UNIQUE_USER_TOKEN = 'ABC';

const app = document.querySelector('#app');

const template = `
<h1>Hello world! Product Page</h1>
${urlParams.get('product')}
<button id="accion"> Cambio </button>
<a href="/index.html" >Home</a>
<button id="history2">History</button>
<button id="login">Log in </button>
<button id="myorder">myOrder</button>
`;

// app.innerHTML = templateHistory;
app.innerHTML = template;
const history = document.getElementById("history2");
history.addEventListener("click", () => {
    console.log("Hola mundo");
    app.innerHTML = templateHistory;


    const boton_g = document.getElementById("boton_guardar");

    function call_date() {

        let array_date = [];

        const date = new Date();

        let output =
            String(date.getDate()).padStart(2, "0") +
            "." +
            String(date.getMonth() + 1).padStart(2, "0") +
            "." +
            date.getFullYear();

        array_date.push(output);

        // let add_date = document.getElementById("history__section__orders__date");

        let capa = document.getElementsByClassName("history__section--orders--shopping");

        let tag_div = document.createElement("div");
        tag_div.setAttribute("id", "history__section--orders--items");

        for (let i = 0; i < capa.length; i++) {
            capa[i].appendChild(tag_div);
        }

        let tag_h1 = document.createElement("h1");
        let tag_img = document.createElement("img");

        let capa_2 = document.getElementsByClassName("history__section--orders--items");

        tag_h1.innerHTML = output;
        tag_img.setAttribute('src', '/assets/icons/angle-small-right-free-icon-font.svg');
        tag_img.style.width = "20px";

        for (let j = 0; j < capa.length; j++) {
            capa[j].appendChild(tag_h1);
            capa[j].appendChild(tag_img);
        };
    }

    boton_g.addEventListener("click", call_date); });

// const button = document.getElementById('accion');
// button.addEventListener("click", async () => {
//     const h1 = document.querySelector("h1")
//     console.log("click", h1.style.color)
//     if (h1.style.color === "blue")
//         h1.style.color = "red";
//     else
//         h1.style.color = "blue";
// })



const button = document.getElementById('accion');
button.addEventListener('click', () => {
    const h1 = document.querySelector('h1');
    console.log('click', h1.style.color);
    if (h1.style.color === 'blue') h1.style.color = 'red';
    else h1.style.color = 'blue';
});
/// Render del login
const buttonlogin = document.getElementById('login');
buttonlogin.addEventListener('click', () => {
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

// ------------------------
