import './casting.css'
class CarruselCasting {
    constructor(){
        
    }
    get templateClass(){

        return `
        <div class="container">
            <div class="carousel">
                <h2 class="titulo"> Casting</h2>
                <div class="carousel__container">
                    <div id="lista2" class="carousel__list">
                        
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
                    duration:4.5,
                    
                    responsive: [
                        {
                          // screens greater than >= 775px
                            breakpoint: 450,
                            settings: {
                            // Set to `auto` and provide item width to adjust to viewport
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            draggable: true,
                            itemWidth: 100,
                            duration: 3.5}
                        },{
                          // screens greater than >= 1024px
                            breakpoint: 800,
                            settings: {
                            slidesToShow: 4,
                            draggable: true,
                            slidesToScroll: 4,
                            itemWidth: 100,
                            duration: 3.5}
                            }]
                })
        }
}

export default CarruselCasting;