import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaDirective } from './directiva.directive';
import { ComponenteComponent } from './componente/componente.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaDirective,
    ComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
