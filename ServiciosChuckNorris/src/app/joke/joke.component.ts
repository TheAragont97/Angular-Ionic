import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  public form:FormGroup;
  public opcionSeleccionada:string;
  public texto:any;
  constructor(public chuck:ServiciosService) { }
  metodoRecibirBroma(){
    this.chuck.metodoCategoriaSelect();
    this.texto=this.chuck.broma["value"];
  }
  capturarCategoria(){
    this.chuck.categoria=this.opcionSeleccionada;
  }
  ngOnInit(): void {
    this.chuck.categoria=this.opcionSeleccionada;
    this.chuck.metodoLectura();
    this.form = new FormGroup({
      categoria: new FormControl()
    });
  }

}
