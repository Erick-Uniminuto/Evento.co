import { BuscarEventos } from "./buscar-evento.js";
import { BuscarUsuario } from "./buscar-usuario.js";


document.addEventListener('DOMContentLoaded',()=>{
    BuscarUsuario()
}) // Apenas se carga la pagina actualiza su titulo


const evento1:HTMLDivElement = <HTMLDivElement> document.getElementById('e1');
const evento2:HTMLElement = <HTMLElement> document.getElementById('e2');
const evento3:HTMLElement = <HTMLElement> document.getElementById('e3');
const evento4:HTMLElement = <HTMLElement> document.getElementById('e4');
const evento5:HTMLElement = <HTMLElement> document.getElementById('e5');
const evento6:HTMLElement = <HTMLElement> document.getElementById('e6');
// Capturo los botones para ver informacion de los eventos

const titulo_eventos = [...document.querySelectorAll('h5')]
function ObtenerNombreEvento(elementos:Array<HTMLHeadingElement>,posicion:number):string{
    return <string> elementos.at(posicion)?.textContent.toLowerCase()
}

evento1.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> evento1.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',ObtenerNombreEvento(titulo_eventos,0))
    // Guardo en el navegador la eleccion del usuario
    window.location.href = 'visualizador-evento.html';
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
evento2.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> evento1.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',ObtenerNombreEvento(titulo_eventos,1))
    // Guardo en el navegador la eleccion del usuario
    window.location.href = 'visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
evento3.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> evento1.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',ObtenerNombreEvento(titulo_eventos,2))
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
evento4.addEventListener('click',()=>{
    const nombre:string = <string> evento1.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',ObtenerNombreEvento(titulo_eventos,3))
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
evento5.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> evento1.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',ObtenerNombreEvento(titulo_eventos,4))
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})
evento6.addEventListener('click',()=>{
    event?.preventDefault()
    const nombre:string = <string> evento1.querySelector('h5')?.textContent
    // Obtengo el nombre del evento al cual el usuario hizo click
    localStorage.clear() // Limpio el local storage
    localStorage.setItem('EventoSeleccionado',ObtenerNombreEvento(titulo_eventos,5))
    // Guardo en el navegador la eleccion del usuario
    window.location.href ='visualizador-evento.html'
    // Redirecciono al usuario para la pagina de visualizacion del evento
})

const boton_buscar:HTMLButtonElement = <HTMLButtonElement> document.getElementById('btn-nav')
boton_buscar.addEventListener('click',()=>{
    event?.preventDefault()
    BuscarEventos()
})