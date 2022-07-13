import "./main-card.css";
import '../sec-info-card/sec-info-card.js'

class MainCard {
    constructor( resJson ){
        this.name = resJson.name
        this.genres = resJson.genres
        this.calification = resJson.calification
        this.duration = resJson.duration
        this.year = resJson.year
        this.clasification = resJson.clasification
        this.image = resJson.image
        this.synopsis= resJson.synopsis
    }
    arr2str(arr){
        return JSON.stringify(arr)
    }
    get template() {
        return `
            <div class="main-card">
                <section class="img-section" >
                    <figure class='main-figure'>
                        <img src="${this.image}" alt="poster">
                        <div class="gradient"></div>
                    </figure>
                    <div class="sec-info-section" >
                        <sec-info-card text-arr='${ this.arr2str([this.duration, this.year]) }' ></sec-info-card>   
                        <sec-info-card text-arr='${ this.arr2str([this.clasification+'+']) }' ></sec-info-card>   
                    </div>
                </section>
                <section class="main-info-section">
                    <div class="main-info-header">
                        <span class="main-info-title">
                            ${this.name}
                        </span>
                        <span class='cart-btn' >add2cart</span>
                    </div>
                    <div class="main-info-subtitle">
                        <span>
                            ${this.genres[0] + ' | ' + this.genres[1]}
                        </span>
                        <!-- stars icons-->
                    </div>
                    <div class="main-info-slot">

                    </div>
                </section>
            </div>
            `;
    }
}

export default MainCard;
