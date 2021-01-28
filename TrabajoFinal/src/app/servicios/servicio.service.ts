import { Noticia } from '../noticia';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private estado:boolean=true; 
  private noticias:Noticia[];
  constructor(private http:HttpClient) { 
    this.noticias=[
      new Noticia("Muere Maradona","El pelusa muere a los 60 años",new Date(2020,6,25))
    ];
  }
  addNoticia(titulo:string,contenido:string,fechaCreacion:Date){
    this.noticias.unshift(new Noticia(titulo,contenido,fechaCreacion));
  }
  deleteNoticia(noticia){
    let posicion = this.noticias.indexOf(noticia);
    this.noticias.splice(posicion,1);
  }
  getNoticia(){
    return this.noticias;
  }
  setEstado(estado){
    this.estado=estado;
  }
  getEstado(){
    return this.estado;
  }
}
