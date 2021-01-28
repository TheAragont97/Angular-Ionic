import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
@Component({
  selector: 'app-listado-items',
  templateUrl: './listado-items.component.html',
  styleUrls: ['./listado-items.component.scss']
})
export class ListadoItemsComponent implements OnInit {
 public showFiller:boolean;
  constructor() { }

  ngOnInit(): void {
  }
}
