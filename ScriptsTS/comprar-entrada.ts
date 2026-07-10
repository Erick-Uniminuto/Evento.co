import { eventos_default } from "./DB/eventos.js";
import type { InfoEvento } from "./models/evento.js";
import { BuscarEventos } from "./buscar-evento.js";
import { BuscarUsuario } from "./buscar-usuario.js";

document.addEventListener('DOMContentLoaded',()=>{
    BuscarUsuario()
}) // Apenas se carga la pagina actualiza su titulo


// Obtengo el check para la entrada VIP
const entrada_general:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminateG')
// Obtengo el check para la entrada normal
const entradaVIP:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminateV')
// Obtengo el valor del numero de entradas seleccionadas
const selector:HTMLFormElement = <HTMLFormElement> document.getElementById('selector');
// Obtengo el espacio para mostrar el monto total de la transaccion
const monto:HTMLElement = <HTMLElement> document.getElementById('monto');

function BuscarInfoEvento(eventos:Array<InfoEvento>, evento_elegido:string):InfoEvento|void{
    for(let evento of eventos){ // Buscamos el evento que selecciono el usuario
        if(evento.nombre === evento_elegido){
            return evento // Obtengo la informacion general del evento seleccionado
        }
    }
    return // Si no encuentro nada, no devuelvo nada
}
// Obtenemos el evento seleccionado por el usuario
const evento_seleccionado:string = <string> localStorage.getItem('EventoSeleccionado')
// Obtenemos la informacion general del evento seleccionado
const info_evento:InfoEvento = <InfoEvento> BuscarInfoEvento(eventos_default,evento_seleccionado)

function CalcularPrecio(cantidad:number, precio_boleta:number):number{
    return cantidad*precio_boleta
} // Funcion para calcular el precio de las boletas

let cantidad_boletas:number = 1 // Cantidad de boletas por defecto que es una

entradaVIP.addEventListener('click',()=>{
    localStorage.removeItem('selection'); // Limipamos la seleccion de boleta del localstorage
    localStorage.setItem('selection', entrada_general.value); // Guardamos la nueva seleccion
    monto.textContent = `$${CalcularPrecio(cantidad_boletas,info_evento.vip)}` // Muestro el nuevo monto de la transaccion
})
entrada_general.addEventListener('click',()=>{
    localStorage.removeItem('selection'); // Limipamos la seleccion de boleta del localstorage
    localStorage.setItem('selection', entrada_general.value); // Guardamos la nueva seleccion
    monto.textContent = `$${CalcularPrecio(cantidad_boletas,info_evento.generales)}` // Muestro el nuevo monto de la transaccion
})
selector.addEventListener('change',()=>{
    cantidad_boletas = Number(selector.value) // Guardo el valor de cantidad de boletas
    if(localStorage.getItem('selection') === 'vip'){
        monto.textContent = monto.textContent = `$${CalcularPrecio(cantidad_boletas,info_evento.vip)}`
    }else{
         monto.textContent = `$${CalcularPrecio(cantidad_boletas,info_evento.generales)}`
    }
})

// Obtengo el boton para realizar el pago
const pagar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('send');
// Obtengo el checkbox para los terminos y condiciones
const aceptar_TC:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate')

aceptar_TC.addEventListener('click',()=>{
    if(aceptar_TC.checked){
        if(entrada_general.checked | entradaVIP.checked){
            pagar.disabled = false
        } // Se habilitara el boton solamente si se selecciono un tipo de boleta y aceptaron TyC
    }else{
        pagar.disabled = true
    }
})

function ConfirmarPago():void{ // Funcion para confirmar la compra de las boletas
    const confirmar:boolean = confirm('¿Desea confirmar la compra?')
    if(confirmar){
        window.location.href = 'main-page.html'
    }
}

pagar.addEventListener('click',()=>{
    ConfirmarPago()
}) // Confirmando la compra de las boletas.

const boton_buscar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('btn-nav')
boton_buscar.addEventListener('click',()=>{
    event?.preventDefault()
    BuscarEventos()
})