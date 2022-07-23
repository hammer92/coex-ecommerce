import template from './index.html?raw';
import './style.css';
import { dbConection } from '../../lib/conection.js';
import '../cartProdComponent.js';

const container = document.createElement('div');

const CrearFecha = (fecha) => {
    return `<h2 class="info__date">${fecha}</h2>`;
}
const CrearElemento = ({title, poster_path, genres, vote_average}) =>{
    const genero = genres[0].name;
    return `<cart-product title="${title}" cover="https://image.tmdb.org/t/p/w500${poster_path}" genre="${genero}" rating="${vote_average}"></cart-product>`;
}

export function render(dom,listado){
    const arr = listado.map(CrearElemento).join('\n');
    const fecha = localStorage.getItem('fecha');
    dom.innerHTML = template.replace('${movies}',arr).replace('${date}', CrearFecha(fecha));
}
