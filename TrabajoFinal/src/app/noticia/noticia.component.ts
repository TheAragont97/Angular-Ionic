import { ServicioService } from './../servicios/servicio.service';
import { Noticia } from './../noticia';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {
  @Input('noticia') noticia:Noticia;
  constructor(public service:ServicioService) { }

  ngOnInit(): void {
  }

}
