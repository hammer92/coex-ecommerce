import './category-sidebar.js';

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
                    <a class="logo" href="">
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
                            <a href="#" class="sigin__arrow" as="button" ><img src="../assets/icons/arrow_down.svg" alt="" width="18px" heigth="27"></a>
                        </div>
                        <div class="drop-menu">
                            <a class="historial-btn" href="../cart/index.html" id="history-shop">History orders</a><br><hr class="hr-dropdown">
                            <button id="logout" class="btn-logout">Log out</button>
                        </div> 
                    </div>
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
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 2;
                    color: white;
                    background-color: #02021C;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 54px;
                    padding-left: 30px;
                    padding-right: 30px;
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
                    justify-content: center;
                    align-items: center;
                    gap: 30px;
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
                
                
                
                
                .title_poster{
                    color: #f9f9f9;
                }
                
                
                .aba{
                    background-color: #02021C;
                    border-bottom-right-radius: 15px;
                    border-bottom-left-radius: 15px;
                }
                
                .info{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-left: 15px;
                    padding-right: 15px;
                    margin-bottom: 20px;
                    margin-top: 20px;
                    color: #f9f9f9;
                }
                
                .carrito{
                    width: 196px;
                    height: 40px;
                    background: #7B2ABF;
                    border-radius: 10px;
                    color: #f9f9f9;
                    border: none;
                    font-weight: bold;
                    margin-bottom: 20px;
                    cursor: pointer;
                
                }
                
                .izHeader li{
                    cursor: pointer;
                }

                #categorySelected{
                    font-size: 16px;
                }

                .hover{
                    position: absolute;
                    color: white;
                    background-color: rgba(0,0,0,0.95);
                    height: 300px;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                    width: 220px;
                    overflow: hidden;
                    text-align: justify;
                    font-size: 12px;
                    opacity: 0;
                }

                .hover:hover{
                    opacity: 1;
                }

                .hover *{
                    margin: 10px;
                }

                .btn-hidden{
                    display: none;
                }
                .btn-drop-menu:hover{
                    color:var(--purple)
                }
                .drop-menu{
                    right: 0;
                    display: none;
                    position: absolute;
                    background-color:var(--purple-dark);
                    inline-size: 180px;
                    padding: 15px;
                    text-align: right;
                }

                .btn-sesion-login{
                    position: relative;
                }

                .btn-logout{
                    margin-top: 9px;
                    font-size: 16px;
                    font-weight: 600;
                    color:purple;
                    padding-right: 0px;
                    cursor: pointer;
                }
                .btn-logout:hover{
                    color:white;

                }

                .historial-btn{
                    margin-bottom: 5px;
                    font-size: 16px;
                    font-weight: 700;
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

            </style>
        `
    };
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    };
}

customElements.define('nav-bar', navBar);