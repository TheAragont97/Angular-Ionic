import { ServicioService } from './../servicios/servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-form',
  templateUrl: './noticias-form.component.html',
  styleUrls: ['./noticias-form.component.scss']
})
export class NoticiasFormComponent implements OnInit {
  public fecha:Date
  constructor(public service:ServicioService) { }

  ngOnInit(): void {
    this.fecha=new Date(Date.now());
  }

}
