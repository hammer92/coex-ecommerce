import '../../cart/component/starsComponent.js';

class cardMovie extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }

    static get observedAttributes(){
        return ['overview', 'img', 'gender', 'vote', 'id']
    }

    attributeChangedCallback(value, oldValue, newValue){
        if (oldValue !== newValue) {
            this[value] = newValue;
        }
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/ `
            <div class="pelicula">
                <div class="arr">
                    <div class="hover">
                        <p>${this.overview}</p>  
                    </div>
                    <img class="poster" src="https://image.tmdb.org/t/p/w500${this.img}">
            
                </div>
                <div class="aba">
                    <div class="info">
                        <div>
                            ${this.gender}
                        </div>
                        <div>
                            <star-rating rating="${this.vote}"></star-rating>
                        </div>
                    </div>
                    <div>
                        <button class ="carrito" onclick="addToCart(${this.id})" id="carrito">Add to card</button>
                    </div>
                </div>
            </div>
            ${this.getStyle()}
        `
        return template;
    }

    getStyle(){
        return /*html*/ `
            <style>
                .pelicula {
                    transition: all 0.25s;
                    display: grid;
                    grid-template-rows: repeat(2,1fr);
                    height: 400px;
                    width:220px;
                    margin-bottom: 50px;

                }
                .aba{
                    background-color: #02021C;
                    border-bottom-right-radius: 15px;
                    border-bottom-left-radius: 15px;
                }
                .carrito{
                    width: 196px;
                    height: 40px;
                    background: #7B2ABF;
                    border-radius: 10px;
                    color: #f9f9f9;
                    border: none;
                    font-weight: bold;
                    margin-bottom: 20px;
                    cursor: pointer;

                }
                .hover{
                    position: absolute;
                    color: white;
                    background-color: rgba(0,0,0,0.95);
                    height: 300px;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                    width: 220px;
                    overflow: hidden;
                    text-align: justify;
                    font-size: 12px;
                    opacity: 0;
                }

                .hover:hover{
                    opacity: 1;
                }

                .hover *{
                    margin: 10px;
                }

                .titulo {
                    font-size: 16px;
                    font-weight: 600;
                }

                .arr{
                    height: 300px;
                }

                .poster {
                    width: 100%;
                    height: 100%;
                    border-top-right-radius: 15px;
                    border-top-left-radius: 15px;
                }
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('card-movie', cardMovie);