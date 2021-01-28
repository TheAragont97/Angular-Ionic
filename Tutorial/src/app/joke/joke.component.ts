import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';
import { Joke } from '../joke';
import {Input} from '@angular/core';
@Component({
  selector: 'joke',
  template:`
  <div class="card card-block">
    <h4 class="card-title">{{data.setup}}</h4>
    <p class="card-text"
    [hidden]="data.hide">{{data.punchline}}</p>
    <a (click)="data.toggle()">Tell Me</a>
    <button type="button"
    class="btn btn-warning"
    (click)="deleteJoke()">Delete
    </button>
  </div> 
  `  
})
export class JokeComponent implements OnInit {
  @Input('joke') data:Joke;
  @Output() jokeDeleted = new EventEmitter();
  constructor() { 
    
  }
  deleteJoke(){
    this.jokeDeleted.emit(this.data);
  }
  
  ngOnInit(): void {
  }

}

