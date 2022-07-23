import './style.css'
import '../../../cart/component/stars-rating/starsComponent'
import template from './index.html?raw'
/**
 * HOW TO IMPLEMENT:
 * First import the module and invoke the 'render()' and 'initialize()' methods:
 *      import * as shoppingCart from './cart/component/cart-modal/main.js'
 *      shoppingCart.render()
 *      shoppingCart.initialize()
 * Then, define an eventListener for the 'add to cart' button (we'll suppose a variable named 'send' which represents it)
 *      send.addEventListener('click', function(){ shoppingCart.add(movie)})
 * The argument 'movie' for the 'add()' method must follow the following structure:
 *      example = {
 *          id: '54',
 *          name:'Top Gun: Maverick',
 *          rating:'7.5',
 *          genre:'Action',
 *          img: 'https://image.tmdb.org/t/p/w500//62HCnUTziyWcpDaBO2i1DX17ljH.jpg'}
 */
// variables
const parentNode = document.querySelector('#app')
const node = document.createElement('div')
const classes = ['shopping-cart']
const myOrdersPath = '/cart/index.html'
// DOM elements
let cartContainer
let cartItems
let checkoutBtn
let closeBtn
let errBar
let errMssg
// state modification functions
export function render(){
    /**
     * Renders the element inside #app node.
     */
    if (parentNode === undefined | null){
        return console.error('Unable to render shoppingCart. Must have an #app element in DOM.')
    }
    // dom manipulation
    node.classList = classes
    node.innerHTML = template
    parentNode.append(node)
    // dom elements queries
    cartItems = node.querySelector('.cart-list')
    cartContainer = node.querySelector('.cart-container')
    closeBtn = node.querySelector('.closeBtn')
    checkoutBtn = node.querySelector('.checkout-button-container')
    errBar = node.querySelector('.error-bar-container')
    errMssg = node.querySelector('#errorMessage')
    // rendering stored values
    for(let movie of moviesInCart()){
        renderMovie(movie)
    }
    // success mssg
    console.log('Shopping cart rendered')
}
export function initialize(){
    /**
     * Initializes shoppingCart to listen for 'add2cart' events and other events.
     */
    node.addEventListener('add2cart', eventHandler)
    closeBtn.addEventListener('click', close)
    checkoutBtn.addEventListener('click', goToCheckout)
    console.log('Shopping cart initialized')
}
export function turnOff(){
    /**
     * Turns off add2cart eventListener for shoppingCart.
     */
    node.removeEventListener('add2cart', eventHandler)
    checkoutBtn.removeEventListener('click', goToCheckout)
    console.log('Shopping cart turned off')
}
export function add(movie){
    console.log('se ejecuto add')
    let event =  new CustomEvent('add2cart', {
        bubbles: false,
        detail: { movie }
    })
    node.dispatchEvent(event)
}
export function open(){
    console.log('se ejecuto open')
    cartContainer.style.right = `0`
}
export function close(){
    cartContainer.style.right = `-30%`
}
export function clear(){
    localStorage.removeItem('moviesInCart')
    cartItems.innerHTML = ''
}
// private functions
function eventHandler(event){
    /**
     * Sets the actions to do when 'add2cart' event is detected
     */
    let movie = event.detail.movie
    if(storeMovie(movie)){
        renderMovie(movie)
    }else{
        throwError('Movie already added')
    }
}
function moviesInCart(){
    /**
     * Retrieves movies added to cart in localStorage
     */
    let movies = JSON.parse(localStorage.getItem('moviesInCart'))
    return movies || []
}
function ordersHistory(){
    /**
     * Retrieves the orders history stored in localStorage
     */
     let orders = JSON.parse(localStorage.getItem('orders'))
     return orders || []
}
function storeMovie(movie){
    /**
     * Stores a movie in localStorage. Returns false if the movie was already in cart, and true if the movie wasnt and had been succesfully added.
     */
    let storedMovies = moviesInCart()
    if (isInCart(movie.id)){
        return false
    }else{
        storedMovies.push(movie)
        localStorage.setItem("moviesInCart", JSON.stringify(storedMovies))
        return true
    }
}
function renderMovie(movie){
    /**
     * Renders a given movie inside carItems element
     */
    // creating html structure of the item
    const itemContainer = document.createElement('div')
    const item = `
        <div class="cart-item">
            <div class="cart-item-img">
                <img 
                src="${movie.img}" alt="movie-img">
            <div class="cart-info-container">
                <h2>${movie.name}</h2>
                <span>${movie.genre}</span>
                <star-rating rating="${movie.rating}"></star-rating>
        </div>
        </div>
            <div class="flush-item-btn">
                X
            </div>
        </div>
    `
    itemContainer.setAttribute('id', `movie-${movie.id}`)
    itemContainer.innerHTML = item
    // modifying DOM
    cartItems.append(itemContainer)
    // adding delete functionality
    node.querySelector(`#movie-${movie.id} .flush-item-btn`)
        .addEventListener('click', function()
        {
            deleteMovie(movie.id)
        })
}
function deleteMovie(id){
    /**
     * Deletes a movie from the DOM and the localStorage based on a given id
     */
    // deleting from localStorage
    let movies = moviesInCart().filter((movie) => !(movie.id == id))
    localStorage.setItem('moviesInCart', JSON.stringify(movies))
    // deleting from DOM
    node.querySelector(`#movie-${id}`)
        .remove()
}
function saveOrder(){
    // getting current values
    let movies = moviesInCart()
    const orders = ordersHistory()
    console.log(orders)
    const order = {
        date: Date.now(),
        products: movies
    }
    // updating values
    orders.push(order)
    console.log(orders)
    // storing values
    localStorage.setItem('orders', JSON.stringify(orders))
    localStorage.setItem('moviesInCart', '[]')
    // updating and redirecting
    clear()
    close()
    window.location.href = myOrdersPath
}
function goToCheckout(){
    const movies = moviesInCart()
    if(movies.length >= 1){
        saveOrder()
    }else{
        throwError('There are no products...')
    }
}
function isInCart(id){
    /**
     * Checks if a movie is already stored inside localStorage based on a given id
     */
    let addedIds = moviesInCart().map( movie => movie.id )
    return addedIds.includes(id)
}
function throwError(mssg){
    /**
     * Throws an informative error to the user with a custom message.
     */
    errMssg.innerText = mssg
	errBar.style.display = 'block'
	errBar.style.opacity = '1'
	setTimeout(() => {
        errBar.style.display = 'none'
        errBar.style.opacity = '0'
	}, 2000)
}