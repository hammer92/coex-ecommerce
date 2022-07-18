let db;
let indexDB = window.indexedDB;
export let dbConection = indexDB.open('movies', 1);


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


export const getData = ()=>{
    let getItem = localStorage.getItem('shoppingCart');
    let data = JSON.parse(getItem);
    return data;
}
