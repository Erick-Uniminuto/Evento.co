import { eventos_default } from "./DB/eventos.js"
import type { InfoEvento } from "./models/evento.js"
import { BuscarEventos } from "./buscar-evento.js"
import { BuscarUsuario } from "./buscar-usuario.js";


document.addEventListener('DOMContentLoaded',()=>{
    BuscarUsuario()
}) // Apenas se carga la pagina actualiza su titulo

const boton_buscar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('btn-nav')
boton_buscar.addEventListener('click',()=>{
    event?.preventDefault()
    BuscarEventos()
})


// Recupero el evento seleccionado por el usuario
const evento_seleccionado:string = <string> localStorage.getItem('EventoSeleccionado')
// Recupero el espacio para la imagen del evento
const img_evento:HTMLElement = <HTMLElement> document.getElementById('event-image')
// Recupero el espacio para la descripcion de la boleta VIP
const desc_vip:HTMLElement = <HTMLElement> document.getElementById('desc-vip')
// Recupero el espacio para la descripcion de la boleta General
const desc_general:HTMLElement = <HTMLElement> document.getElementById('desc-general')
// Obtengo el espacio para la descripcion del evento
const desc_evento:HTMLElement = <HTMLElement> document.getElementById('desc-evento')
// Obtengo el espacio para colocar la ubicacion del evento
const ubicacion_evento:HTMLElement = <HTMLElement> document.getElementById('map')
// Obtengo el espacio para el titulo del evento
const titulo_evento:HTMLElement = <HTMLElement> document.getElementById('titulo-evento')

function BuscarInfoEvento(eventos:Array<InfoEvento>, evento_elegido:string):InfoEvento|void{
    for(let evento of eventos){ // Buscamos el evento que selecciono el usuario
        if(evento.nombre === evento_elegido){
            return evento // Obtengo la informacion general del evento seleccionado
        }
    }
    return // Si no encuentro nada, no devuelvo nada
}
const info_evento:InfoEvento = <InfoEvento> BuscarInfoEvento(eventos_default,evento_seleccionado)
// Guardo la informacion general del evento en una constante

titulo_evento.textContent = info_evento.nombre // Coloco el nombre del evento
img_evento.setAttribute('src',info_evento.img) // Coloco el enlace de la imagen en su elemento HTML
desc_vip.textContent = info_evento.caracteristicas_vip // Coloco descripcion VIP
desc_general.textContent = info_evento.caracteristicas_generales // Coloco descripcion de boleta general
desc_evento.textContent = info_evento.descripcion // Coloco descripcion del evento
ubicacion_evento.setAttribute('src',info_evento.escenario) // Coloco el mapa con la ubicacion del evento

