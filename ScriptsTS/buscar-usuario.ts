// Aqui se escribe una funcion para conocer si el usuario se registro o no

export function BuscarUsuario(){
    const campo_usuario:HTMLElement = <HTMLElement> document.getElementById('u-text')
    if(localStorage.getItem('usuario')){
        campo_usuario.textContent = `Hola ${localStorage.getItem('usuario')}`  
    }else{
        campo_usuario.textContent = `Hola usuario`  
    }
}

// document.addEventListener('DOMContentLoaded',()=>{
    
// }) // Apenas se carga la pagina actualiza su titulo