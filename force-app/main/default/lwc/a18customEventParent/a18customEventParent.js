import { LightningElement } from 'lwc';
export default class A18customEventParent extends LightningElement {
   //custom EVENT BIR
    yeniBilgi=''
    handleElma(){
   this.yeniBilgi=' CUSTOM EVENT OLUSTU'

    }
  //custom primitive Data
  yeniBilgiPrimitive='BURASI DEGİSİCEK'
  handleArmut(event){
   this.yeniBilgiPrimitive=event.detail
  }

  //customer event OBJECT gonderme
    customer={
        name:'',
        age:''
    }

    handleAyva(event){
     this.customer=event.detail
  }

}