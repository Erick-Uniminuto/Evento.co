import { BuscarUsuario } from "./buscar-usuario.js";
import { BuscarEventos } from "./buscar-evento.js";

// Reviso si el usuario se encuentra registrado
document.addEventListener('DOMContentLoaded',()=>{
    BuscarUsuario()
}) // Apenas se carga la pagina actualiza su titulo

const boton_buscar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('btn-nav')
boton_buscar.addEventListener('click',()=>{
    event?.preventDefault()
    BuscarEventos()
})
// Habilito la posibilidad de que la barra de busqueda funcione