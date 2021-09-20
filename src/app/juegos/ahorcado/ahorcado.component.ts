import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { palabras } from '../juegos-constantes';
import { abecedario } from '../juegos-constantes';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  palabrasParaUsar:string[] = [];
  abecedario = abecedario;
  botones:Array<{letra:string,estado:string,presionado:boolean}>=[];
  // el juego empezo?
  empezo:boolean;
  terminado:boolean = false;
  mensajeFinal:string = '';
  resultado:boolean = false;

  erroresCont:number;
  puntos:number;
  letrasAcertar:number;

  palabraActual:string|undefined;
  palabraActualArray:any = [];

  estadoPalabra:any = [];


  constructor() { 
    this.empezo = false;
    this.erroresCont = 0;
    this.puntos = 0;
    this.palabraActual = '';
    this.letrasAcertar = 0;
  }

  ngOnInit(): void {
  }

  comenzarJuego() {
    this.empezo = true;
    this.puntos = 0;
    this.erroresCont = 0;
    this.palabrasParaUsar = this.mezclar(palabras.slice());
    this.nuevaPalabra();
    this.crearBotones();
  }

  crearBotones() {
    this.botones = [];
    for (let i = 0; i < this.abecedario.length; i++) {
      this.botones.push({ letra: this.abecedario[i], presionado:false, estado:'boton-no-seleccionado' });
    }
  }

  seleccionarLetra(boton:{letra:string,estado:string,presionado:boolean}) {
    let acierto = false;
    for(let i = 0; i < this.palabraActualArray.length; i++)
    {
      if(this.palabraActualArray[i] == boton.letra.toLowerCase())
      {
        this.estadoPalabra[i] = boton.letra.toLowerCase();
        this.letrasAcertar--;
        acierto = true;
      }
    }

    if(!acierto)
    {
      this.casoError();
      boton.estado = 'boton-letra-no-acertada';
      boton.presionado = true;
    }
    else
    {
      this.casoAcierto();
      boton.estado = 'boton-letra-acertada';
      boton.presionado = false;
    }
  }

  mezclar(array:any) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  nuevaPalabra() {
    if(this.palabrasParaUsar.length != 0)
    {
      this.estadoPalabra = [];
      this.palabraActual = this.palabrasParaUsar.pop()?.toLowerCase();
      this.palabraActualArray = this.palabraActual?.split('');
      this.letrasAcertar = this.palabraActualArray.length;
      for(let i = 0; i < this.palabraActualArray.length; i++)
      {
        this.estadoPalabra.push('_');
      }
      console.info(this.estadoPalabra);
      console.info(this.palabraActualArray);
    }
    else
    {
      // Swal.fire('Ganaste!!', 'Acertaste todas las palabras', 'success');
      this.terminarJuego();
      this.mensajeFinal = 'Acertaste todas las palabras!';
      this.resultado = true;
    }
  }

  casoAcierto() {
    if(this.letrasAcertar == 0)
    {
      // reproducir algun sonido de exito, por ejemplo
      this.puntos++;
      this.nuevaPalabra();
      this.crearBotones();
    }
  }

  casoError() {
    this.erroresCont++;
    if(this.erroresCont >= 6)
    {
      //mostrar que perdiste o algo
      // Swal.fire('Perdiste!', 'Llegaste al maximo de errores tu puntuacion final es: '+this.puntos, 'error');
      this.terminarJuego();
      this.mensajeFinal = 'Llegaste al maximo de errores permitidos!';
      this.resultado = false;
      // calculo que tendria que guardar los puntajes en algun log
    }
  }

  terminarJuego() {
    this.empezo = false;// pongo el comienzo del juego en false
    this.terminado = true;
  }

  reiniciarJuego() {
    this.terminado = false;
  }
}
