import "./main-card.css";
import '../sec-info-card/sec-info-card.js'
import '../../../cart/component/starsComponent.js'

class MainCard {
    constructor( movieJson ){
        this.movie = movieJson
    }
    arr2str(arr){
        return JSON.stringify(arr)
    }
    get template() {
        const movie = this.movie
        console.log(movie)
        return `
            <div class="main-card">
                <section class="img-section" >
                    <figure class='main-figure'>
                        <img src="${movie.image}" alt="poster">
                        <div class="gradient"></div>
                    </figure>
                    <div class="sec-info-section" >
                        <sec-info-card text-arr='${ this.arr2str([movie.duration, movie.year]) }' ></sec-info-card>   
                        <sec-info-card text-arr='${ this.arr2str([movie.certification+'+']) }' ></sec-info-card>   
                    </div>
                </section>
                <section class="main-info-section">
                    <div class="main-info-header">
                        <span class="main-info-title">
                            ${movie.name}
                        </span>
                        <div class="cart-btn" ></div>
                    </div>
                    <div class="main-info-subtitle">
                        <span>
                            ${movie.genres[0] + ' | ' + movie.genres[1]}
                        </span>
                        <star-rating rating="${movie.calification}"></star-rating>
                    </div>
                    <div class="main-info-slot">

                    </div>
                </section>
            </div>
            `;
    }
}

export default MainCard;
