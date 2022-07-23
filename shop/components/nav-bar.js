import './category-sidebar.js';
import './drop-menu.js';

class navBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    };
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/`
            ${this.getStyles()}
            <header class="header">
                <div class="izHeader">
                    <a class="logo" href="./index.html">
                        <img src="../assets/icons/logo_coexbuster.svg" width="80px" alt="">
                    </a>
                </div>
                <category-sidebar></category-sidebar>
                <div class="derHeader">
                    <div class="btn-sesion" id="btn-nosesion-nav">
                        <button id="login-btn" class="btn-login-nav" >Log in</button>
                        <button id="singup-btn" class="btn-singup-nav">Sing up</button>
                    </div>
                    <div class="btn-sesion-login " id="btn-sesion-nav">
                        <div class="btn-drop-menu">
                            <label class="user-correo">admin@admin.com</label>
                            <a href="#" class="sigin__arrow" as="button" id='sigin_arrow' ><img src="../assets/icons/arrow_down.svg" alt="" width="18px" heigth="27"></a>
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
                
                .logo{
                    width: 168px;
                    height: 30px;
                }
                
                .logo img{
                    height: 100%;
                    width: 100%;
                }
                
                .derHeader{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    gap: 20px;
                    width:20%;
                }
                
                .sesion{
                    color:#7B2ABF;
                }
                
                a:hover{
                    transition: 0.2s;
                    color: #7B2ABF;
                    cursor: pointer;
                }
                
                li {
                    display: inline;
                    list-style: none;
                    margin: 1%;
                    font-size: 18px;
                }
                
                .izHeader li{
                    cursor: pointer;
                }

                .btn-hidden{
                    display: none !important;
                }
                .btn-drop-menu:hover{
                    color:var(--purple)
                }

                .btn-sesion-login{
                    position: relative;
                }
                .sigin__arrow{
                    block-size: auto;
                    inline-size: 12px;
                }

                .hr-dropdown{
                    margin-left:12px;   
                    border:none;
                    height: 0.5px;
                    background-color: #4b4b4b;
                }

                .btn-sesion-login:hover .drop-menu{
                    display: block;
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

                .btn-login-nav:hover{
                    background-color: var(--purple);
                }
                .btn-singup-nav:hover{
                    background-color: var(--purple);
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
                nologinstate.classList.remove('btn-hidden');
                loginstate.classList.add('btn-hidden');
            } else {
                nologinstate.classList.add('btn-hidden');
                loginstate.classList.remove('btn-hidden');
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