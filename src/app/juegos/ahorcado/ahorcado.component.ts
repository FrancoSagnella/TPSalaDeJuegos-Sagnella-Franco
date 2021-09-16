import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { palabras } from '../juegos-constantes';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  palabrasParaUsar:string[] = [];
  // el juego empezo?
  empezo:boolean;

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
    this.palabrasParaUsar = this.mezclar(palabras.slice());
    this.nuevaPalabra();
  }

  seleccionarLetra(letra:string) {
    let acierto = false;
    for(let i = 0; i < this.palabraActualArray.length; i++)
    {
      if(this.palabraActualArray[i] == letra)
      {
        this.estadoPalabra[i] = letra;
        this.letrasAcertar--;
        acierto = true;
      }
    }

    if(!acierto)
    {
      this.casoError();
    }

    this.casoAcierto();
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
      Swal.fire('Ganaste!!', 'Acertaste todas las palabras', 'success');
      this.terminarJuego();
    }
  }

  casoAcierto() {
    if(this.letrasAcertar == 0)
    {
      // reproducir algun sonido de exito, por ejemplo
      this.puntos++;
      this.nuevaPalabra();
    }
  }

  casoError() {
    this.erroresCont++;
    if(this.erroresCont >= 6)
    {
      //mostrar que perdiste o algo
      Swal.fire('Perdiste!', 'Llegaste al maximo de errores tu puntuacion final es: '+this.puntos, 'error');
      this.terminarJuego();
      // calculo que tendria que guardar los puntajes en algun log
    }
  }

  terminarJuego() {
    this.empezo = false;// pongo el comienzo del juego en false
    this.erroresCont = 0;
    this.puntos = 0;
  }
}
