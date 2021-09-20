import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  numCuadrados:number = 6;
  colores:any[] = [];
  colorActual:string = '';
  empezo:boolean = false;
  terminado:boolean = false;
  mensajeFinal:string = '';
  resultado:boolean = false;
  dif:string = 'normal';

  rondas:number = 0;
  errores:number = 0;
  siguienteRonda:boolean = false;
  siguienteRondaMsj:string = 'Siguiente ronda';

  constructor() { }

  ngOnInit(): void {
  }

  elegirDificultad(dif:string) {
    if(dif == 'facil')
    {
      this.numCuadrados = 3
      this.dif = dif;
    }
    else if(dif == 'normal')
    {
      this.numCuadrados = 6
      this.dif = dif;
    }
    else
    {
      this.numCuadrados = 9
      this.dif = dif;
    }
  }

  generarCuadrados() {
    this.colores = [];
    for(let i=1; i < this.numCuadrados; i++)
    {
      this.colores.push(this.generarColor());
    }

    this.colores.push(this.colorActual);

    this.colores = this.mezclar(this.colores.slice()); 
  }

  mezclar(array:any) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  generarColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return 'rgb('+r+', '+g+', '+b+')';
  }

  seleccionarColor(colorSeleccionado:string, indice:number){
    if(this.colorActual == colorSeleccionado)
    {
      for(let i = 0; i < this.colores.length; i++)
      {
        this.colores[i] = colorSeleccionado;
      }

      // cambiar el boton por siguiente ronda
      if(this.rondas == 9)
      {
        this.rondas++;
        // mostrar alguna pantalla de victoria
        this.empezo = false;
        this.terminado = true;
        this.mensajeFinal = 'Tu puntuación fue perfecta!';
        this.resultado = true;
      }
      else
      {
        this.siguienteRonda = true;
      }
    }
    else
    {
      this.colores[indice] = '#ffffff';
      this.errores++;
      if(this.errores == 10)
      {
        // mostrar alguna pantalla de derrota
        this.empezo = false;
        this.terminado = true;
        this.mensajeFinal = 'LLegaste al maximo de errores permitidos!';
        this.resultado = false;
      }
    }
  }

  nuevaRonda() {
    this.rondas++;

    if(this.rondas == 8)
    {
      this.siguienteRondaMsj = 'Última ronda';
    }

    this.siguienteRonda = false;
    this.colorActual = this.generarColor();
    this.generarCuadrados();
  }

  comenzarJuego() {
    this.empezo = true;
    this.rondas = 0;
    this.errores = 0;

    this.colorActual = this.generarColor();
    this.generarCuadrados();
  }

  reiniciarJuego() {
    this.terminado = false;
  }
}
