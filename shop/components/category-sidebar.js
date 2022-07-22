import cargarPeliculas from "../controller/loadMovie";

class category extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.getByCategory = '';
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/ `
            <div class="categories">
                <nav class="nav">
                    <ul>
                        <button id="categorySelected" value="All">
                            <li>All</li>
                        </button>

                        <button id="categorySelected" value="28">
                            <li>Action</li>
                        </button>

                        <button id="categorySelected" value="12">
                            <li>Adventure</li>
                        </button>

                        <button id="categorySelected" value="16">
                            <li>Animation</li>
                        </button>

                        <button id="categorySelected" value="35">
                            <li>Comedy</li>
                        </button>

                        <li>
                            <select class="list-categories" name="" id="categorySelected">

                                <option id="categorySelected">- Others categories -</option>

                                <option id="categorySelected" value="80">Crime</option>

                                <option id="categorySelected" value="99">Documentary</option>

                                <option id="categorySelected" value="18">Drama</option>

                                <option id="categorySelected" value="10751">Family</option>

                                <option id="categorySelected" value="14">Fantasy</option>

                                <option id="categorySelected" value="36">History</option>

                                <option id="categorySelected" value="27">Horror</option>

                                <option id="categorySelected" value="10402">Music</option>

                                <option id="categorySelected" value="9648">Mistery</option>

                                <option id="categorySelected" value="10749">Romance</option>

                                <option id="categorySelected" value="878">Fiction</option>

                                <option id="categorySelected" value="10770">TV Movie</option>

                                <option id="categorySelected" value="53">Thriller</option>

                                <option id="categorySelected" value="10752">War</option>

                                <option id="categorySelected" value="37">Western</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>

            ${this.getStyles()}
        `
        return template;
    }
    getStyles(){
        return /*html*/ `
            <style>
                button{
                    background-color: transparent;
                    color: white;
                    border-color: transparent;
                }
                .categories{
                    width: 100%;
                }
                .list-categories{
                    border-style: none;
                    background-color: #02021C;
                    margin-left: 10px;
                    color: #D8D8D8;
                }
                
                .categoria{
                    margin-left: 10px;
                    color: #D8D8D8;
                }
                
                
                .nav li:last-of-type{
                    margin-top:-1px;
                }

                li,option{
                    font-size: 32px;
                    /* color: red */
                }
                
                .nav ul{
                    display: flex;
                    gap: 30px;
                }
                
                .categorias{
                    display: flex;
                }
                
                a {
                    color: white;
                    text-decoration: none;
                }
                a:hover{
                    transition: 0.2s;
                    color: #7B2ABF;
                    cursor: pointer;
                }
                
                li {
                    display: flex;
                    list-style: none;
                    margin: 1%;
                    font-size: 18px;
                }
                .seleccionado{
                    border: 1px solid #7B2ABF;
                    border-radius: 10px;
                    /* padding: 5px; */
                    padding-left: 5px;
                    color: #7B2ABF;
                    padding-right: 5px;
                }
            </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
        let categorySelected = this.shadowRoot.querySelectorAll('#categorySelected');
        const key = 'd2b1df9d64af7fb2a0342bd9d23e1449';
        categorySelected.forEach((element) => {
            element.addEventListener('click', async () => {
                categorySelected.forEach((minCategory) => {
                    if (
                        minCategory.getAttribute('value') !=
                        element.getAttribute('value')
                    ) {
                        minCategory.classList.remove('seleccionado');
                    }
                });
        
                element.classList.add('seleccionado');
                this.getByCategory = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${element.value}`;
                console.log('Seleccionaste: ' + element.value);
                cargarPeliculas(this.getByCategory);
            });
        });
    }
}

customElements.define("category-sidebar", category);