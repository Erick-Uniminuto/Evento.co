export type InfoEvento = {
    nombre:string
    descripcion:string
    categoria:Array<string>
    img:string
    vip:number
    caracteristicas_vip:string
    generales:number
    caracteristicas_generales:string
    escenario:string
}
export type Evento = {
    evento:Array<InfoEvento>,
}

// Modelo y tipos de datos para cada uno de los elementos que conforman un evento