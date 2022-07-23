import templateHistory from './index.html?raw';


export function render(dom, funcion){
    dom.innerHTML = templateHistory;
    document.addEventListener('load', funcion);
}