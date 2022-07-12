import "../style.css";
import "./style.css";
import MovieController from "./controllers/movie/movieController";
import MovieSection from "./components/movie-section/movie-section";
import Casting from "./components/casting/casting";
import CarruselCasting from "./components/carousel-recomended/carousel-recomended";
const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const app = document.querySelector("#app");

const template = `<div id="carousel-recomended"></div>
<div id="carruselCasting"></div>`;
app.innerHTML = template;
const carousel = document.querySelector('#carousel-recomended')
const carouselInstance = new CarouselRecomended(window)
carousel.innerHTML = carouselInstance.templateClass
carouselInstance.move()



const divCasting = document.querySelector('#carruselCasting');

const casting = new CarruselCasting(window);
divCasting.innerHTML = casting.templateClass
casting.move();

/* movie.getRecommended().then(value=>{
  value.forEach(e=>{
          container.innerHTML += `<div class'carrosel_elemento'><p>${e.name}</p></div>`
 
})
 
 
}

 */
