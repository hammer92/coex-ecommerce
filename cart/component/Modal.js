
//ARIR CARRITO
const cartContainer = document.querySelector('.cart-container');
const checkoutButton = document.querySelector('.checkout-button-container');

const openCart = () => {
    cartContainer.style.right = `0`
}

const closeCart = () => {
    cartContainer.style.right = `-30%`
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

//funcion para añadir una peli al shopping cart
const addToCart = async(id) => {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dde722cb807472090076a60be85c0010&language=en-US`).then(r=> r.json()).catch(e=> console.log(e))

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
const renderMovieInCart = async(moviesArray) => {
    const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=dde722cb807472090076a60be85c0010&language=en-US`).then(r=> r.json()).catch(e=> console.log(e))
    let template = ``
    moviesArray.map(movie => {
        let genreMovie = ''
        genres.genres.forEach(genero => {
            if(genero.id === movie.genres[0].id){
                genreMovie = genero.name
            }
        })
        let url = imageUrl + movie.poster_path
        const cart = `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img 
                    src="${url}" alt="movie-img">
                <div class="cart-info-container">
                    <h2>${movie.title}</h2>
                    <span>${genreMovie}</span>
                    <star-rating rating="${movie.vote_average}"></star-rating>
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
