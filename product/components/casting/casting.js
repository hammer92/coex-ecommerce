import './casting.css'
class CarruselCasting {
    constructor(){
        
    }
    get templateClass(){
        return `
       
        <div class="carrusel">
        <div class="slick-list" id="slick-prev">
            <div class="slick-track2" id="track">
                <div class="slick">
                    
                       
                        <img src="./components/casting/img/image1.webp" alt="Image">
                        <h4> <small> Robert D j </small></h4>
                        
                   
      
                </div>
            </div>
        </div>
        <div role="tabList" class="carrusel-ind"></div>
    </div>
 
  
        `
    }
    move(){
        
         return  new Glider(document.querySelector('#track'), {
                duration: 3.5,
                slidesToShow: 4,
                slidesToScroll: 1,
                draggable: true,
                dots: '.carrusel-ind',
                
            });
        
        
    }
}
export default CarruselCasting;