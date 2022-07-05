import './style.css'
import 'normalize.css'
// const Url = new URL(window.location)
const app = document.querySelector('#app');


const template = `
<h1>Hello world!</h1>
<a href="/home/index.html">navega al home</a>
`;

app.innerHTML = template

