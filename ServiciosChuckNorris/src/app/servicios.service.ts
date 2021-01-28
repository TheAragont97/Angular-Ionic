import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  public categorias:any;
  public categoria:any;
  public broma:any;
  constructor(private http:HttpClient) { }
  metodoCategoriaSelect(){
    console.log(this.categoria);
    const category = "https://api.chucknorris.io/jokes/random?category="+this.categoria;
    this.http.get(category,{responseType:"text"})
    .subscribe(cat=>{
      this.broma = cat;
      console.log(this.broma);
    });
  }

  metodoLectura(){
    //return this.http.get('urlAPI').toPromise();
    this.http.get('https://api.chucknorris.io/jokes/categories')
    .subscribe(r=>{
      this.categorias = r;
    });
  }
  
}
