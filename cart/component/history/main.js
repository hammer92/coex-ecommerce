import templateHistory from './index.html?raw';
import './style.css'




const CreateCard  = ({date, products}) =>{
    const len = products.length;
    const formatDate = new Date(Number(date)).toLocaleString();
    return `<div class="history_section-orders">
            <div class="history__section--orders--items">
            <h1 style="color: white;">${formatDate}</h1>
            <h2 style="color: white;">${len} movies</h2>
            </div>
                <img src="/assets/icons/angle-small-right-free-icon-font.svg" style="width: 20px;" class="myorderDirection" id="${date}">
            </div>`
}   
export function render(dom, listado){
    listado = JSON.parse(listado);
    const arr = listado.map(CreateCard).join('\n');
    dom.innerHTML = templateHistory.replace('${movie}',arr);
}

