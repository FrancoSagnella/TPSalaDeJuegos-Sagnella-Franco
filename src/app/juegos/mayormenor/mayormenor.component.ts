import { Component, OnInit } from '@angular/core';
import { Carta } from '../clases/carta';
import Swal from 'sweetalert2';
import { listaCartas } from '../juegos-constantes';

@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

  empezo:boolean;

  cartasUsar:Carta[] = [];
  ultimaCarta:any;
  proximaCarta:any;
  imagenUrl:string|undefined = '';
  
  
  puntos:number;
  erroresCont:number;

  constructor() {
    this.empezo = false;
    this.puntos = 0;
    this.erroresCont = 0;
    this.ultimaCarta = {palo:'',numero:0,imagenUrl:''},
    this.proximaCarta = {palo:'',numero:0,imagenUrl:''};
  }

  ngOnInit(): void {
  }

  comenzarJuego() {
    this.cartasUsar = this.mezclar(listaCartas.slice());
    console.info(this.cartasUsar);
    console.info(listaCartas);
    this.robar();
    this.empezo = true;
  }

  mezclar(array:any) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  robar() {
    this.ultimaCarta = this.cartasUsar?.pop();
    if(this.cartasUsar.length != 0)
    {
      this.proximaCarta = this.cartasUsar[this.cartasUsar.length-1];
      this.imagenUrl = this.ultimaCarta?.imagenUrl;
      // console.info(this.ultimaCarta);
      // console.info(this.proximaCarta);
    }
    else
    {
      Swal.fire('Termino el juego!', 'Se robaron todas las cartas', 'success');
      this.terminarJuego()
    }
  }

  elegirBoton(eleccion:string) {
    if(eleccion == 'mayor')
    {
      if(this.proximaCarta.numero > this.ultimaCarta.numero)
      {
        this.casoAcierto();
      }
      else
      {
        this.casoError();
      }
    }
    else if(eleccion == 'igual') 
    {
      if(this.proximaCarta.numero == this.ultimaCarta.numero)
      {
        this.casoAcierto();
      }
      else
      {
        this.casoError();
      }
    }
    else
    {
      if(this.proximaCarta.numero < this.ultimaCarta.numero)
      {
        this.casoAcierto();
      }
      else
      {
        this.casoError();
      }
    }
  }

  casoError() {
    this.erroresCont++;
    if(this.erroresCont >= 10)
    {
      Swal.fire('Perdiste!', 'Llegaste al maximo de errores tu puntuacion final es: '+this.puntos, 'error');
      this.terminarJuego();
    }
    else
    {
      this.robar();
    }
  }

  casoAcierto() {
    this.puntos++;
    this.robar();
  }

  terminarJuego() {
    this.empezo = false;
    this.puntos = 0;
    this.erroresCont = 0;
  }
}
