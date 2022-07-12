import "../style.css";
import "./style.css";
import MovieController from "./controllers/movie/movieController";
import CarruselCasting  from "./components/casting/casting";
import CarouselRecomended from './components/carousel-recomended/carousel-recomended.js'

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







const movie = new MovieController(155);
document.addEventListener('DOMContentLoaded', () =>{
  const container = document.getElementById('lista');
  movie.getRecommended().then(value => {
    console.log(value);
    value.forEach(e=>{
      let ejemplo = 
      `<div class="carousel__elemento">
          <img class="carousel__img" src="${e.image_link}" alt="${e.name}">
          <div class="contenedor__elemento">
              <p class="carousel__titulo" >${e.name}</p>
          </div>
      </div>`
      container.innerHTML += ejemplo
    })
  })
})


document.addEventListener('DOMContentLoaded', () =>{
  const container = document.getElementById('track');
  movie.getCasting().then(value => {
    console.log(value);

    value.forEach(e=>{
      let ejemplo = 
      
      `
      
  <div class="slick">
      <div>
            <picture>
              <img src="${e.image_link}" alt="Image">
               <h4> <small> </small></h4>
          </picture>
      </div>
  </div>


      `
      container.innerHTML += ejemplo
    })
  })
})