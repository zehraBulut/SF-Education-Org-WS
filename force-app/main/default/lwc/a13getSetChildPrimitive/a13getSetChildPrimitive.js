import { LightningElement, api } from 'lwc';

export default class A13getSetChildPrimitive extends LightningElement {
    @api
    gelenYas=0
    buYas=this.gelenYas


 dogumYili=2023-this.gelenYas
 get dogumYiliGet(){
    return 2023-this.gelenYas
 }


 container
 @api
 get dogumYiliGetSet(){
 return this.container
 }

 
//@api burdada kulanlablr farketmz->data=yas
 set dogumYiliGetSet (data){
 let date =  new Date().getFullYear();
 this.container= 2023-data
 }


}