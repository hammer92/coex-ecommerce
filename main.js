import './style.css'
import 'normalize.css'
// const Url = new URL(window.location)
const app = document.querySelector('#app');


const template = `
<h1>Hello world!</h1>
<a href="/cart/index.html">Cart Page</a>
<a href="/product/index.html">Product Page</a>
<a href="/shop/index.html">Shop Page</a>
`;

app.innerHTML = template

