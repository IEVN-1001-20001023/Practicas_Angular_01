import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CalculadoraGradosComponent } from './calculadora/calculadora-grados/calculadora-grados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionAxBComponent } from './formularios/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { CinepolisComponent } from './Cine/cinepolis/cinepolis.component';
import { MaterialModule } from './material/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraGradosComponent,
    MultiplicacionAxBComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
