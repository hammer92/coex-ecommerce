// import '../style.css'
import './style.css';
import templateHistory from './views/history.js';
import templatelogin from './views/login.js';
import myorderView from './views/myorderView.js';
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

const MOVIES = [
    {
        title: 'Saw',
        genre: 'Thriller',
        poster_path: '/harQifr8kpIVqlLP41kTR058LZB.jpg',
        vote_average: 7.4,
    },
    {
        title: 'Avengers: Endgame',
        genre: 'Action',
        poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        vote_average: 8.3,
    },
    {
        title: 'Joker',
        genre: 'Action',
        poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        vote_average: 8.2,
    },
];
if (sesion === 'false') {
    Login();
} else {
    renderHistory()
}

// History

const history = document.getElementById('history');
history.addEventListener('click', () => {
});

function renderHistory() {
    app.innerHTML = templateHistory;

    const boton_g = document.getElementById('boton_guardar');

    function call_date(movies) {

        let array_date = [];
        let contador = 0;
        const date = new Date();
        let longitud_movies = movies.length;
        console.log(longitud_movies);

        let output =
            String(date.getDate()).padStart(2, '0') +
            '.' +
            String(date.getMonth() + 1).padStart(2, '0') +
            '.' +
            date.getFullYear();

        array_date.push(output);

        // let add_date = document.getElementById("history__section__orders__date");

        let capa_contenedor = document.getElementsByClassName("history__section--orders--shopping");

        let tag_div = document.createElement("div");
        tag_div.setAttribute("class", "history__section--orders--items");

        let tag_h1 = document.createElement("h1");
        let tag_img = document.createElement("img");
        let tag_h2 = document.createElement("h2");

        let capa = document.getElementsByClassName("history__section--orders--items");

        tag_h1.innerHTML = output;
        tag_h1.style.color = "white";
        tag_img.setAttribute('src', '/assets/icons/angle-small-right-free-icon-font.svg');
        tag_img.style.width = "20px";
        tag_h2.innerHTML = longitud_movies;
        tag_h2.style.color = "white";
        tag_h2.innerHTML += " movies";

        for (let i = 0; i < capa_contenedor.length; i++) {
            capa_contenedor[i].appendChild(tag_div);
            for (let j = 0; j < capa.length; j++) {
                contador = contador + 1;
                tag_div.setAttribute('id', contador);
                capa[j].appendChild(tag_h1);
                capa[j].appendChild(tag_img);

            };
            capa_contenedor[i].appendChild(tag_h2);
        }
    }
    boton_g.addEventListener("click", call_date(MOVIES));

}

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
