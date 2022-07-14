
let indexDB = window.indexedDB;
let db;
let dbConection = indexDB.open('movies', 1);

export const getData = ()=>{
    let key = localStorage.key('shoppingCart');
    let getItem = localStorage.getItem(key);
    let data = JSON.parse(getItem);
    return data;
}

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

export const addMovieList = (object)=>{
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
