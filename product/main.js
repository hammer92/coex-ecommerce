import "../style.css";
import "./style.css";
import MovieSection from "./components/movie-section/movie-section";

const app = document.querySelector('#app');
const testID = 550

const section = new MovieSection(testID);

section.template()
.then( template => {
    app.innerHTML = template
    section.carCast.renderItems()
    section.carReco.renderItems()
})