import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre:string="";
  cantidad:number=0;
  boletos:number=0;
  si:string="";
  no:string="";
  total:number=0;
  error:string='';
  cuenta:number=0;
  
  verificar(){
    if((this.boletos/this.cantidad)>7){
      this.error="Error";
    }else{
      this.error="";
    }
  }

  procesar(){
    this.cuenta=this.boletos*12.000;
    if((this.boletos/this.cantidad)==6||(this.boletos/this.cantidad)==7){
      this.total=this.cuenta*0.85;
    }
    if((this.boletos/this.cantidad)>2&&(this.boletos/this.cantidad)<6){
      this.total=this.cuenta*0.90;
    }
    if((this.boletos/this.cantidad)==1||(this.boletos/this.cantidad)==2){
      this.total=this.cuenta;
    }
    if(this.si){
      this.total=this.total*.90;
    }
    if(this.no){
      this.total=this.total;
    }
  }
}
