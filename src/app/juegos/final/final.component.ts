import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  @Input() nombreJuego:string = '';
  @Input() puntos:number = 0;
  @Input() errores:number = 0;
  @Input() mensaje:string = '';
  @Input() resultado:boolean = false;
  @Output() reiniciarJuego:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  volverAJugar() {
    this.reiniciarJuego.emit();
  }
}
