import './starsComponent.js';

class CartProduct extends HTMLElement {
	constructor() {
		super();
		this.title;
		this.genre;
		this.rating;
		this.cover;
	}

	static get observedAttributes() {
		return ['title', 'genre', 'rating', 'cover'];
	}

	attributeChangedCallback(attr, oldVal, newVal) {
		switch (attr) {
			case 'title':
				this.title = newVal;
				break;
			case 'genre':
				this.genre = newVal;
				break;
			case 'rating':
				this.rating = newVal;
				break;
			case 'cover':
				this.cover = newVal;
				break;
		}
	}
	connectedCallback() {
		this.innerHTML = `
        <a href="#" class="list__link">
            <div class="list__item">
                <figure class="item__cover">
                    <img src="${this.cover}" alt="${this.title}" class="item__img">
                </figure>
                <div class="item__info">
                    <h4 class="item__title">${this.title}</h4>
                    <div class="item__genres">
                        <p class="item__genre">${this.genre}</p>
                    </div>
					<star-rating rating="${this.rating}"></star-rating>
                </div>
            </div>
        </a>`;
	}
}

window.customElements.define('cart-product', CartProduct);