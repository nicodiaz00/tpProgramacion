import { palabras } from "./palabras.js"
import { palabraFinal } from "./main.js";

let contador = 0;

String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length)};

export function palabraAlAzar(arraydePalabra){
    let palabra ="";
    let numero = Math.floor(Math.random() * arraydePalabra.length);
    palabra = arraydePalabra[numero];
    return palabra;
}
export function ocultarPalabra(palabra){
    let palabraOculta = palabra.replace(/./g, "-");
    return palabraOculta;

}
export function generarTeclado(){
    
    let contedorDeBotones = document.querySelector('#botonera');
    contedorDeBotones.style.display ="block";   
}
export function ocultarBotonJugar(){
    let contenedorBoton = document.querySelector('#contenedorBoton');
    contenedorBoton.style.display= "none";
}
export function mostrarPalabra(){
    let contenedorPalabra = document.querySelector('#contenedorPalabra');
    contenedorPalabra.style.display="block";
}
export function compararLetraYValor(valor,palabra) {
    let coincideCaracter = false;
    let palabraConGuiones = document.querySelector('#palabraOculta').textContent;

    for (let i = 0; i < palabra.length; i++) {
        
        if (palabra[i].toUpperCase() === valor) {
            palabraConGuiones = palabraConGuiones.replaceAt(i, valor);
            coincideCaracter = true;
        }
        
    }
    document.querySelector('#palabraOculta').textContent = palabraConGuiones;
    if(coincideCaracter === false){
        contador ++;
        mostrarImagen(contador);
    }
    ganasteOPerdiste(contador,palabraConGuiones);
}

export function mostrarImagen(valor){
    let imgAhorcado = document.querySelector('#contenedorImagen');
    if(valor == 1){
        imgAhorcado.style.backgroundImage ='url(IMAGES/02.png)';
    }if(valor ==2){
        imgAhorcado.style.backgroundImage ='url(IMAGES/03.png)';
    }if(valor ==3){
        imgAhorcado.style.backgroundImage ='url(IMAGES/04.png)';
    }if(valor == 4){
        imgAhorcado.style.backgroundImage ='url(IMAGES/05.png)';
    }
}
export function ganasteOPerdiste(contadorValor,palabra){
    if(palabra.indexOf('-')< 0){
        mostrarTextoGanador()
    }else if(contadorValor == 4){
        mostrarTextoPerdedor()
        let muestroPalabra = document.querySelector('#palabraElegida');
        muestroPalabra.textContent = `la palabra era ${palabraFinal}`;
    }
}

export function mostrarTextoGanador(){
    let mostrarTexto1 = document.querySelector('#ganaste')
    
    mostrarTexto1.style.display ="block";
    
}
export function mostrarTextoPerdedor(){
    let mostrarTexto2 = document.querySelector('#perdiste')
    
    mostrarTexto2.style.display = "block";
}

export function empezarDeNuevo(){
    location.reload();
}




