import { Carta } from "./clases/carta";
import { Pregunta } from "./clases/pregunta";

export const palabras:string[] = ['Camion', 'Perro', 'Arbol', 'Diversion', 'Entumecido', 'Manga', 'Pimienta',
                      'Segundos', 'Ventilador', 'Larva'];

                    //    , 'Tubos', 'Espuelas', 'Invitado', 'Silueta',
                    //   'Murmurar', 'Esquiador', 'Tarjetas', 'Alpiste', 'Revistero', 'Timbre', 'Tocar',
                    //   'Entrometido', 'Vals', 'Terraza', 'Comisario', 'Carta', 'Trompeta', 'Masa',
                    //   'Tobillo', 'Obligatorio', 'Zeus', 'Marfil', 'Cementerio', 'Boya', 'Lago',
                    //   'Descubrimiento', 'Corte', 'Narracion', 'Tabique', 'Fibra', 'Herir', 'Latir',
                    //   'Traccion', 'Volante', 'Derramar', 'Cinco', 'Canario', 'Peaje', 'Cantar',
                    //   'Secuestrar', 'Comodin', 'Cables', 'Muro', 'Maquina', 'Huevos', 'Triturar',
                    //   'Vicio', 'Naranja', 'Cabaret', 'Abuela', 'Cruzar', 'Saltar', 'Manteca',
                    //   'Pescar', 'Armas', 'Elecciones', 'Electricidad', 'Gastar', 'Cebo', 'Adentro',
                    //   'Clavo', 'Orquesta', 'Conquistar', 'Globo', 'Alinear', 'Ganado', 'Bronce'

export const listaCartas:Carta[] = [{palo: 'oro', numero: 1, imagenUrl: '../../../assets/cartas/1Oro.png'},
                      {palo: 'oro', numero: 2, imagenUrl: '../../../assets/cartas/2Oro.png'},
                      {palo: 'oro', numero: 3, imagenUrl: '../../../assets/cartas/3Oro.png'},
                      {palo: 'oro', numero: 4, imagenUrl: '../../../assets/cartas/4Oro.png'},
                      {palo: 'oro', numero: 5, imagenUrl: '../../../assets/cartas/5Oro.png'},
                      {palo: 'oro', numero: 6, imagenUrl: '../../../assets/cartas/6Oro.png'},
                      {palo: 'oro', numero: 7, imagenUrl: '../../../assets/cartas/7Oro.png'},
                      {palo: 'oro', numero: 8, imagenUrl: '../../../assets/cartas/8Oro.png'}, ] ;

export const abecedario:string[] = ["A", "B", "C", "D", "E", "F", "G",
                                    "H", "I", "J", "K", "L", "M", "N",
                                    "Ñ", "O", "P", "Q", "R", "S", "T",
                                    "U", "V", "W", "X", "Y", "Z"];

export const preguntas:Pregunta[] = [{pregunta:'¿Cuanto es 2+2?', opcion1:'2', opcion2:'4',opcion3:'6',opcion4:'8',opcionCorrecta:'4', tematica:'matematicas', opcionPiola:'2'},
                      {pregunta:'¿Cuanto es 3+3?', opcion1:'3', opcion2:'9',opcion3:'6',opcion4:'12',opcionCorrecta:'6', tematica:'matematicas', opcionPiola:'3'},
                      {pregunta:'¿Cuanto es 4+4?', opcion1:'12', opcion2:'24',opcion3:'6',opcion4:'8',opcionCorrecta:'8', tematica:'matematicas', opcionPiola:'4'},
                      {pregunta:'¿Cuanto es 5+5?', opcion1:'10', opcion2:'4',opcion3:'15',opcion4:'25',opcionCorrecta:'10', tematica:'matematicas', opcionPiola:'1'},
                      {pregunta:'¿Cuanto es 6+6?', opcion1:'6', opcion2:'66',opcion3:'12',opcion4:'8',opcionCorrecta:'12', tematica:'matematicas', opcionPiola:'3'},]