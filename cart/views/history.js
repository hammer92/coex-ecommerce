import "../style.css";

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const templateHistory = `

<div class="contenedor__history">

    <nav class="history__nav">
        <img src="/assets/icons/logo_coexbuster.svg" alt="logo" class="history__nav__logo">
        <h2 class="history__nav__email">CamilaYakoo@gmail.com<img src="/assets/icons/arrow_down.svg" alt="flecha_menu" class="history__nav__flecha"></h2>
        
    </nav>

    <section class="history__section">
        <img src="/assets/icons/back-arrow-comb2.svg" alt="flecha_retroceso" class="history__flecha__retroceso">
        <div class="history__section__orders">
            <span class="history__section__orders__word">My orders</span>
            <div class="history__section__orders__shopping">
                <div class = "history__section__orders__items">
                    <h1>04.25.2021</h1>
                    <img src="/assets/icons/angle-small-right-free-icon-font.svg" alt="flecha a la derecha" width="25px">                    
                </div>              
                <h2> 6 articles </h2>  
                <div class = "history__section__orders__items">
                    <h1>04.25.2021</h1>
                    <img src="/assets/icons/angle-small-right-free-icon-font.svg" alt="flecha a la derecha" width="25px">                    
                </div>              
                <h2> 6 articles </h2> 
                
            </div>
        </div>
    </section>
    <button id="boton_guardar" style="color:white;"> Try it </button>
</div>

`;

// const boton_g = document.getElementById("boton_guardar");

// function call_date() {
//     // const hoy = new Date();
//     // let day = hoy.getDay();
//     console.log("Hola");
// }
// boton_g.addEventListener("click", async call_date, false);

// const button = document.querySelector("button");

// /* Callback function */
// function alertButton() {
//     alert('Hi native JavaScript');
// }

// /* Event listener */
// button.addEventListener("click", alertButton, false);


export default templateHistory;