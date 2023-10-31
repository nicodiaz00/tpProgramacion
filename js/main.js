import { compararLetraYValor, mostrarPalabra, palabraAlAzar, empezarDeNuevo,} from "./funciones.js";
import { ocultarPalabra } from "./funciones.js";
import { generarTeclado } from "./funciones.js";
import { ocultarBotonJugar } from "./funciones.js";
import { palabras } from "./palabras.js";

let palabraGenerada ='';
let palabraOculta='';
export let palabraFinal='';

let botonGenerar = document.querySelector('#generarPalabra');

botonGenerar.onclick = function(event){
    palabraGenerada = palabraAlAzar(palabras);
    palabraOculta = ocultarPalabra(palabraGenerada)
    document.querySelector('#palabraOculta').textContent = palabraOculta; 
    generarTeclado();
    ocultarBotonJugar();
    mostrarPalabra();
    palabraFinal = palabraGenerada;
    console.log(palabraGenerada)
        
}

let botonera = document.querySelector('#botonera');

botonera.onclick = function(event){
    
       let valorBoton = event.target.value;
       compararLetraYValor(valorBoton, palabraGenerada);
       
         
}

let botonJugarDeNuevo = document.querySelector('.jugarOtraVez1');

botonJugarDeNuevo.onclick = function(event){
    empezarDeNuevo();
}

let botoJugarDeNuevo1= document.querySelector('.jugarOtraVez2')
botoJugarDeNuevo1.onclick = function(event){
    empezarDeNuevo();
}



