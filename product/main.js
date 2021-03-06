import MovieController from './controllers/movie/movieController';
import MainCard from './components/main-card/main-card';
import MovieSection from './components/movie-section/movie-section.js'
import 'normalize.css'
import '../style.css'
import './style.css'

const url = new URL(window.location)
const urlParams = new URLSearchParams(url.searchParams);
const id = urlParams.get("movie")
// url example: http://localhost:3000/product/index.html?movie=550
// it means the page will render the movie with id=550

const container = document.querySelector('div.main-card-container');
const apiController = new MovieController(id)

render(id)

async function render(movieId){
    const movie = await apiController.getInfo(movieId)
    const mainCard = new MainCard(movie)
    container.innerHTML = mainCard.template

    const movieSection  = new MovieSection(id, movie)
    const movieSectionSlot = document.querySelector('div.main-info-slot')
    const movieSectionInfo = await movieSection.template()
    movieSectionSlot.innerHTML = movieSectionInfo

    movieSection.carCast.renderItems()
    movieSection.carReco.renderItems()
    const btns = Array.from(document.querySelectorAll('a.nextSectionButton'))

    btns.forEach(btn =>{
        btn.addEventListener('click', function(e){
            let curId = e.target.parentElement.id
            let nextId = btn.textContent.toLowerCase()

            movieSection.next(curId, nextId)
        })
    })
}
