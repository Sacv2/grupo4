let FC24 = document.querySelector("#FC24");
let Contenedor = document.querySelector('#Contenedor');

console.log(FC24);

FC24.querySelector("h3").innerHTML = "Este titulo fue modi";

let copia = FC24.cloneNode(true);

FC24.remove();

console.log(copia);

console.log(Contenedor);

copia.style.backgroundColor = '#f00';
copia.style.padding = '15px';

Contenedor.appendChild(copia.cloneNode(true));
Contenedor.appendChild(copia.cloneNode(true));






