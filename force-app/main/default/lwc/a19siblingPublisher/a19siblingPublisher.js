import { LightningElement ,track , wire } from 'lwc';
import { fireEvent } from 'c/pubsub'
import { CurrentPageReference } from 'lightning/navigation';
export default class A11SiblingPublisher extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;

   @track
   customer ={
    name:'eslem',
    age: 39
 }


 handleIsim(event){
 this.customer={...this.customer,name:event.target.value,
    }
 }

 handleAge(event){
 thiscustomer={...thiscustomer,age:event.target.value,
   }
 }


 // const fireEvent = (pageRef, eventName=radyoYayini, payload=datamiz) 
    handleClick(event){
   fireEvent(this.pageRef, 'RadyoYayini', this.customer)
    }
}