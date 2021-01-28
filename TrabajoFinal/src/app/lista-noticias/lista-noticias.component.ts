import { ServicioService } from './../servicios/servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.scss']
})
export class ListaNoticiasComponent implements OnInit {
  public noticias:any;
  constructor(public service: ServicioService) { }

  ngOnInit(): void {
    this.noticias=this.service.getNoticia();
  }

}
