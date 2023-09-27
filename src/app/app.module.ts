import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraGradosComponent } from './calculadora/calculadora-grados/calculadora-grados.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraGradosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
