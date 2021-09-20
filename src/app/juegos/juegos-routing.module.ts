import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { AuthGuard } from '../services/auth.guard';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { ColorComponent } from './color/color.component';

// const redirectUnauthorizedToLogin = () =>
//   redirectUnauthorizedTo(['auth/login']);

const routes: Routes = [
  { 
    path: 'ahorcado', 
    component: AhorcadoComponent, canActivate: [AuthGuard] },
  { 
    path: 'mayormenor', 
    component: MayormenorComponent, canActivate: [AuthGuard] },
  { 
    path: 'preguntados', 
    component: PreguntadosComponent, canActivate: [AuthGuard] },
  {
    path: 'colores',
    component:ColorComponent, canActivate: [AuthGuard] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule { }
