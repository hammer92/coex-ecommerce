import "../style.css";
import "./style.css";
import CarouselRecomended from './components/carousel-recomended/carousel-recomended.js'
import CarruselCasting  from "./components/casting/casting";

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



