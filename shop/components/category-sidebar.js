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
                    display: none;
                    border-style: none;
                    background-color: #02021C;
                    margin-left: 10px;
                    color: #D8D8D8;
                }
                .list-item{
                    border: 1px solid transparent;
                    border-radius: 10px;
                    padding: 5px 10px;
                    list-style: none;
                }
                .active-category{
                    border-color: #7b2abf;
                }
                .active-category a{
                    color: white;
                }
                a{
                    color: #797979;
                    text-decoration: none;
                }
                a:hover{
                    transition: 0.2s;
                    color: #7B2ABF;
                    cursor: pointer;
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
