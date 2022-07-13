import 'normalize.css'
import '../style.css'
import './style.css'
const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);

const app = document.querySelector('#app');


const template = `
<h1>Hello world! Product Page</h1>
${urlParams.get("product")}
<button id="accion"> Cambio </button>
<a href="/index.html">Home</a>
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
