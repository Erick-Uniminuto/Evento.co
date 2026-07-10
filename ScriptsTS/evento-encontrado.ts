import { BuscarEventos } from "./buscar-evento.js"
import { BuscarUsuario } from "./buscar-usuario.js"
import { eventos_default } from "./DB/eventos.js"

function Categorizar(evento_n:string, categoria:string):boolean{
    for(let e of eventos_default){
        if(e.nombre === evento_n){
            if(e.categoria.includes(categoria)){
                return true
            }
        }
    }
    return false
}

function ActualizarResultados(filtro:string){ // Funcion para filtrar resultados
    const cards = [...document.querySelectorAll('#supercard')]
    for(let evento of cards){
        let nombre_evento:string = <string> evento.querySelector('h5')?.textContent 
        if(!Categorizar(nombre_evento.toLowerCase(),filtro.toLowerCase())){
            //@ts-ignore
            evento.hidden = true
        }else{
            //@ts-ignore
            evento.hidden = false
        }
    }

}

document.addEventListener('DOMContentLoaded',()=>{
    const encontrado:HTMLElement = <HTMLElement> document.getElementById('title-page')
    encontrado.textContent = `Resultados para: ${localStorage.getItem('busqueda')}`
    BuscarUsuario()
}) // Apenas se carga la pagina actualiza su titulo

const boton_buscar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('btn-nav')
boton_buscar.addEventListener('click',()=>{
    event?.preventDefault()
    BuscarEventos()
}) // Funcion para utilizar la barra de busqueda

let categoria_seleccionada:string = '' // Variable que permite conocer la categoria seleccionada

// Obtengo todos los checks de la pagina
const check1:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate1')
const check2:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate2')
const check3:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate3')
const check4:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate4')
const check5:HTMLFormElement = <HTMLFormElement> document.getElementById('checkIndeterminate5')

check1.addEventListener('click',()=>{
    categoria_seleccionada = check1.value
    ActualizarResultados(categoria_seleccionada)
})
check2.addEventListener('click',()=>{
    categoria_seleccionada = check2.value
    ActualizarResultados(categoria_seleccionada)
})
check3.addEventListener('click',()=>{
    categoria_seleccionada = check3.value
    ActualizarResultados(categoria_seleccionada)
})
check4.addEventListener('click',()=>{
    categoria_seleccionada = check4.value
    ActualizarResultados(categoria_seleccionada)  
})
check5.addEventListener('click',()=>{
    categoria_seleccionada = check5.value
    ActualizarResultados(categoria_seleccionada)
})

// Obtengo todas las tarjetas
const card1:HTMLElement = <HTMLElement> document.getElementById('card-1')
const card2:HTMLElement = <HTMLElement> document.getElementById('card-2')
const card3:HTMLElement = <HTMLElement> document.getElementById('card-3')
const card4:HTMLElement = <HTMLElement> document.getElementById('card-4')
const card5:HTMLElement = <HTMLElement> document.getElementById('card-5')
const card6:HTMLElement = <HTMLElement> document.getElementById('card-6')

card1.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> card1.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',nombre.toLowerCase())
    // Guardo en el navegador la eleccion del usuario
    window.location.href = 'visualizador-evento.html';
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
card2.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> card2.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',nombre.toLowerCase())
    // Guardo en el navegador la eleccion del usuario
    window.location.href = 'visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
card3.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> card3.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',nombre.toLowerCase())
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
card4.addEventListener('click',()=>{
    const nombre:string = <string> card4.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',nombre.toLowerCase())
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
card5.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> card5.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',nombre.toLowerCase())
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
card6.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> card6.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',nombre.toLowerCase())
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})