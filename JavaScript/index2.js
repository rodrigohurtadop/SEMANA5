setTimeout(mostrarDatos, 5000);
function mostrarDatos(){
    let date = new Date();
    console.log("Hora actual: "+ date.toLocaleTimeString());
    console.log("Ejemplo");
}

setInterval(mostrarImg, 1000);

function mostrarImg(){
    let date = new Date();
    console.log("Hora actual: "+ date.toLocaleTimeString());
    console.log("Ejemplo 2");
}