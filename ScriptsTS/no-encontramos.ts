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