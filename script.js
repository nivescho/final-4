function getID(id) {
    return document.getElementById(id).value; 
}
function disableInput(id) {
    document.getElementById(id).disabled = true;
}



function innerHTML(id,result){
    return document.getElementById(id).innerHTML=result;
}

function contadorCaracteres() {
    var mensajeInput = document.getElementById("mensaje");
    var textVista = document.getElementById("textvista");

    mensajeInput.addEventListener("input", function() {
        var mensajeValue = this.value; // Obtener el valor del campo de entrada
        var mensajeLength = mensajeValue.length; // Obtener la longitud del mensaje

        if (mensajeLength > 1000) {
            textVista.innerHTML = "Máximo de caracteres excedido";
            mensajeInput.disabled = true; // Deshabilitar la entrada si se excede el límite
        } else {
            textVista.innerHTML = mensajeLength; // Mostrar el recuento actual de caracteres
            mensajeInput.disabled = false; // Habilitar la entrada si está dentro del límite
        }
    });
}



// window.addEventListener("load",inicio,true);


document.getElementById("cifrar").addEventListener("click",function() {
    let texto = document.getElementById("mensaje").value;
    let ingresa = document.getElementById("offset").value;
        
    console.log(texto);
    console.log(ingresa);
    document.getElementById("mensaje2").value=cifrar(texto,ingresa);
});

document.getElementById("decifrar").addEventListener("click",function() {
    let texto = document.getElementById("mensaje").value;
    let ingresa = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = decifrar(texto,ingresa);
});

function cifrar(texto, ingresa) {
    let resultado = "";
    let letras = "abcdefghijklmnñopqrstuvwxyz";

    ingresa = (ingresa % 27 + 27) % 27;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            let index = letras.indexOf(texto[i]);
            if (index !== -1) {
                let posicion = (index + ingresa) % 27;
                resultado += letras[posicion];
            } else {
                resultado += texto[i]; // Conserva caracteres que no están en el alfabeto
            }
        }
    }
    return resultado;
}

function decifrar(texto, ingresa) {
    let resultado = "";
    let letras = "abcdefghijklmnñopqrstuvwxyz";

    ingresa = (ingresa % 27 + 27) % 27;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            let index = letras.indexOf(texto[i]);
            if (index !== -1) {
                let posicion = (index - ingresa + 27) % 27;
                resultado += letras[posicion];
            } else {
                resultado += texto[i]; // Conserva caracteres que no están en el alfabeto
            }
        }
    }
    return resultado;
}
