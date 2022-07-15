import 'normalize.css'
import '../style.css'
import './style.css'
import MovieSection from "./components/movie-section/movie-section";

const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);
const id = urlParams.get("product")

const app = document.querySelector('#app');

const template =`
<h1>Hello world! Cart Page</h1>
<button id="accion"> Cambio </button>
<a href="./testfile.html">Tests</a>
`
//app.innerHTML = template

const button = document.getElementById('accion');
button.addEventListener("click",() =>{
    const h1 = document.querySelector("h1")
    console.log("click", h1.style.color)
    if(h1.style.color === "blue")
        h1.style.color = "red";
    else
        h1.style.color = "blue";
})
import "../style.css";
import "./style.css";

const testID = 550

const section = new MovieSection(testID);

section.template()
.then( template => {
    app.innerHTML = template
    section.carCast.renderItems()
    section.carReco.renderItems()
})