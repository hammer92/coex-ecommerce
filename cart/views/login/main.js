import './style.css'
import templateLogin from './index.html?raw';

const IconSrc = '../../../assets/icons';

export function render(){
    const app = document.querySelector('#app');
    app.innerHTML = templateLogin.replace('${IconSrc}', IconSrc);
    
}