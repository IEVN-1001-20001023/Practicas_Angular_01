import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-grados',
  templateUrl: './calculadora-grados.component.html',
  styleUrls: ['./calculadora-grados.component.css']
})
export class CalculadoraGradosComponent {
  Centigrados: string = '';
  Farenheit: string ='';
  Grados:string='';
  resultado:number=0;
  
  validar():void{
    if(this.Centigrados){
      this.resultado=(parseInt(this.Grados)-32)*(5/9);
    }
    if(this.Farenheit){
      this.resultado=(parseInt(this.Grados)*(9/5))+32;
    }
  }

}