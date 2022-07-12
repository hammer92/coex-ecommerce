// import '../style.css'
// import './style.css'
import templateHistory from './views/history.js';
const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);

const app = document.querySelector('#app');

const template = `
<h1>Hello world! Cart Page</h1>
${urlParams.get("product")}
<button id="accion"> Cambio </button>
<a href="/index.html">Home</a>
<a href="history" id="history">History</a>
`;

app.innerHTML = templateHistory;
// app.innerHTML = template;


// document.getElementById("history").addEventListener("click", async() => {
//     if (app != templateHistory) {

//     } else {
//         app.innerHTML = template;
//     }


// })

// const button = document.getElementById('accion');
// button.addEventListener("click", async () => {
//     const h1 = document.querySelector("h1")
//     console.log("click", h1.style.color)
//     if (h1.style.color === "blue")
//         h1.style.color = "red";
//     else
//         h1.style.color = "blue";
// })


const boton_g = document.getElementById("boton_guardar");

function call_date() {
    // const hoy = new Date();
    // let day = hoy.getDay();
    console.log("funciona");
}
boton_g.addEventListener("click", call_date);