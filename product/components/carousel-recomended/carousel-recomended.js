import './carousel-recomended.css'
import MovieController from '../../controllers/movie/movieController';

class CarouselRecomended
{
    constructor(id){
        this.id = id
        this.apiController = new MovieController(this.id);
    }
    get template()
    {
        return `
        <div class="contenedor">
            <div class="carousel">
                <div class="carousel__contenedor">
                    <div id="lista" class=".carousel__lista">
                    </div>
                </div>
            </div>

        </div>
    `
    }
    move(){
        return new Glider(document.getElementById('lista'),
		{
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
						duration: 2.5}
					},
					{
					  // screens greater than >= 1024px
						breakpoint: 800,
						settings: {
						slidesToShow: 4,
						draggable: true,
						slidesToScroll: 4,
						itemWidth: 150,
						duration: 2.5}
					}
				]
		})
    }
	async renderItems(){
		const gliderCarousel = this.move()
		const images = await this.apiController.getRecommended()
		
		images.forEach( img => {
			const newElement = document.createElement("div")
			newElement.innerHTML = `
				<div class="carousel__elemento">
					<img class="carousel__img" src="${img.image_link}" alt="${img.name}">
					<div class="contenedor__elemento">
						<p class="carousel__titulo" >${img.name}</p>
					</div>
				</div>
				`
			gliderCarousel.addItem(newElement)
		})
	}
}

export default CarouselRecomended