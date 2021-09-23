import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private http:HttpClient) { }

  traerFoto(buscar:string){
    // let input = buscar;
    // const key="23526716-6552667da117c4ee18df94961";
    // var URL = "https://pixabay.com/api/?key=" + key + "&q= "+input;
    // const respuesta=await fetch(URL);
    // const resultado=await respuesta.json();
    // let imagenes=resultado.hits;
    // console.info("foto",imagenes);
    // console.info("foto",imagenes[0].pageURL);
    // return  await imagenes[0].previewURL;
    
    let input = buscar;
    const key="23526716-6552667da117c4ee18df94961";
    var URL = "https://pixabay.com/api/?key=" + key + "&q= "+input;
    return this.http.get(URL);
  }
}
