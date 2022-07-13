// import '../style.css';
import './style.css';
import myorderView from './views/myorderView.js';
const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);
const UNIQUE_USER_TOKEN = 'ABC';

const app = document.querySelector('#app');

const template = `
<h1>Hello world! Cart Page</h1>
<a href="/index.html">Home</a>
<button id="myorder">MyOrder</button>
`;

app.innerHTML = template;

// ------------------------
// MyOrder View

const myorder = document.getElementById('myorder');
myorder.addEventListener('click', () => {
	if (UNIQUE_USER_TOKEN === 'ABC') {
		app.innerHTML = myorderView;
		const BACK = document.getElementById('back-arrow');
		BACK.addEventListener('click', () => {
			window.location.reload();
		});
	} else {
		console.log('denegado');
	}
});

// ------------------------
