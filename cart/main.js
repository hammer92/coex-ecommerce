import '../style.css'
import './style.css'
import templateIndex from './views/index.js';
const Url = new URL(window.location)
const urlParams = new URLSearchParams(Url.searchParams);
let indexDB = window.indexedDB;
let db;
let dbConection = indexDB.open('movies', 1);

const app = document.querySelector('#app');


const template = `
<h1>Hello world! Cart Page</h1>
${urlParams.get("product")}
<button id="accion"> Cambio </button>
<a href="/index.html">Home</a>
`;

app.innerHTML = template;

//DataBase 
dbConection.onsuccess = ()=>{
    db = dbConection.result;
    console.log('Conexion exitosa');
}

dbConection.onupgradeneeded = (e)=>{
   db = e.target.result;
   const dbCollection =  db.createObjectStore('movies', {
       autoIncrement: true
   })
};

const addMovieList = (object)=>{
    db = dbConection.result;
    let IDBtransaction = db.transaction('movies', 'readwrite');
    let objectStore = IDBtransaction.objectStore('movies');
    objectStore.add(object);
    IDBtransaction.addEventListener('complete', ()=>{
        console.log('Objecto agregado correctamente')
    })
}



const readMovieList = ()=>{
    db = dbConection.result;
    let IDBtransaction = db.transaction('movies', 'readonly');
    let objectStore = IDBtransaction.objectStore('movies');
    let cursor = objectStore.openCursor();
    cursor.addEventListener('success', ()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue()
        }else{
            console.log("Todos los datos fueron leidos");
        }
    })
}

const readMovie = (id)=>{
    db = dbConection.result;
    let IDBtransaction = db.transaction('movies', 'readonly');
    let objectStore = IDBtransaction.objectStore('movies');
    let cursor = objectStore.get(id)
    cursor.addEventListener('success', ()=>{
        if(cursor.result){
            console.log(cursor.result);
        }else{
            console.log("Todos los datos fueron leidos");
        }
    })
}

const readKey = ()=>{
    db = dbConection.result;
    let IDBtransaction = db.transaction('movies', 'readonly');
    let objectStore = IDBtransaction.objectStore('movies');
    let cursor = objectStore.getAllKeys()
    cursor.addEventListener('success', ()=>{
        if(cursor.result){
            console.log(cursor.result);
        }else{
            console.log("Todos los datos fueron leidos");
        }
    })
}

//End DataBase 
const button = document.getElementById('accion');
button.addEventListener("click",() =>{
    const h1 = document.querySelector("h1")
    console.log("click", h1.style.color)
    if(h1.style.color === "blue")
        h1.style.color = "red";
    else
        h1.style.color = "blue";
})
