import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import { Joke } from '../joke';
@Component({
  selector: 'joke-form',
  template: `<div class="card card-block">
  <h4 class="card-title">Create Joke</h4>
  <div class="form-group">
  <input type="text"
  class="form-control"
  placeholder="Enter the setup" #setup>
  </div>
  <div class="form-group">
  <input type="text"
  class="form-control"
  placeholder="Enter the punchline" #punchline>
  </div>
  <button type="button"
  class="btn btn-primary"
  (click)="createJoke(setup.value,punchline.value)">Create
  </button>
</div>
  `
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  

  constructor() { }

  createJoke(setup:string,punchline:string){
    this.jokeCreated.emit(new Joke(setup,punchline));
  }

  ngOnInit(): void {
  }

}
