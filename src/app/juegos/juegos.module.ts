import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { TecladoComponent } from './teclado/teclado.component';



@NgModule({
  declarations: [
    PreguntadosComponent,
    TecladoComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
  ]
})
export class JuegosModule { }
