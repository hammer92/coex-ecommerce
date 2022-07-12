import "../style.css";
import "./style.css";
import CarruselCasting  from "./components/casting/casting";
const Url = new URL(window.location);
const urlParams = new URLSearchParams(Url.searchParams);

const app = document.querySelector("#app");

const template = `
  <h1>Hello world! Product Page</h1>
  ${urlParams.get("product")}
  <button id="accion">Cambio</button>
  <a href="/index.html">Home</a>
  <div id='btn-container' ></div>
  <div id='carruselCasting'></div>
`;
app.innerHTML = template;



const divCasting = document.querySelector('#carruselCasting');

const casting = new CarruselCasting(window);
divCasting.innerHTML = casting.templateClass
casting.move();



const button = document.getElementById("accion");
button.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  console.log("click", h1.style.color);
  if (h1.style.color === "blue") h1.style.color = "red";
  else h1.style.color = "blue";
});
