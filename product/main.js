import "../style.css";
import "./style.css";
// import CarouselRecomended from "./components/carousel-recomended/carousel-recomended";
// import MovieController from "./controllers/movie/movieController";
import MovieSection from "./components/movie-section/movie-section";
// import CarruselCasting from "./components/casting/casting";
/* const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams); */


// const carousel = document.querySelector('#carousel-recomended')
// const carouselInstance = new CarouselRecomended()
// carousel.innerHTML = carouselInstance.templateClass
// const gliderCarousel = carouselInstance.move()

// movie.getRecommended().then(value => {
//   console.log(value);
//   value.forEach(e=>{
//     const newElement = document.createElement("div")
//     newElement.innerHTML = 
//     `<div class="carousel__elemento">
//         <img class="carousel__img" src="${e.image_link}" alt="${e.name}">
//         <div class="contenedor__elemento">
//           <p class="carousel__titulo" >${e.name}</p>
//         </div>
//     </div>`
//     gliderCarousel.addItem(newElement)
//   })
// })
// const divCasting = document.querySelector('#carruselCasting');
// const casting = new CarruselCasting();
// divCasting.innerHTML = casting.templateClass;
// const gliderCasting = casting.move(); 

// const synopsisDiv = document.querySelector('#synopsis')




// const movie = new MovieController(550);

// document.addEventListener('DOMContentLoaded', function() {
  
//   movie.getInfo().then(data => {
//     console.log(data);
//   })
// }
//   const URL = 'https://api.themoviedb.org/3/movie/550?api_key=64199fb5bc61daefa6e963869f598ec3'
//   let movie = null
//   const content = document.getElementById('content')
//   const p = document.createElement('p')
//   content.append(p)

//   async function getdata(url) {
//       await fetch(URL).then(response => response.json())
//       .then(data => {
//           movie = data
//           p.innerText = `${movie.overview}`
//           console.log(movie)
//       })
//   }
  
//   getdata(URL) 
      
// });


// document.addEventListener('DOMContentLoaded', () =>{

//   movie.getInfo().then(data => {
//     console.log(data);
//     for(let i = 0; i < data.length; i++){
//       // const movieSection = new MovieSection(data[i]);
//       const synopsis = document.createElement("div")
//       // document.querySelector('#movie-section').innerHTML += movieSection.templateClass;
//       synopsis.innerHTML = 
//       `<div class="movie-section">
//         <h1>Hola</h1>
//         <p>${$e.synopsis}</p>
//       </div
//       `
//     } 
//   })

//   movie.getCasting().then(value => {
//     console.log(value);
//     value.forEach(e=>{
//       const newElement2 = document.createElement("div")
//       newElement2.innerHTML = 
//       `<div class="carousel__element">
//           <img class="carousel__img2" src="${e.image_link}" alt="${e.name}">
//           <div class="container__element">
//             <p class="carousel__tit" >${e.name}</p>
//           </div>
//       </div>`
  
//       gliderCasting.addItem(newElement2)
  
//     })
//   })
// })

const app = document.querySelector('#app');
const testID = 550

const section = new MovieSection(testID);
app.innerHTML = section.template;
section.carCast.renderItems()
section.carReco.renderItems()