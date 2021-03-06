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
                                    "??", "O", "P", "Q", "R", "S", "T",
                                    "U", "V", "W", "X", "Y", "Z"];

export const preguntas:Pregunta[] = [{pregunta:'??Cuanto es 2+2?', opcion1:'2', opcion2:'4',opcion3:'6',opcion4:'8',opcionCorrecta:'4', tematica:'maths', opcionPiola:'2'},
                      {pregunta:'??A quien pertence este logo?', opcion1:'Batman', opcion2:'Linterna verde',opcion3:'Superman',opcion4:'Spiderman',opcionCorrecta:'Superman', tematica:'Superman', opcionPiola:'3'},
                      {pregunta:'??Que pokemon se muestra en la imagen?', opcion1:'Bulbasaur', opcion2:'Eevee',opcion3:'Charmander',opcion4:'Pikachu',opcionCorrecta:'Pikachu', tematica:'Pikachu', opcionPiola:'4'},
                      {pregunta:'??Que monumento se muestra en la imagen?', opcion1:'El monumento a la bandera', opcion2:'El obelisco',opcion3:'El teatro colon',opcion4:'Mi casa',opcionCorrecta:'El obelisco', tematica:'Obelisco', opcionPiola:'2'},
                      {pregunta:'??Como se llama el principal villano de la saga The legend of Zelda?', opcion1:'Ganon', opcion2:'Arthas',opcion3:'Link',opcion4:'Darius',opcionCorrecta:'Ganon', tematica:'zelda', opcionPiola:'1'},]