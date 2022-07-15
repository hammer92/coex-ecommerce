let db;
let indexDB = window.indexedDB;
let dbConection = indexDB.open('movies', 1);


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
    let db = dbConection.result;
    let IDBtransaction = db.transaction('movies', 'readwrite');
    let objectStore = IDBtransaction.objectStore('movies');
    let data = objectStore.add(object);
    IDBtransaction.addEventListener('complete', ()=>{
        if (data.error) {
            console.log("error revise la funcion");
        }else{

            console.log('Objecto agregado correctamente')

        }
    })
}

const readMovieList = ()=>{
    dbConection.addEventListener('success', ()=>{
        let db = dbConection.result;
        let IDBtransaction = db.transaction('movies', 'readonly');
        let objectStore = IDBtransaction.objectStore('movies');
        let cursor = objectStore.openCursor();
        cursor.addEventListener('success', ()=>{
            if(cursor.result){
                // console.log(cursor.result.value);
                cursor.result.continue()
            }else{
                console.log("Todos los datos fueron leidos");
            }
        })
    })
}

const readMovie = (id)=>{
    dbConection.addEventListener('success', ()=>{
        let db = dbConection.result;
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
    })
}

const readKey = ()=>{
    dbConection.addEventListener('success', ()=>{
        let db = dbConection.result;
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
    })
}

export const getData = ()=>{
    let getItem = localStorage.getItem('shoppingCart');
    let data = JSON.parse(getItem);
    return data;
}
