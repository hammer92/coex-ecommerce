import './casting.css'
class CarruselCasting {
    constructor(){
       
    }
    get templateClass(){
        return `
        <div class="contenedor2">
            <div class="carousel2">
                <h2 class="titulo2">Recomendado</h2>
                <div class="carousel__contenedor2">
                    <div id="lista" class=".carousel__lista2">
					
                    </div>
                </div>
                <div role="tablist" class="carousel__indicadores2"></div>
            </div>

        </div>
    `
    }
    move(){
        return new Glider(document.getElementById('lista2'), {
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: true,
				dots: '.carousel__indicadores2',
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
    }
}
export default CarruselCasting;