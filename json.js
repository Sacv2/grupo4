let FC24 = document.querySelector("#FC24");

let referencia = FC24.cloneNode(true);

/*
fetch("https://Sacv2.github.io/grupo4/datagames.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);

    console.log(data[0].nombre + " " + data[0].precio);

    FC24.querySelector("img").src = data[0].imagen;
    FC24.querySelector("img").alt = "FC24";
    FC24.querySelector("h3").innerHTML = data[0].nombre;
    FC24.querySelector("p").innerHTML = data[0].precio;

    })
.catch(error => console.log("Ocurrió un error! " + error));