class cardMovie extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }

    getTemplate(){
        let template = document.createElement('template');
        template.innerHTML = /*html*/`
			<div class="pelicula">
                <div class="arr">
                    <div class="hover">
                        <p>${pelicula.overview}</p>  
                    </div>
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                </div>
                <div class="aba">
                    <div class="info">
                        <div>
                            ${generoName}
                        </div>
                        <div>
                            <star-rating rating="${pelicula.vote_average}"></star-rating>
                        </div>
					</div>
					<div>
						<button class ="carrito" onclick="addToCart(${pelicula.id})" id="carrito">Add to card</button>
					</div>
            	</div>
			</div>
            ${this.getStyle()}
        `
        return template;
    }

    getStyle(){
        return html`
            <style>
                .pelicula {
                    transition: all 0.25s;
                    display: grid;
                    grid-template-rows: repeat(2,1fr);
                    height: 400px;
                    margin-bottom: 50px;
                }
                .app .pelicula .titulo {
	                font-size: 16px;
	                font-weight: 600;
                }

                .app .pelicula .arr{
                    height: 300px;
                }

                .app .pelicula .arr .poster {
                    width: 100%;
                    height: 100%;
                    border-top-right-radius: 15px;
                    border-top-left-radius: 15px;
                }
                .aba{
                    background-color: #02021C;
                    border-bottom-right-radius: 15px;
	                border-bottom-left-radius: 15px;
                }

                .info{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-left: 15px;
                    padding-right: 15px;
                    margin-bottom: 20px;
                    margin-top: 20px;
                    color: #f9f9f9;
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
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connetedCallback(){
        this.render()
    }
}

customElements.define('card-movie', cardMovie);