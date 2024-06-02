fetch("https://Sacv2.github.io/grupo4/datagames.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error! " + error));