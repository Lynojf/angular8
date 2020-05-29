import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './component/correo/correo.component';
import { ListaCorreoComponent } from './component/lista-correo/lista-correo.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
