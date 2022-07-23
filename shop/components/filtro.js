import getMovies from "../controller/getMovies.js";
import cargarPeliculas from "../controller/loadMovie.js";

class filtro extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'})
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/ `
            <form class="filtros" id="filtros">
                <input type="text" class="search" id="search" name="search" placeholder="Buscar">
                ${this.getStyle()}
            </form>
        `
        return template;
    }
    getStyle(){
        return /*html*/ `
            <style>
                .search{
                    padding: 11px;
                    font-size: 16px;
                    color: #C7C7C7;
                    width: 360px;
                    border: none;
                    border-radius: 10px;
                    border-color: #7B2ABF;
                    background-color: #110E35;
                }

                .filtros {
                    width: 100%;
                    max-width: 1000px;
                    display: flex;
                }
            </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render(); 

        let filtros = this.shadowRoot.getElementById('filtros');
        let search = this.shadowRoot.getElementById('search');
        const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=d2b1df9d64af7fb2a0342bd9d23e1449';
        filtros.addEventListener('keypress', (e) => {
            if(e.code === 'Enter'){
                e.preventDefault();
                
                const searchTerm = search.value;
                console.log(searchTerm);
            
                if (searchTerm) {
                    getMovies(searchURL + '&query=' + searchTerm);
                } else {
                    cargarPeliculas();
                }
            }
        });
    }

}

customElements.define('filter-bar', filtro);