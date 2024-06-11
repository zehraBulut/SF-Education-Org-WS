import { LightningElement } from 'lwc';
export default class A13getSetParent extends LightningElement {

  //primitive data transferi
  yas=0
  handleYas(e){
  this.yas= parseInt(e.target.value)
  }

  //object  data transferi
  customer ={
  name:'Ali',
  age:39
  }


//odewdı calısmadı bakk
  handleCustomerName(event){ 
  this.customer ={
  ...this.customer, name:event.target.value,
  }
 }
  handleCustomerAge(event){
  this.customer ={
  ...this.customer, age:event.target.value
  }
  }





 }