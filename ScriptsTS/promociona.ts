import { BuscarUsuario } from "./buscar-usuario.js";
import { BuscarEventos } from "./buscar-evento.js";

document.addEventListener('DOMContentLoaded',()=>{
    BuscarUsuario()
}) // Apenas se carga la pagina actualiza su titulo

const boton_buscar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('btn-nav')
boton_buscar.addEventListener('click',()=>{
    event?.preventDefault()
    BuscarEventos()
})

// Obtengo el boton para publicar el evento
const boton_publicar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('send')

// Obtengo el check para aceptar terminos y condiciones
const checkbox:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate2')

checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        boton_publicar.disabled = false
    }else{
        boton_publicar.disabled = true
    }
}) // Me aseguro que el usuario acepte los terminos y condiciones

boton_publicar.addEventListener('click',()=>{
    const pregunta = confirm('¿Estas seguro que deseas publicar el evento?')
    if(pregunta){
        alert('Tu evento se ha publicado')
        window.location.href = 'main-page.html'
    }
})