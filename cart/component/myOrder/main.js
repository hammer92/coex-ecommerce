import template from './index.html?raw';
import './style.css';
import '../cart-prod/main';

const parentNode = document.querySelector('#app')

const CreateDate = (fecha) => {
    return `<h2 class="info__date">${fecha}</h2>`;
}
const CreateCard = ({id, name, raiting, genre, img}) =>{
    return `<cart-product title="${name}" cover="${img}" genre="${genre}" rating="${raiting}" id="${id}"></cart-product>`;
}

export function render(pressed,dom,order){
    const MyDate = pressed.target.id; 
    let newOrder = JSON.parse(order);
    const Myorder = JSON.parse(order).filter(e => e.date == MyDate)[0]
    const [dateOrder,productsOrder] = [Myorder.date, Myorder.products] 
    const content = productsOrder.map(CreateCard).join('\n');
    const date = new Date(Number(dateOrder)).toDateString()
    dom.innerHTML = template.replace('${movies}',content).replace('${date}', CreateDate(date));
    
    const BACK = document.getElementById('back-arrow');
    BACK.addEventListener('click', () => {
        	location.pathname = '/cart/index.html';
        });
}
