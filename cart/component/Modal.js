class Modal extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }
    getTemplate(){
        const template = document.createElement("template")
        template.innerHTML = `
        <section>
            <div class="cart-slider">
                <div class="cart-container">
                    <div class="title-container">
                        <h2 class="title-cart">Shopping Cart</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" onclick="closeCart()" width="30px" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
                    </div>
                    <div class="cart-list"></div>
                    <div class="checkout-button-container">
                        <a href="#" class="checkout-button">CHECKOUT</a>
                    </div>
                </div>
            </div>
        </section>
        `
        return template
    }
    getStyles(){
        return `
        <style>
            :host{
                --gray-primary: #C7C7C7;
                --gray-secondary: #797979;
                --purple-bg: #030328;
                --purple-dark: #02021C;
                --purple-fil: invert(22%) sepia(83%) saturate(2189%) hue-rotate(260deg) brightness(87%) contrast(102%);
                --purple-gray-fil: invert(17%) sepia(51%) saturate(842%) hue-rotate(207deg) brightness(94%) contrast(88%);
                --purple-input: #110E35;
                --purple: #7b2abf;
                --red-warning: #E45871;
                --white: #fff;
            }

            .nav-bar-container {
                width: 100%;
            }

            .nav-bar{
                align-items: center;
                background: var(--purple-dark);
                display: flex;
                height: 54px;
                justify-content: flex-end;
                top: 10px;
            }

            .nav-bar-button {
                height: 30px;
            }

            .cart-slider {
                position: relative;
            }

            .cart-container{
                background: var(--purple-input);
                border-radius: 10px 0 0 10px;
                max-height: 92vh;
                overflow:auto;
                padding: 15px;
                position: fixed;
                right: -30%;
                transition: right .5s ease-in-out;
                width: 30%;
            }

            .title-container {
                display: flex;
                font-weight: bold;
                justify-content: space-between;
            }

            .title-container > svg {
                cursor: pointer;
                fill: var(--white);
                transform: rotate(180deg);
            }

            .cart-item {
                align-items: center;
                display: flex;
                justify-content: space-between;
                margin: 5px 0;
            }

            .cart-item-img {
                display: flex;
            }

            .cart-item-img > img {
                height: 80px;
                min-height: 80px;
                min-width: 80px;
                object-fit: cover;
                object-position: top;
                width: 80px;
            }

            .cart-info-container {
                padding-left: 10px;
            }

            .cart-info-container > h2 {
                font-size: 14px;
            }

            .cart-info-container > span {
                display: block;
            }

            .delete-button {
                color: var(--gray-primary);
                cursor: pointer;
                font-size: 16px;
                margin-left: 10px;
            }

            .checkout-button-container {
                background: var(--purple);
                border-radius: 10px;
                border: 2px solid var(--purple);
                cursor: pointer;
                margin: 10px 0;
                padding: 10px;
                transition: background .3s;
                width: 100%;
            }

            .checkout-button-container:hover {
                background: transparent;
            }

            .checkout-button{
                display: block;
                text-align: center;
                width: 100%;
            }

        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define("shopping-cart", Modal)