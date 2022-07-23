import template from './index.html?raw';
import './style.css';
import '../cart-prod/main';

const parentNode = document.querySelector('#app')

const CrearFecha = (fecha) => {
    return `<h2 class="info__date">${fecha}</h2>`;
}
const CrearElemento = ({id, name, rating, genre, img}) =>{
    return `<cart-product title="${name}" cover="${img}" genre="${genre}" rating="${rating}"></cart-product>`;
}

export function render(order){
    const content = order.products.map(product => CrearElemento(product)).join('\n');
    const date = new Date(order.date).toDateString()
    parentNode.innerHTML = template.replace('${movies}',content).replace('${date}', CrearFecha(date));
}
