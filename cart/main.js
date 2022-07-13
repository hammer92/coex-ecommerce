// import '../style.css'
// import './style.css'

import templateHistory from "./views/history.js";
const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const app = document.querySelector("#app");

const template = `
<h1>Hello world! Cart Page</h1>
${urlParams.get("product")}
<button id="accion"> Cambio </button>
<a href="/index.html" >Home</a>
<a href="#history" id="history">History</a>
`;

// app.innerHTML = templateHistory;
app.innerHTML = template;

document.getElementById("history").addEventListener("click", () => {
    app.innerHTML = templateHistory;

    const boton_g = document.getElementById("boton_guardar");

    function call_date() {

        let array_date = [];

        const date = new Date();

        let output =
            String(date.getDate()).padStart(2, "0") +
            "." +
            String(date.getMonth() + 1).padStart(2, "0") +
            "." +
            date.getFullYear();

        array_date.push(output);

        // let add_date = document.getElementById("history__section__orders__date");

        let capa = document.getElementsByClassName("history__section--orders--items");
        let tag_h1 = document.createElement("h1");
        let tag_img = document.createElement("img");

        tag_h1.innerHTML = output;
        tag_img.setAttribute('src', '/assets/icons/angle-small-right-free-icon-font.svg')

        for (let i = 0; i < capa.length; i++) {

            capa[i].appendChild(tag_h1);

        };
    }

    boton_g.addEventListener("click", call_date);
});

// const button = document.getElementById('accion');
// button.addEventListener("click", async () => {
//     const h1 = document.querySelector("h1")
//     console.log("click", h1.style.color)
//     if (h1.style.color === "blue")
//         h1.style.color = "red";
//     else
//         h1.style.color = "blue";
// })


