import cargarPeliculas from '../controller/loadMovie';
import { GetCategories } from '../controller/getCategories.js';

class category extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.key = 'd2b1df9d64af7fb2a0342bd9d23e1449';
		this.allGenres = `<li class="active-category" id="categorySelected"><a href="">All</a></li>`;
		this.categories;
		this.topCategories;
		this.otherCategories;
        this.arrowDown = '../../../assets/icons/arrow_down_black.svg';
        this.count = 0;
	}
	getItem({ id, name }) {
		const sParams = new URLSearchParams(window.location.search);
		const active =
			parseInt(sParams.get('category')) === id
				? 'active-category'
				: '';
		return `<li class="${active} list-item"><a href="?category=${id}">${name}</a></li>`;
	}
	async getCategories() {
		const CATEGORIES = await GetCategories();
		this.categories = CATEGORIES.genres;
		this.PrincipalCategoryList();
	}
	PrincipalCategoryList() {
		let tempTopCategories = [];
		let tempOtherCategories = [];
		this.categories.forEach((category, index) => {
			index < 4
				? tempTopCategories.push(category)
				: tempOtherCategories.push(category);
		});
		this.topCategories = (tempTopCategories || [])
			.map(this.getItem)
			.join('\n');
		this.otherCategories = (tempOtherCategories || [])
			.map(this.getItem)
			.join('\n');
		// RENDER
		this.render();
	}
	getTemplate() {
		const template = document.createElement('template');
		template.innerHTML = /*html*/ `
            <div class="categories">
                <nav class="nav">
                    <ul class="list-categories">
                        ${this.topCategories}
                        <label for="otherMenu" class="list-item down-list" id="otherItems">
                            Others
                            <img src="${this.arrowDown}" alt="arrow_down" class="list-icon">
                        </label>
                        <input type="checkbox" name="otherMenu" id="otherMenu">
                        <ul class="other-categories">
                            ${this.otherCategories}
                        </ul>
                    </ul>
                </nav>
            </div>
            ${this.getStyles()}
        `;
		return template;
	}
	getStyles() {
		return /*html*/ `
            <style>
                .categories{
                    width: 100%;
                }
                .list-categories{
                    display: flex;
                    gap: 1rem;
                }
                .other-categories{
                    position: absolute;
                    top: 54px;
                    left: 0;
                    z-index: 9999;
                    width: 100%;
                    padding: 10px;
                    display: none;
                    border-style: none;
                    background-color: #02021C;
                    color: #D8D8D8;
                }
                .list-item{
                    border: 1px solid transparent;
                    border-radius: 10px;
                    padding: 5px 10px;
                    list-style: none;
                }
                .down-list{
                    color: #797979;
                    cursor: pointer;
                }
                .down-list:hover .list-icon{
                    filter: invert(22%) sepia(83%) saturate(2189%) hue-rotate(260deg) brightness(87%) contrast(102%);
                }
                #otherMenu{
                    display: none;
                }
                #otherMenu:checked ~ .other-categories{
                    display: flex;
                }
                .list-icon{
                    width: 14px;
                    height: auto;
                    filter: invert(46%) sepia(30%) saturate(12%) hue-rotate(321deg) brightness(97%) contrast(91%);
                }
                .active-category{
                    border-color: #7b2abf;
                }
                .active-category a{
                    color: white;
                }
                a{
                    cursor: pointer;
                    color: #797979;
                    text-decoration: none;
                }
                .down-list:hover,
                a:hover{
                    transition: 0.2s;
                    color: #7B2ABF;
                }
            </style>
        `;
	}
	render() {
		this.shadowRoot.appendChild(
			this.getTemplate().content.cloneNode(true)
		);
	}
	connectedCallback() {
		// GET CATEGORIES
		this.getCategories();
	}
}

customElements.define('category-sidebar', category);
