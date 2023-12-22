@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Nova+Square&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Nova Square',sans-serif;
}

body {
    background-image:url(./gif.gif);
    text-align: center;
    font-family: calibri;
    font-size: 200%;
    background-size: cover;     
}

nav {
    justify-content: space-between;
    margin-right: 90px;
    font: rgb(243, 239, 239);
}

a {
    text-decoration: none;
    font: rgb(247, 246, 246)
   

}

header {
    text-align: left;
    color: beige;
    background-color:rgb(35, 194, 101);
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding: 10px;
    box-sizing: border-box;
}


.container {
    height: 50vh;
}

label{
    color: rgb(255, 255, 255);
    font-size: 40px;
    margin-top: 70px;
    display: flex;
    margin-left: 500px;
}

.cifrado{
    font-weight: 200px;
    font-size: 30px;
    cursor: pointer;
    padding: 20px ;
    border-radius: 10px;
    background-color: beige;
    color: rgb(75, 75, 71);
    border: none;
    margin-bottom: 4px;
    height: 100px;
    width:300px;
    
}

.decifrado{
    font-weight: 200px;
    font-size: 30px;
    padding: 20px ;
    cursor: pointer;
    border-radius: 10px;
    background-color: beige;
    color: rgb(75, 75, 71);
    border: none;
    height: 100px;
    width: 300px;
    margin-top: 50px;
}


.cifrado:hover{
    background-color: rgb(0, 255, 76);
}

.decifrado:hover{
    background-color: rgb(0, 255, 76);
}

textarea{
    border-radius: 10px;
    margin-top:30px;
    position: absolute;
    left: 510px;
    width: 600px;
    height: 350px;
    font-size: 18px;
    padding: 20px 20px 20px 20px;
}


footer{
    background-color: rgba(46, 204, 112, 0.603) ;
    width: 100%;
    height: 10%;
    color: aliceblue;
    margin-top: 80px;

}


#leer{
    width: 100px;
    height: 100px;
    background-color: rgb(243, 245, 247);
    border-radius: 5px;
}

#codigo{
   text-decoration: none;
   color: rgb(22, 22, 22);
   text-align: right;
   font-size: 25px;
   
   
}

p{
    background-color:rgba(46, 204, 112, 0.603) ;
    color: white;
}

span{
    color: rgb(255, 255, 255);
    font-size: 20px; 
    
}

#clave{
    color: rgb(243, 241, 241);
    display: flex ;
    margin-top: -400px;
    margin-left: 520px;
    padding: 2px;
    
}

input{
    font-weight: 40px;
    font-size: 30px;
    color: var(--color-white);
    border: 0.15rem solid var(--color-secondary);
    border-radius: 10px;
    margin-top: 30px;
    width: 610px;
    height: 200px;
    text-align:center;
}
  

#textvista{
    padding: 1px;
    display: flex;
    margin-top: 430px;
    margin-left: 1110px;
    color: rgb(24, 21, 21);
    border-radius: 8px;
    font-size: 20px;
    width: 100px;
    font-size: 20px;
    align-items: center; /* Alinea verticalmente */
    justify-content: center; 
}

#textodesencriptado{
    display: flex;
    margin-top: 270px;
    margin-left: 10px;
    width: 600px;
    height: 150px;
}

#resultado{
    display: flex;
    position: relative;
    top: -490px;
    left: 30px;
    



}
#mensaje2{
    margin-top: 90px;
}

  

#offset{
    font-weight: 40px;
    font-size: 30px;
    color: var(--color-white);
    border: 0.15rem solid var(--color-secondary);
    border-radius: 10px;
    margin-top: 50px;
    width: 610px;
    height: 50px;
    text-align:center;
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codigo Enigma</title>
    <link rel="stylesheet" href="./css.css">
    <link rel="icon" href="https://www.lausina.com.ar/wp-content/uploads/2017/07/criptograma-reloj.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">

</head>
<body onload="contadorCaracteres()">
  
    <header>
        <h1> Codigo enigma </h1>  
    <nav >
        <a  id="codigo" href="https://www.youtube.com/watch?v=IYsrI15PNUI" target="_blank"class="nav-link">Que es un codigo enigma? - </a>
        <a  id ="codigo"href="https://historia.nationalgeographic.com.es/a/alan-turing-arma-secreta-aliados_16352"  target="_blank" class="nav-link">Quien fue su creador? - </a>
        <a  id ="codigo"href="https://www.shutterstock.com/es/search/enigma-code" target="_blank"  class="nav-link"> Fotos e imagenes </a>
    </nav>
    </header>
    <section>
        <label id="mensaje">Mensaje secreto:</label>
        <input type="text" id="mensaje">
        <div class="col">
         <div id="textvista">1</div>
        </div>
        <label id="clave">Clave secreta:</label>
        <input id="offset" type="number" min="-100" max="100" placeholder="Ingresa tu clave secreta aquí" name="offset" step="1">
        
    </section>
</header>
<input type="text" id="mensaje2">
<main>
  <section class="container">
    <div class="btnGroup">
      <button class="cifrado"  type="button" id="cifrar">
        <i class="fas fa-lock"></i> Cifrar
      </button>
      <button class="decifrado"  type="button"id="decifrar">
        <i class="fas fa-lock-open"></i> Descifrar
      </button>
    </div>
    <label id="resultado">Resultado:</label>
  </section>
</main> 
<footer>
  <div>
  <p>Copyright &copy;2023 Las creadoras comparten licencia creativa</p>
  <p>Grupo Grace Hopper</p>   
</div>
</footer>
<script src="./script.js"></script>
    
</body>
 
</html>
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
