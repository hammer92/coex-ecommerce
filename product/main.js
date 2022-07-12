import "../style.css";
import "./style.css";
import CarouselRecomended from './components/carousel-recomended/carousel-recomended.js'

const app = document.querySelector("#app");

const template = `<div id="carousel-recomended"></div>`;
app.innerHTML = template;
const carousel = document.querySelector('#carousel-recomended')
const carouselInstance = new CarouselRecomended(window)
carousel.innerHTML = carouselInstance.templateClass
carouselInstance.move()

