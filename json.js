let FC24 = document.querySelector("#FC24");

let contenido = document.querySelector("#contenido");

let referencia = FC24.cloneNode(true);

FC24.remove()

fetch("https://Sacv2.github.io/grupo4/datagames.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    
    //Agrego todos los juegos con un for
    for (i = 0; i < data.length; i++) {

        let NuevoJuego = referencia.cloneNode(true)

        NuevoJuego.querySelector("img").src = data[i].imagen;
        NuevoJuego.querySelector("img").alt = data[i].nombre;
        NuevoJuego.querySelector("h3").innerHTML = data[i].nombre;
        NuevoJuego.querySelector("p").innerHTML = data[i].precio

        contenido.appendChild(NuevoJuego);
    }

    })
.catch(error => console.log("Ocurrió un error! " + error));