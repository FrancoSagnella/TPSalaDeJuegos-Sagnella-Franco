import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagina/home/home.component';
import { LoginComponent } from './pagina/login/login.component';
import { QuienSoyComponent } from './pagina/quien-soy/quien-soy.component';
import { ErrorComponent } from './pagina/error/error.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "quien-soy", component: QuienSoyComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
