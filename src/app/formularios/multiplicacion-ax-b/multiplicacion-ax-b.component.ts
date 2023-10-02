import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-ax-b',
  templateUrl: './multiplicacion-ax-b.component.html',
  styleUrls: ['./multiplicacion-ax-b.component.css']
})
export class MultiplicacionAxBComponent {
  num1=0;
  num2=0;
  res=0;
  conca:string='+';
  num=0;
  i=0;
  op:string='';

  calcular():void{
    for(this.num=0; this.num < this.num1; this.num++){
      this.res = 0;
      this.op ='';
      this.res += this.num2;
      this.op += this.num2;
      for(this.num=1; this.num < this.num1; this.num++){
        this.op += this.conca + this.num2;
        this.res += this.num2;
      }
      
    }
  }
}
