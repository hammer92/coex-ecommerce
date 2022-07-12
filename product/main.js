import "../style.css";
import "./style.css";
import CartBtn from './components/cart-btn/cart-btn.js'
import MovieController from "./controllers/movie/movieController";
const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const app = document.querySelector("#app");
const template = `
  <h1>Hello world! Product Page</h1>
  ${urlParams.get("product")}
  <button id="accion">Cambio</button>
  <a href="/index.html">Home</a>
  <div id='btn-container' ></div>
`;
app.innerHTML = template;
const carousel = document.querySelector('#carousel-recomended')
const carouselInstance = new CarouselRecomended(window)
carousel.innerHTML = carouselInstance.templateClass
carouselInstance.move()



const divCasting = document.querySelector('#carruselCasting');

const casting = new CarruselCasting(window);
divCasting.innerHTML = casting.templateClass
casting.move();



