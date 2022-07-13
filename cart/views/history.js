import "../style.css";

const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const templateHistory = `

<div class="contenedor__history">
    <nav class="history__nav">
        <img src="/assets/icons/logo_coexbuster.svg" alt="logo" class="history__nav--logo">
        <h2 class="history__nav--email">CamilaYakoo@gmail.com<img src="/assets/icons/arrow_down.svg" alt="flecha_menu" class="history__nav--flecha"></h2>
    </nav>

    <section class="history__section">
    <a href=""><img src="/assets/icons/back-arrow-comb2.svg" alt="flecha_retroceso" class="history__flecha--retroceso"></a>
        <div class="history__section--orders">
            <span class="history__section--orders--word">My orders</span>
            <div class="history__section--orders--shopping">

                <div class="history__section--orders--items">
                                    
                </div>              
            </div>
        </div>
    </section>
    <button id="boton_guardar" style="color:white;"> Try it </button>
</div>
`;

export default templateHistory;