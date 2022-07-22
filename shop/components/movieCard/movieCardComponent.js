import '../../../cart/component/starsComponent.js'
import './style.css'

class movieCardComponent extends HTMLElement{
    constructor(){
        super();
        this.movieUrl = 'https://image.tmdb.org/t/p/w500';
        this.id;
        this.title;
        this.genre;
        this.overview;
        this.poster_path;
        this.vote_average;
    }

	static get observedAttributes() {
        return ['title', 'genre', 'overview', 'path', 'vote']
    }

	attributeChangedCallback(attr, oldVal, newVal) {
        if (oldVal !== newVal){
            switch(attr){
                case 'id':
                    this.id = id;
                case 'title':
                    this.title = newVal;
                    break;
                case 'genre':
                    this.genre = newVal;
                    break;
                case 'overview':
                    this.overview = newVal;
                    break;
                case 'path':
                    this.poster_path = newVal;
                    break;
                case 'vote':
                    this.vote_average = newVal;
                    break;
            }
        }
    }

	connectedCallback() {
		this.innerHTML = `
		<div class="s-grid__card">
            <figure class="s-card__cover">
                <button class="s-go-to-detail" id="${this.id}">
                    <img src="${this.movieUrl}${this.poster_path}" alt="${this.title}" class="s-card__poster">
                    <span class="s-card__title">${this.title}</span>
                    <span class="s-card__overview">
                        <p class="s-card__text">${this.overview}</p>
                    </span>
                </button>
            </figure>
            <div class="s-card__table">
                <div class="s-table__header">
                    <p class="s-table__genre">${this.genre}</p>
                    <star-rating rating="${this.vote_average}"></star-rating>
                </div>
                <div class="s-table__btn--add">Add To Cart</div>
            </div>
        </div>
		`;
    }
}

customElements.define('movie-card', movieCardComponent)