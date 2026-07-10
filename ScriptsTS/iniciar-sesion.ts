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

const campos_formulario = [...document.querySelectorAll('#producto')]
const boton_iniciar_sesion:HTMLButtonElement = <HTMLButtonElement> document.getElementById('only-btn')

function ValidarCampos(campos:Array<Element>):boolean{
    for(let campo of campos){
        //@ts-ignore
        if(campo.value.length <= 0){
            console.log('campo no lleno')
            return false
        }
    }
    return true
}

boton_iniciar_sesion.addEventListener('click',()=>{
    if(ValidarCampos(campos_formulario)){
        console.log('salio de la funcion')
        window.location.href = 'main-page.html'
    }else{
        alert('Por favor llene todos los campos...')
    }
})