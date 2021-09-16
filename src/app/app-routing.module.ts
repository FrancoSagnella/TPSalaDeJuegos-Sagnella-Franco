import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
{ 
  path: '', 
  redirectTo: 'home', 
  pathMatch: 'full'
},
{ 
  path: 'home', 
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

{ 
  path: 'auth', 
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
{ 
  path: 'juegos', 
  loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule) },
{
  path: 'chat',
  component: ChatComponent,
  canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
