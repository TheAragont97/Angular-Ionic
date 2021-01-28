import { ServicioService } from './../servicios/servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccionador',
  templateUrl: './seleccionador.component.html',
  styleUrls: ['./seleccionador.component.scss']
})
export class SeleccionadorComponent implements OnInit {
  private texto:string;
  public estadoPositivo:boolean=true;
  constructor(public servicio:ServicioService) { }
  cambioEstilo(){
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo;
    this.servicio.setEstado(this.estadoPositivo);
  }
  ngOnInit(): void {
  }

}
