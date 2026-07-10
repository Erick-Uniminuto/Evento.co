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

function ValidacionFormulario(entradas:Element[]){
    console.log('Entra a la funcion')
    for(let campo of entradas){
        //@ts-ignore
        if(campo.value.length <= 0){
            return false
        }
    }
    return true
}

// Obtengo el espacio para el nombre del usuario
const boton_publicar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('send')
const name_space:HTMLElement = <HTMLElement> document.getElementById('u-text')
const check:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate')

check.addEventListener('change',()=>{
    if(!ValidacionFormulario(campos)){
        // @ts-ignore
        check.checked = false
        boton_publicar.disabled = true
    }else{
        check.checked = true
        boton_publicar.disabled = false
    }
})
// Obtenemos todos los campos del formulario
const campos = [...document.querySelectorAll('#producto')]

// Si interactuamos con el boton cuando se puede podremos registrarnos
boton_publicar.addEventListener('click',()=>{
    //@ts-ignore
    localStorage.setItem('usuario',campos.at(0).value) 
    window.location.href = 'main-page.html'
})