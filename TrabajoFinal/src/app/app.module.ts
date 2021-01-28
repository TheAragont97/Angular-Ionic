import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeleccionadorComponent } from './seleccionador/seleccionador.component';
import { LoginComponent } from './login/login.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasFormComponent } from './noticias-form/noticias-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionadorComponent,
    LoginComponent,
    ListaNoticiasComponent,
    NoticiaComponent,
    NoticiasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
