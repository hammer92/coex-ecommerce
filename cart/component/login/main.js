import './style.css'
import templateLogin from './index.html?raw';

const IconSrc = '../../../assets/icons';

export function render(dom){
    // const app = document.querySelector('#app');
    dom.innerHTML = templateLogin.replace('${IconSrc}', IconSrc);
    
}



