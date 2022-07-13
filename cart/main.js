//import '../style.css'
import './style.css'
import templatelogin from "./views/login.js"
const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);

import myorderView from './views/myorderView.js';
const UNIQUE_USER_TOKEN = 'ABC';

const app = document.querySelector('#app');

const template = `
<h1>Hello world! Product Page</h1>
${urlParams.get("product")}
<button id="accion"> Cambio </button>
<a href="/index.html">Home</a>
<button id="login">Log in </button>
<button id="myorder">myOrder</button>
`;

const templateprueba = `
<h1>Login</h1>
`;

app.innerHTML = template

const button = document.getElementById('accion');
button.addEventListener("click",() =>{
    const h1 = document.querySelector("h1")
    console.log("click", h1.style.color)
    if(h1.style.color === "blue")
        h1.style.color = "red";
    else
        h1.style.color = "blue";
})
/// Render del login
const buttonlogin = document.getElementById('login');
buttonlogin.addEventListener("click",() =>{
    app.innerHTML = templatelogin;
    var iniciosesion=false;
    localStorage.setItem('iniciosesion', iniciosesion);
    var user = new Object ();
    user.email= 'admin@admin.com';
    user.password= 'admin'; 
    const form = document.getElementById('form_login');
    form.onsubmit = () => {
        const mail = document.getElementById('email');
        const con = document.getElementById('password');
        const correo = mail.value;
        const contra = con.value;

        
        if (correo == ""  || contra ==""){
            alert("Debe llenar todos los campos");
        }else{if(correo == user.email  && contra == user.password){
            alert("inicio de sesion correcto");
            iniciosesion=true;
            localStorage.setItem('iniciosesion', iniciosesion);
            app.innerHTML = templateprueba
        }else{
            alert("Credenciales invalidas");
        }   
        console.log(correo, contra);
            
        }
    }

})

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
