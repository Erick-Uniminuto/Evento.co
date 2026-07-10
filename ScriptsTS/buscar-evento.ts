export function BuscarEventos():void{ // Funcion para buscar eventos
    const contenido:HTMLFormElement = <HTMLFormElement> document.getElementById('b-input');
    const obtener_resultado:number = Math.floor(Math.random()*2);
    const resultados:Array<string> = ['no-encontramos-evento','evento-encontrado']
    localStorage.setItem('busqueda',contenido.value)
    if(contenido.value.length > 0){
        window.location.href = `${resultados.at(obtener_resultado)}.html`
    }
}