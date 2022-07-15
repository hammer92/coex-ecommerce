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

export const readMovie = (id)=>{
    dbConection.addEventListener('success', ()=>{
        let db = dbConection.result;
        let IDBtransaction = db.transaction('movies', 'readonly');
        let objectStore = IDBtransaction.objectStore('movies');
        let cursor = objectStore.get(id)
        let data;
        cursor.addEventListener('success', ()=>{
            data = cursor.result;
        })

        IDBtransaction.oncomplete = ()=> {
            sessionStorage.setItem('dbTransferens', JSON.stringify(data));
        }
    })
}

export const exportData = () =>{
    let getItem = sessionStorage.getItem('dbTransferens');
    let data = JSON.parse(getItem);
    return data
}

//Integracion entre la base de datos con la vista del historial de compras
export const renderOrder = (e) => {
    let id = e.target.id;
    readMovie(id);
    let data = exportData();
    console.log(data)
};

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
            <div class="history__section--orders--items">
                <h1 style="color: white;">${output}</h1>
                <img src="/assets/icons/angle-small-right-free-icon-font.svg" style="width: 20px;" id="${keys[i]}" class="myorderDirection">
            </div>
            <h2 style="color: white;">${longitud_movies} movies</h2>
        </button>
         `
        capa_contenedor.innerHTML += templateCart;
    }

    const ORDER_LIST = document.getElementsByClassName('myorderDirection');
    for (let element of ORDER_LIST) {
        element.addEventListener('click', renderOrder);
    }
}

export const readMovieList = ()=>{
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
        });
        IDBtransaction.oncomplete = ()=>{
            return call_date(data, key);
        }
    })
}

export const getData = ()=>{
    let getItem = localStorage.getItem('shoppingCart');
    let data = JSON.parse(getItem);
    return data;
}
