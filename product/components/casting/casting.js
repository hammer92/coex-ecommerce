import '../casting.css'
class CarruselRecommended {
    constructor(){

    }
    get template(){
        return `
        <div class="carrusel">
        <div class="slick-list" id="slick-prev">
            <div class="slick-track" id="track">
                <div class="slick">
                    <div>
                          <picture>
                            <img src="img/image1.webp" alt="Image">
                            <h4> <small> Robert D j </small></h4>
                        </picture>

                    </div>
                </div>

                <div class="slick">
                    <div>
                            
                            <picture>
                                <img src="img/image3.webp" alt="Image">
                                <h4> <small> Actor 4 </small></h4>
                            </picture>
                    </div>
                </div>

                <div class="slick">
                    <div>
                            <picture>
                                <img src="img/image4.jpg" alt="Image">
                                <h4> <small> Actor 4 </small></h4>

                            </picture>
                    </div>
                </div>
                <div class="slick">
                    <div>
                            
                            <picture>
                                <img src="img/image5.webp" alt="Image">
                                <h4> <small> Actor 4 </small></h4>

                            </picture>
                    </div>
                </div>
                <div class="slick">
                  <div>
                          
                          <picture>
                              <img src="img/image5.webp" alt="Image">
                              <h4> <small> Actor 4 </small></h4>
                          </picture>
                  </div>
              </div>
              <div class="slick">
                <div>
                        <picture>
                            <img src="img/image5.webp" alt="Image">

                        </picture>
                        <h4> <small> Actor 4 </small></h4>
                </div>
            </div>
            <div class="slick">
              <div>
                      
                      <picture>
                          <img src="img/image5.webp" alt="Image">
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
}