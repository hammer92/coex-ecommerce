import './casting.css'
class CarruselCasting {
    constructor(window, elemento){
        this.ventana = window
        this.query = elemento
    }
    get templateClass(){
        return `
       
        <div class="carrusel">
        <div class="slick-list" id="slick-prev">
            <div class="slick-track" id="track">
                <div class="slick">
                    <div>
                    
                          <picture>
                            <img src="./components/casting/img/image1.webp" alt="Image">
                            <h4> <small> Robert D j </small></h4>
                        </picture>

                    </div>
                </div>

                <div class="slick">
                    <div>
                            
                            <picture>
                                <img src="./components/casting/img/image3.webp" alt="Image">
                                <h4> <small> Actor 4 </small></h4>
                            </picture>
                    </div>
                </div>

                <div class="slick">
                    <div>
                            <picture>
                                <img src="./components/casting/img/image4.jpg" alt="Image">
                                <h4> <small> Actor 4 </small></h4>

                            </picture>
                    </div>
                </div>
                <div class="slick">
                    <div>
                            
                            <picture>
                                <img src="./components/casting/img/image5.webp" alt="Image">
                                <h4> <small> Actor 4 </small></h4>

                            </picture>
                    </div>
                </div>
                <div class="slick">
                  <div>
                          
                          <picture>
                              <img src="./components/casting/img/image5.webp" alt="Image">
                              <h4> <small> Actor 4 </small></h4>
                          </picture>
                  </div>
              </div>
              <div class="slick">
                <div>
                        <picture>
                            <img src="./components/casting/img/image5.webp" alt="Image">

                        </picture>
                        <h4> <small> Actor 4 </small></h4>
                </div>
            </div>
            <div class="slick">
              <div>
                      
                      <picture>
                          <img src="./components/casting/img/image5.webp" alt="Image">
                          <h4> <small> Actor 4 </small></h4>

                      </picture>

              </div>
          </div>

                



            </div>
            

        </div>
        <div role="tabList" class="carrusel-ind"></div>
    </div>
 
  

        `
    }
    move(){
        this.ventana.addEventListener('load', () => {
            new Glider(document.querySelector('.slick-track'), {
                duration: 3.5,
                slidesToShow: 4,
                slidesToScroll: 4,
                draggable: true,
                dots: '.carrusel-ind',
                
        
            });
        
         });
    }
}
export default CarruselCasting;