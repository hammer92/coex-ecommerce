import './movie-section.css'
import CarouselRecomended from '../carousel-recomended/carousel-recomended.js';
import CarruselCasting from '../casting/casting.js';
import MovieController from '../../controllers/movie/movieController';

class MovieSection {

    constructor(movieId, movieJson) {
        this.movie = movieJson
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
    async createInnerElements(){
        const commonClass = 'movie-section'
        const sections = this.sections
        const elements = []

        const movie = this.movie
        const trailer = await this.apiController.getTrailer()

        sections.forEach(section => {
            let element = document.createElement('div')
            let h1 = document.createElement('h1')
            let a = document.createElement('a')
            let span = document.createElement('span')
            let content = document.createElement('div');

            let synopsisContent = document.createElement('p');

            h1.innerText = section.text

            switch(section.text){
                case 'Synopsis':
                    element.setAttribute('class', 'synopsis');
                    synopsisContent.innerText = movie.synopsis;
                    content.appendChild(synopsisContent);
                    break;
                case 'Trailer':
                    content.setAttribute('class', 'container-video');
                    let frame = document.createElement('iframe')
                    frame.src = trailer.embed_trailer
                    frame.classList.add('relative-iframe')
                    frame.frameBorder = 0
                    frame.width = 550
                    frame.height = 450
                    frame.allow = 'fullscreen'
                    content.append(frame)
                    break;
                case 'Casting':
                    content.innerHTML = this.carCast.template
                    break;
                case 'Recommended':
                    content.innerHTML = this.carReco.template
                    break;
            }
            content.classList.add('contentContainer')

            a.append(span, section.next)
            //a.setAttribute('href', `#${section.next.toLowerCase()}`)
            a.classList.add('nextSectionButton')
            
            element.setAttribute('id', section.id)
            element.classList.add(commonClass)
            element.append(h1, content, a)
            
            elements.push(element)
            //console.log(element.innerHTML)
        })
        return elements
    }
    async template() {
        this.elements = await this.createInnerElements()
        
        this.elements[0].style.display = 'grid'
        let template = this.elements.map(element => element.outerHTML).join('')

        return template
    }
    next(curId, nextId){

        const curContent = document.querySelector(`#${curId}`)
        const nextContent = document.querySelector(`#${nextId}`)

        curContent.style.display = 'none'
        nextContent.style.display = 'grid'
    }

}
export default MovieSection;
