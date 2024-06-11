import { LightningElement } from 'lwc';
export default class breakExample extends LightningElement {   
  firstName;
  lastName;

  handleAd(e){
    this.firstName=e.target.value
  }
  handleAd(e){
    this.lastName=e.target.value
  }
  get fullName(){
    return this.firstName + this.lastName;
  }
}