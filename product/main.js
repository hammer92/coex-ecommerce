import 'normalize.css'
import '../style.css'
import './style.css'
import MovieSection from "./components/movie-section/movie-section";

const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);
const id = urlParams.get("product")

const app = document.querySelector('#app');
const testID = 550
const section = new MovieSection(testID);

const template =`
<h1>Hello world! Cart Page</h1>
<button id="accion"> Cambio </button>
<a href="./testfile.html">Tests</a>
`
//app.innerHTML = template



section.template()
.then( template => {
    app.innerHTML = template
    section.carCast.renderItems()
    section.carReco.renderItems()
})
