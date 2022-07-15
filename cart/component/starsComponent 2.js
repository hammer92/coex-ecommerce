class starsElement extends HTMLElement {
	constructor() {
		super();
		this.source = '../../assets/icons/icon_star.svg';
		this.rating;
	}

	ratingToStars(rat) {
		let arr = [];
		for (let i = 2; i <= 10; i += 2) {
			if (i <= rat) {
				arr.push('item__star--purple');
			} else {
				arr.push('item__star--gray');
			}
		}
		return arr;
	}

	static get observedAttributes() {
		return ['rating'];
	}

	attributeChangedCallback(attr, oldVal, newVal) {
		if (attr === 'rating') {
			this.rating = this.ratingToStars(newVal);
		}
	}

	connectedCallback() {
		this.innerHTML = `
        <figure class="item__stars">
			<img src="${this.source}" alt="star" class="item__star ${this.rating[0]}">
			<img src="${this.source}" alt="star" class="item__star ${this.rating[1]}">
			<img src="${this.source}" alt="star" class="item__star ${this.rating[2]}">
			<img src="${this.source}" alt="star" class="item__star ${this.rating[3]}">
			<img src="${this.source}" alt="star" class="item__star ${this.rating[4]}">
		</figure>`;
	}
}

customElements.define('star-rating', starsElement);
