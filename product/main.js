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
 








 const movie = new MovieController(570);

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
}) 


const divCasting = document.querySelector('#carruselCasting');
const casting = new CarruselCasting();
divCasting.innerHTML = casting.templateClass;
const gliderCasting = casting.move();


document.addEventListener('DOMContentLoaded', () =>{ 
  movie.getCasting().then(value => {
    console.log(value);
    value.forEach(e=>{
      const newElement = document.createElement("div")
      newElement.innerHTML = 
      `<div class="slick">
      
            
              <img src="${e.image_link}" alt="${e.name}">
              <h4> <small> ${e.name} </small></h4>
          
      
      
  </div>`
  gliderCasting.addItem(newElement)
    })
    
  })
  
})


//  const casting = new CarruselCasting(window);
// divCasting.innerHTML = Casting.templateClass
// Casting.move(); 









