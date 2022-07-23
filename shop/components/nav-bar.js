import './category-sidebar.js';
import './drop-menu.js';

class navBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.categorySidebar;
    };
    getTemplate(){
        const template = document.createElement('template');
        if(window.location.pathname === '/shop/index.html'){
            this.categorySidebar = '<category-sidebar></category-sidebar>';
        } else {
            this.categorySidebar = '';
        }
        template.innerHTML = /*html*/`
            ${this.getStyles()}
            <header class="header">
                <div class="izHeader">
                    <a class="logo" href="./index.html">
                        <img src="../assets/icons/logo_coexbuster.svg" width="80px" alt="">
                    </a>
                </div>
                ${this.categorySidebar}
                <div class="derHeader">
                    <div class="btn-sesion" id="btn-nosesion-nav">
                        <button id="login-btn" class="btn-login-nav" >Log in</button>
                        <button id="singup-btn" class="btn-singup-nav">Sing up</button>
                    </div>
                    <div class="btn-sesion-login " id="btn-sesion-nav">
                        <div class="btn-drop-menu">
                            <button class="email__sigin" type="button" id='sigin_arrow' >
                                <label class="user-correo">admin@admin.com</label>
                                <img src="../assets/icons/arrow_down_black.svg" alt="" width="18px" heigth="27" class="sigin__arrow">
                            </button>
                        </div> 
                    </div>
                    <drop-menu id="drop-menu" class="displayNone"></drop-menu>
                    <a href="#" as="button" onclick="openCart()" >
                        <img src="../../assets/icons/icon_shopping_cart_notification.svg" alt="" width="30px" heigth="27">
                    </a>
                </div>
                
            </header>
        `
        return template;
    };
    getStyles(){
        return /*html*/`
            <style>
                button{
                    background-color: transparent;
                    color: white;
                    border-color: transparent;
                }
                
                header{
                    width: 100%;
                    color: white;
                    background-color: #02021C;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 54px
                }
                .email__sigin{
                    color: var(--purple);
                    font-size: 1rem;
                }
                .email__sigin:hover{
                    color: var(--purple-input);
                }
                .email__sigin:hover .sigin__arrow{
                    filter: var(--purple-gray-fil);
                }
                .logo{
                    cursor: pointer;
                    width: 168px;
                    height: 30px;
                }
                
                .logo img{
                    height: 100%;
                    width: 100%;
                }
                
                .derHeader{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                    width:20%;
                }
                
                .sesion{
                    color:#7B2ABF;
                }
                
                .sigin__arrow{
                    filter: var(--purple-fil);
                    block-size: auto;
                    inline-size: 12px;
                }

                .btn-singup-nav{
                    border: 2px solid white;
                    border-radius: 5px;
                    padding: 5px;
                    cursor: pointer;
                }

                .btn-login-nav{
                    border: 2px solid white;
                    border-radius: 5px;
                    padding: 5px;
                    cursor: pointer;
                }

                .displayNone{
                    display: none;
                }

                .displayBlock{
                    display:block !important;
                }

            </style>
        `
    };
    //Renderizacion del componente
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
        // Configuracion del navbar para esta de la sesion
        // Verifica si hay un usuario logueado y en dicho caso se renderiza su correo electrónico
        (() => {
            const nologinstate = this.shadowRoot.querySelector('#btn-nosesion-nav');
            const loginstate = this.shadowRoot.querySelector('#btn-sesion-nav');
            let estatesesion = localStorage.getItem('iniciosesion');
        
            if (estatesesion === 'false') {
                nologinstate.classList.remove('displayNone');
                loginstate.classList.add('displayNone');
            } else {
                nologinstate.classList.add('displayNone');
                loginstate.classList.remove('displayNone');
            }
        })()
        
        //Funcion de activar drop-menu
        let dropMenu = this.shadowRoot.getElementById('drop-menu');
        this.shadowRoot.getElementById('sigin_arrow').addEventListener('click', ()=>{
            dropMenu.classList.toggle('displayBlock');
        })

        //funcion btn log in
        const buttonlogin = this.shadowRoot.getElementById('login-btn');
        buttonlogin.addEventListener('click', () => {
            window.location = '../cart/index.html';
        });
    };
}

customElements.define('nav-bar', navBar);