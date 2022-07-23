import './style.css';
import './lib/conection.js';
import { dbConection } from './lib/conection.js';
import * as HistoryComponent from '../cart/component/history/main.js';
import * as MyOrder from '../cart/component/myOrder/main.js';
import * as LoginComponent from './component/login/main.js'
const sesion = localStorage.getItem('iniciosesion');

const app = document.querySelector('#app');

const user = new Object();
user.email = 'admin@admin.com';
user.password = 'admin';

//Peticiones a la base de datos 
const readMovie = (e)=>{
	let id = parseInt(e.target.id);
	let db = dbConection.result;
	let IDBtransaction = db.transaction('movies', 'readonly');
	let objectStore = IDBtransaction.objectStore('movies');
	let cursor = objectStore.get(id);
	let data;
	cursor.addEventListener('success', ()=>{
		data = cursor.result;
	})

	IDBtransaction.oncomplete = ()=> {
		console.log(data)
		RenderMyOrder(data);
		// MyOrder(app,data);
	}
}

//Integracion entre la base de datos con la vista del historial de compras
function call_date(movies, keys) {
    let array_date = [];
    const date = new Date();

    let output =
        String(date.getDate()).padStart(2, '0') +
        '.' +
        String(date.getMonth() + 1).padStart(2, '0') +
        '.' +
        date.getFullYear();

    array_date.push(output);

    let capa_contenedor = document.getElementById('historyShopping');

    for (let i = 0; i < movies.length && i < keys.length; i++) {
        let longitud_movies = movies[i].length;
        const templateCart = `
            <div class="history_section-orders">
            <div class="history__section--orders--items">
                <h1 style="color: white;">${output}</h1>
                <h2 style="color: white;">${longitud_movies} movies</h2>
            </div>
            <img src="/assets/icons/angle-small-right-free-icon-font.svg" style="width: 20px;" id="${keys[i]}" class="myorderDirection">
            </div>         
        `
        capa_contenedor.innerHTML += templateCart;
    }
	localStorage.setItem('fecha',output);
	const ORDER_LIST = document.querySelectorAll('.myorderDirection');
	for (let element of ORDER_LIST) {
		element.addEventListener('click', readMovie);
	}
}

const readMovieList = ()=>{
    dbConection.addEventListener('success', ()=>{
        let db = dbConection.result;
        let IDBtransaction = db.transaction('movies', 'readonly');
        let objectStore = IDBtransaction.objectStore('movies');
        let cursor = objectStore.openCursor();
        let keyList = objectStore.getAllKeys();
        let data = [];
        let key;
        cursor.addEventListener('success', ()=>{
            if(cursor.result){
                data.push(cursor.result.value);
                cursor.result.continue()
            }else{
                console.log("Todos los datos fueron leidos");
            }
        });
        keyList.addEventListener('success', ()=>{
            key = keyList.result;
			console.log(data);
			console.log(key);
        });
        IDBtransaction.oncomplete = ()=>{
            return call_date(data, key);
        }
    })
}

//Fin de las peticiones a la base de datos


function RenderMyOrder(data) {
	MyOrder.render(data);
}

HistoryComponent.render(app,localStorage.getItem('orders'));

 // Refactorizacion de componente login 

/* function RenderLogin (app) {
	LoginComponent.render(app);
}

RenderLogin(app) */

LoginComponent.logueo(app,sesion);
