class dropMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = /*html*/ `
            <div class="drop-menu">
                <a class="historial-btn" href="../cart/index.html" id="history-shop">History orders</a><br><hr class="hr-dropdown">
                <button id="logout" class="btn-logout">Log out</button>
            </div>
            ${this.getStyle()}
        `
        return template;
    }
    getStyle(){
        return /*html*/ `
            <style>
                .drop-menu{
                    right: 0;
                    display: none;
                    position: absolute;
                    background-color:var(--purple-dark);
                    inline-size: 180px;
                    padding: 15px;
                    text-align: right;
                    background-color: black;
                    color: white;
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
                    color:var(--white);

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
                    border: 2px solid var(--white);
                    border-radius: 5px;
                    padding: 5px;
                    cursor: pointer;
                }

                .btn-login-nav{
                    border: 2px solid var(--white);
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
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('drop-menu', dropMenu);