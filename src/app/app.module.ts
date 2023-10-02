import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { CalculadoraGradosComponent } from './calculadora/calculadora-grados/calculadora-grados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionAxBComponent } from './formularios/multiplicacion-ax-b/multiplicacion-ax-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraGradosComponent,
    MultiplicacionAxBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
