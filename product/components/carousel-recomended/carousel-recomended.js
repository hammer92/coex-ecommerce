import './carousel-recomended.css'

class CarouselRecomended
{
    constructor(window, elemento){
        this.ventana = window
        this.query = elemento
    }
    get templateClass()
    {
        return `
        <div class="contenedor">
            <div class="carousel">
                <h2 class="titulo">Recomendado</h2>
                <div class="carousel__contenedor">
                    <div id="oli" class=".carousel__lista">
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/001_p.jpeg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/002.jpg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/003.jpeg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/004.webp" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/002_p.webp" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/001_p.jpeg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                            <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/002.jpg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/002_p.webp" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/004.webp" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/1.png" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/001_p.jpeg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                            <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/002_p.webp" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                            <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/003.jpeg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/004.webp" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/002_p.webp" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                        <div class="carousel__elemento">
                            <img class="carousel__img" src="./components/carousel-recomended/img/001_p.jpeg" alt="Rock and Roll Hall of Fame">
                            <div class="contenedor__elemento">
                                <p class="carousel__titulo" >Nombre pelicula</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div role="tablist" class="carousel__indicadores"></div>
            </div>

        </div>
    `
    }
    move(){
        this.ventana.addEventListener('load', ()=>{
            new Glider(document.getElementById('oli'), {
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: true,
				dots: '.carousel__indicadores',
				arrows: {
					prev: '.carousel__anterior',
					next: '.carousel__siguiente'
				},
				responsive: [
					{
					  // screens greater than >= 775px
						breakpoint: 450,
						settings: {
						// Set to `auto` and provide item width to adjust to viewport
						slidesToShow: 2,
						slidesToScroll: 2,
						draggable: true,
						itemWidth: 150,
						duration: 0.25}
					},{
					  // screens greater than >= 1024px
						breakpoint: 800,
						settings: {
						slidesToShow: 4,
						draggable: true,
						slidesToScroll: 4,
						itemWidth: 150,
						duration: 0.25}
						}]
			})
        })
    }
}

export default CarouselRecomended