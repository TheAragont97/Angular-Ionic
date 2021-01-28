import { JokeServiceService } from './../joke-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-component',
  templateUrl: './joke-component.component.html',
  styleUrls: ['./joke-component.component.scss']
})
export class JokeComponentComponent implements OnInit {
  @Input('joke') joke:Joke;
  constructor(public jokeService:JokeServiceService) { }

  ngOnInit(): void {
  }

}
