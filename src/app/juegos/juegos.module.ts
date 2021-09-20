import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { TecladoComponent } from './teclado/teclado.component';
import { ColorComponent } from './color/color.component';
import { FinalComponent } from './final/final.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';



@NgModule({
  declarations: [
    PreguntadosComponent,
    TecladoComponent,
    ColorComponent,
    AhorcadoComponent,
    MayormenorComponent,
    FinalComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
  ]
})
export class JuegosModule { }
