import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  seccion?: string;
  datosPersonales:any;
  img:string='';
  nombre:string='';
  github:string='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.setSeccion("descripcion");
    this.datosGitHub();
  }

  setSeccion(seccion: string){
    this.seccion = seccion;
  }

  datosGitHub() {
    this.http.get("https://api.github.com/users/FrancoSagnella").subscribe(datosRetornados => {
      console.info('datos github', datosRetornados);
      this.datosPersonales=datosRetornados;
      
      this.img=this.datosPersonales.avatar_url;
      this.nombre=this.datosPersonales.name;
      this.github=this.datosPersonales.html_url;
    });
  }
}
