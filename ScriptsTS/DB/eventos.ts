import type { InfoEvento } from "../models/evento.js";

// Una serie de eventos predeterminados
export const eventos_default:Array<InfoEvento> = [{
        nombre:'festival estereo picnic',
        descripcion:'Se parte del evento musical y cultural mas grande de Colombia',
        categoria:['concierto','actividades culturales', 'festival'],
        img:'https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/inline-images/cartel-estereo-picnic-2026.jpg',
        vip:997_000,
        caracteristicas_vip: 'Espacio VIP al frente del escenario, zonas de descanso, acceso VIP al festival, baños premium, puntos exclusivos de merch y acceso a la zona general con todos sus beneficios',
        generales:629_000,
        caracteristicas_generales:'Vista general de los shows, zona de descanso general, barras generales alrededor del festival, baños generales y acceso general al festival',
        escenario:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7953.285758188221!2d-74.09509297528572!3d4.6576112806065195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85921810393d%3A0x1d953f644042b03b!2sParque%20Metropolitano%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1783514284971!5m2!1ses-419!2sco"
    },
    {
        nombre:'conferencia ipho colombia',
        descripcion:'Participa en una conferencia con asistencia internacional en donde se abordaran temas relacionados con fisica y ciencia, disfruta de las actividades teoricas y practicas que ofrecemos.',
        categoria:['taller'],
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNjd9Xc0PQgUGNv54_q_J4HiUjC8kdBO3akqAGfet3P1vLNNEPLPWOHdg&s=10',
        vip:0,
        caracteristicas_vip: 'No aplica',
        generales:0,
        caracteristicas_generales:'No aplica',
        escenario:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2116383866314!2d-73.10901502495453!3d7.101452992901882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683feb7272e0af%3A0x33218407a861056e!2sNeomundo%20Centro%20Eventos%20y%20Convenciones!5e0!3m2!1ses-419!2sco!4v1783514919549!5m2!1ses-419!2sco"
    },
    {
        nombre:'las mujeres ya no lloran world tour',
        descripcion:'Participa en la gira mundial de Shakira las mujeres ya no lloran world tour, y escucha su musica en vivo.',
        categoria:['concierto'],
        img:'https://cdn.getcrowder.com/images/5d173682-5086-40de-ba38-2e647c619be8-sinternalbanner.gif',
        vip:2_615_700,
        caracteristicas_vip:'Acceso a las salas VIP, pasabocas, bebidas no alocoholicas, fiesta con decoraciones y musica del artista (sin presencia del artista), punto de check in exclusivo y compra de merchandasing oficial antes del evento.',
        generales:899_000,
        caracteristicas_generales:'Acceso al evento, compra de merchandasing y ubicacion en el norte o sur del recinto segun corresponda.',
        escenario:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.08624018242267!2d-74.09752679630947!3d4.649284367906308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9badf39cdf3f%3A0xedb312f4cb0f1953!2sVive%20Claro%20Distrito%20Cultural!5e0!3m2!1ses-419!2sco!4v1783515640459!5m2!1ses-419!2sco"
    },
    {
        nombre:'57 años del museo de bogota',
        descripcion:'Participa en la exposicion con entrada gratuita y presentaciones especiales para celebrar los 57 años del museo de Bogotá',
        categoria:['actividades culturales, conferencias'],
        img:'https://idpc.gov.co/wp-content/uploads/2026/07/Cumpleanos-museo-57.png',
        vip:0,
        caracteristicas_vip:'No aplica',
        generales:0,
        caracteristicas_generales:'Entrada al museo de Bogotá',
        escenario:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127256.14341947983!2d-74.1746606493967!3d4.6378323245325115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a893c89aaf%3A0xca49263cd941b703!2sMuseo%20de%20Bogot%C3%A1%20-%20Casa%20S%C3%A1mano!5e0!3m2!1ses-419!2sco!4v1783520014380!5m2!1ses-419!2sco"
    },
    {
        nombre:'nabucco (opera)',
        descripcion:'Ven y observa una gran obra de teatro basada en el Nabucco, una obra literaria acompañada de musica y un gran espectaculo.',
        categoria:['actividades culturales'],
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiN3acGw_hUFdieCHDVVdr-Tk1_ZKzauEDTPRsndTUqdHgKZ2wQMHyMhE&s=10',
        vip:310_000,
        caracteristicas_vip:'Acceso a primera fila',
        generales:50_000,
        caracteristicas_generales:'Entrada a la funcion y vista completa.',
        escenario:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.0192727504553!2d-74.06304442523201!3d4.756621429826884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85bae1d8a237%3A0x272aaf4e65db467d!2sTeatro%20Mayor%20Julio%20Mario%20Santo%20Domingo!5e0!3m2!1ses-419!2sco!4v1783520448400!5m2!1ses-419!2sco"
    },
    {
        nombre:'media maratón bogotá',
        descripcion:'Has parte de la media maratón de Bogota y participa de una jornada en donde se potencia el deporte, bienestar y que se pueden desarrollar eventos que sean beneficos tanto con nosotros como con el medio ambiente.',
        categoria:['actividades culturales','festival'],
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KcbLiNKReOFNX1OmLpcWNNCmUGOk9XoXIYx8_DECFKL7Eq3rxOhC3FVX&s=10',
        vip:0,
        caracteristicas_vip:'No aplica',
        generales:310_000,
        caracteristicas_generales:'Entrenamientos gratuitos, app de tracking, camiseta oficial, numero de competencia, bolsa oficial del evento, medalla de finalizacion, atencion de primeros auxilios, guardaropa, certificado de finalista.',
        escenario:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.2579465131662!2d-74.09068367528043!3d4.660617234949687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ba5d8771fc1%3A0xa1553b918c31175e!2sPlaza%20de%20Eventos%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1783520993759!5m2!1ses-419!2sco"
    }
]