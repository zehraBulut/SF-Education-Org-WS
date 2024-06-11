import { LightningElement } from 'lwc';
export default class A18customChildIki extends LightningElement {
   
 childdanBilgi='burasi childdan gelen bilgi'

 handleClick(){
 const cstEvent= new CustomEvent('armut' , {detail: this.childdanBilgi})//ne gonderceksen 2iparametera onu yaz
 this.dispatchEvent(cstEvent)
       
 //this.dispatchEvent(new CustomEvent('armut'))
       
 }
}