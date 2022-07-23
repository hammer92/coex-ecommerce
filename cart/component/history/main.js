import templateHistory from './index.html?raw';
import './style.css'

export function render(dom, funcion){
    dom.innerHTML = templateHistory;
    document.addEventListener('load', funcion);
}

