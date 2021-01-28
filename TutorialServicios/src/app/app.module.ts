import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JokeComponentComponent } from './joke-component/joke-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeFormComponent,
    JokeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
