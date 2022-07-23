import cargarPeliculas from "../controller/loadMovie.js";
import pageCall from "../controller/pageCall.js";

let peticion = await cargarPeliculas('');
let current = await peticion.getMovies(peticion.allMovies);
class pagination extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html */ `
            <div class="pagination">
                <div class="page" id="prev">Previous Page</div>
                <div class="current" id="current">1</div>
                <div class="page" id="next">Next Page</div>
            </div>
            ${this.getStyle()}
        `
        return template;
    }
    getStyle(){
        return /*html*/ `
            <style>
                .pagination{
                    position: fixed;
                    bottom: 50px;
                    left: 0;
                    right: 0;
                    margin: 0px auto;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    z-index: 6;
                }

                .page{ 
                    border: 1px solid #7B2ABF;
                    background-color: #02021C;
                    /* padding: 5px; */
                    padding-left: 5px;
                    color: white;
                    padding-right: 5px;
                    font-size: 15px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    padding-right: 15px;
                    padding-left: 15px;
                    cursor:pointer;
                    margin:5px;
                }

                .page.disabled{
                    cursor:not-allowed;
                    color:gray;
                }

                .current{
                    border: 1px solid #7B2ABF;
                    background-color: #02021C;
                    /* padding: 5px; */
                    padding-left: 5px;
                    color: gray;
                    padding-right: 5px;
                    font-size: 15px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    padding-right: 15px;
                    padding-left: 15px;
                    cursor:pointer;
                    margin:5px;
                }
            </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    data(){
        return{
            currentPage : current.currentPage,
            totalPages : current.totalPages,
            
        }
    }
    validation(){
        let prev = this.shadowRoot.getElementById('prev');
        let next = this.shadowRoot.getElementById('next');
        let current = this.shadowRoot.getElementById('current');
        let data = this.data() 
        current.innerText = data.currentPage;
        if (data.currentPage <= 1) {
            prev.classList.add('disabled');
            next.classList.remove('disabled')
        } else if (data.currentPage >= data.totalPages) {
            prev.classList.remove('disabled');
            next.classList.add('disabled')
        } else {
            prev.classList.remove('disabled');
            next.classList.remove('disabled')
        }
    }
    connectedCallback(){
        this.render();
        this.validation()
        let data = this.data();
        let nextPage= data.currentPage+1
        let prevPage= data.currentPage-1
        let prev = this.shadowRoot.getElementById('prev');
        let next = this.shadowRoot.getElementById('next');
        next.addEventListener('click', ()=>{
            if (nextPage <= data.totalPages) {
                pageCall(nextPage);
            }
        })
        
        prev.addEventListener('click', ()=>{
            if (prevPage > 0) {
                pageCall(prevPage);
            }
        })
        
    }
    
}

customElements.define('pagination-bar', pagination);