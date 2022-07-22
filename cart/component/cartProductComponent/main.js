import './style.css'
import templateCartProduct from './index.html?raw';
const titleMovie = ''
const imgCover = ''
const genreItem = ''
const ratingItem = ''

export function renderCartProduct(){
    const app = document.querySelector('#app');
    app.innerHTML = templateCartProduct.replace('${title-movie}', imgCover);
    
}