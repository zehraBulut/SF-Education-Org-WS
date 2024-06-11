import { LightningElement } from 'lwc';
export default class A17eventListenerParent extends LightningElement {
    //HTML Listener
    clickSayisi=0
    handleClick(){
    this.clickSayisi++
    }
  //JS Listener
  //querySelectorAll dersek tum dıv lerı dınlersın
  renderedCallback() {
    this.template.querySelector('c-a17event-js').addEventListener('click', this.handleClickFromChild); 
}
 
   handleClickFromChild() {
    alert("bu alarm child comp ın dugmesıne basıldiginda calisir.."); 
    window.alert("heyooooo buda windows alert ie olustu...");
}
}