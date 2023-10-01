//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

function mostrarMensaje(event) {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;

    if (nombre === '' || correo === '') {
        var mensajeErrorDiv = document.getElementById('mensajeError');
        mensajeErrorDiv.classList.remove('oculto');
        return false; // Evita el envío del formulario si la validación falla
    }

    // Oculta el mensaje de error si estaba visible
    var mensajeErrorDiv = document.getElementById('mensajeError');
    mensajeErrorDiv.classList.add('oculto');

    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.classList.remove('oculto');
    return true; // Permite el envío del formulario si la validación es exitosa
}

