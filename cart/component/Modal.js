//ARIR CARRITO
const cartContainer = document.querySelector('.cart-container');
const checkoutButton = document.querySelector('.checkout-button-container');

const openCart = () => {
    cartContainer.style.right = `0`
    // cartContainer.style.display = `block`
}

const closeCart = () => {
    cartContainer.style.right = `-30%`
    // cartContainer.style.display = `none`
}

const showCheckoutButton = (arrLength) => {  
    if(arrLength > 0) { 
        checkoutButton.style.display = 'block'
    }else{
        checkoutButton.style.display = 'none'

    }
}

//URL LISTADO DE PELIS
//https://api.themoviedb.org/4/list/${list_id}?page=1&api_key=dde722cb807472090076a60be85c0010
//https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=d2b1df9d64af7fb2a0342bd9d23e1449&language=es-MX&page=2

//URL PELIS POR ID
//https://api.themoviedb.org/3/movie/${movie_id}?api_key=dde722cb807472090076a60be85c0010&language=en-US

const imageUrl = `https://image.tmdb.org/t/p/w500/`
const cartListContainer = document.querySelector('.cart-list-container');
const listMovies = []
const moviesInCart = []


//cargar los datos del localStorage a moviesInCart para luego renderizar las movies del shoppingCart
window.onload = () => {
    const moviesLocalStorage = localStorage.getItem('shoppingCart') || []
    const moviesArr = JSON.parse(moviesLocalStorage)
    console.log(moviesArr);
        moviesArr.forEach( movie => {
            console.log(movie);
            moviesInCart.push(movie)
        })
        renderMovieInCart(moviesInCart)
}

//Obtengo las pelis de la lista numero 1
const getMovies = async () => {
    const listId = 1
    const response = await fetch(`https://api.themoviedb.org/4/list/${listId}?page=1&api_key=dde722cb807472090076a60be85c0010`).then(r => r.json()).catch(err => console.log(err));
    const moviesArr = response.results
    moviesArr.forEach( movie => {
    let movieObj = {
        title: movie.title,
        id: movie.id,
        genre: movie.genre_ids,
        poster: movie.poster_path,
        vote: movie.vote_average,
    }
    listMovies.push(movieObj)
    })
    renderListMovies(listMovies)
}

getMovies()

//reenderizo la lista de pelis
const renderListMovies = (list) => {
    let template = ''

    list.map(movie => { 
        let url = imageUrl + movie.poster
        const cart = `
        <div class="cart-list">
            <div class="cart">
                <div class="movie-image">
                    <img src="${url}" width="200" height="300" alt="imageMovie">
                </div>
                <div class="movie-title">
                    <h4>${movie.title}</h4>
                </div>
                <div class="movie-genre">
                    <span>Genero</span>
                </div>
                <div class="movie-value">
                    <span>${movie.vote}</span>
                </div>
        </div>
        <button onclick="addToCart(${movie.id})" type="button">Add to cart</button>
        </div>    
        `
        template += cart
    })

    cartListContainer.innerHTML = template
}


//funcion para añadir una peli al shopping cart
const addToCart = (id) => {
    const movie = listMovies.find(movie => movie.id === id) 
    const indexMovies = moviesInCart.map(movie => movie.id);
    //comprobamos que la pelicula seleccionada no este repetida en moviesCart
    if(!indexMovies.includes(movie.id)){
        moviesInCart.push(movie);
        renderMovieInCart(moviesInCart) 
        showCheckoutButton(moviesInCart.length)
        openCart()   
        localStorage.setItem('shoppingCart', JSON.stringify(moviesInCart))
    }else {
        console.log('peli repetida');
        return
    }
}

const cartList = document.querySelector('.cart-list')

//renderizar moviesInCart
const renderMovieInCart = (moviesArray) => {
    console.log(moviesArray);
    let template = ``
    moviesArray.map(movie => {
        let url = imageUrl + movie.poster
        const cart = `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img 
                    src="${url}" alt="movie-img">
                <div class="cart-info-container">
                    <h2>${movie.title}</h2>
                    <span>genero</span>
                    <span>${movie.vote}</span>
                </div>
            </div>
            <div class="delete-button" onclick="deleteMovieInCart(${movie.id})">X</div>
        </div>
        `
        template += cart
    })
    cartList.innerHTML = template
}

//funcion de eliminar elemento de shopping cart
const deleteMovieInCart = (id) => {   
    let indexMovie = moviesInCart.findIndex(movie => movie.id === id)
    moviesInCart.splice(indexMovie, 1)
    showCheckoutButton(moviesInCart.length)
    localStorage.setItem('shoppingCart', JSON.stringify(moviesInCart))
    renderMovieInCart(moviesInCart)
}
