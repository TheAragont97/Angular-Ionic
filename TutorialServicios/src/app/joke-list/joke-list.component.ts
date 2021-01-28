import { JokeServiceService } from './../joke-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  public jokes:any;
  constructor(private bromas:JokeServiceService) { }

  ngOnInit(): void {
    this.jokes=this.bromas.getJoke();
  }

}
