<<<<<<< HEAD
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
=======
import "../style.css";
import "./style.css";
import CarouselRecomended from "./components/carousel-recomended/carousel-recomended";
import MovieController from "./controllers/movie/movieController";
import MovieSection from "./components/movie-section/movie-section";
import CarruselCasting from "./components/casting/casting";
/* const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams); */


const carousel = document.querySelector('#carousel-recomended')
const carouselInstance = new CarouselRecomended()
carousel.innerHTML = carouselInstance.templateClass
const gliderCarousel = carouselInstance.move()

const divCasting = document.querySelector('#carruselCasting');
const casting = new CarruselCasting();
divCasting.innerHTML = casting.templateClass;
const gliderCasting = casting.move(); 




const movie = new MovieController(550);

document.addEventListener('DOMContentLoaded', () =>{

  movie.getRecommended().then(value => {
    console.log(value);
    value.forEach(e=>{
      const newElement = document.createElement("div")
      newElement.innerHTML = 
      `<div class="carousel__elemento">
          <img class="carousel__img" src="${e.image_link}" alt="${e.name}">
          <div class="contenedor__elemento">
            <p class="carousel__titulo" >${e.name}</p>
          </div>
      </div>`
      gliderCarousel.addItem(newElement)
    })
  })
  movie.getCasting().then(value => {
    console.log(value);
    value.forEach(e=>{
      const newElement2 = document.createElement("div")
      newElement2.innerHTML = 
      `<div class="carousel__element">
          <img class="carousel__img2" src="${e.image_link}" alt="${e.name}">
          <div class="container__element">
            <p class="carousel__tit" >${e.name}</p>
          </div>
      </div>`
  
      gliderCasting.addItem(newElement2)
  
    })
  })
>>>>>>> b047ac8468f7e89b345e4a92882e827840c255a9
})












