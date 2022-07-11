class CarouselJs{
    constructor(window, elemento){
        this.ventana = window
        this.query = elemento
    }
    move(){
        this.ventana.addEventListener('load', ()=>{
            new Glider(this.query, {
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

export default CarouselJs