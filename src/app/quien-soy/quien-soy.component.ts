import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  seccion?: string;

  constructor() { }

  ngOnInit(): void {
    this.setSeccion("descripcion");
  }

  setSeccion(seccion: string){
    this.seccion = seccion;
  }
}
