import './movie-section.css'
import CarouselRecomended from '../carousel-recomended/carousel-recomended.js';
import CarruselCasting from '../casting/casting.js';
import MovieController from '../../controllers/movie/movieController';

class MovieSection {

    constructor(movieId) {
        this.id = movieId;
        this.apiController = new MovieController(this.id);
        this.carReco = new CarouselRecomended(this.id);
        this.carCast = new CarruselCasting(this.id);
    }
    get sections(){
        const content = [
            {
                text: 'Synopsis',
                next: 'Trailer',
                id: 'synopsis'
            },
            {
                text: 'Trailer',
                next: 'Casting',
                id: 'trailer'
            },
            {
                text: 'Casting',
                next: 'Recommended',
                id: 'casting'
            },
            {
                text: 'Recommended',
                next: 'Synopsis',
                id: 'recommended'
            }
        ]
        return content
    }
    createInnerElements(){
        const commonClass = 'movie-section'
        const sections = this.sections
        const elements = []

        sections.forEach(section => {
            let element = document.createElement('div')
            let h1 = document.createElement('h1')
            let a = document.createElement('a')
            let span = document.createElement('span')
            let content = document.createElement('div')
            
            h1.innerText = section.text

            switch(section.text){
                case 'Synopsis':
                    this.apiController.getInfo().then(movie => {
                        content.innerText = movie.synopsis
                    })
                    break;
                case 'Trailer':
                    let frame = document.createElement('iframe')
                    this.apiController.getTrailer().then(trailer => {
                        let embed = trailer.embed_trailer
                        frame.src = embed
                        content.append(frame)
                    })
                    break;
                case 'Casting':
                    content.innerHTML = this.carCast.template
                    break;
                case 'Recommended':
                    content.innerHTML = this.carReco.template
                    break;
            }
            
            a.append(span, section.next)
            a.setAttribute('href', `#${section.next.toLowerCase()}`)
            
            element.setAttribute('id', section.id)
            element.classList.add(commonClass)
            element.append(h1, content, a)
            
            elements.push(element)
            console.log(element.innerHTML)
        })
        return elements
    }
    get template() {
        let elements = this.createInnerElements()
        let template = elements.map(element => element.outerHTML).join('')

        console.log(template)
        return template
    }
}
export default MovieSection;
