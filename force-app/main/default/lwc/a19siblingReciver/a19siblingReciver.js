import { LightningElement , wire } from 'lwc';
import {registerListener,  unregisterAllListeners } from 'c/pubsub'
import { CurrentPageReference } from 'lightning/navigation';
export default class A11siblingReciver extends LightningElement {

// const registerListener = (eventName, callback, thisArg)
// const unregisterAllListeners = thisArg

  @wire(CurrentPageReference)
  pageRef;

   //(radyoyu yuklenecegı zaman acmak ıstyrz)
    connectedCallback(){  
    registerListener('RadyoYayini', this.handleRadyoYayini, this)
     }

   newCustomer= {
    name:'',
    age:0
    }
    
   ikincitask={
        name:'',
        age:0 
    }




   handleRadyoYayini(detail){
   alert(detail.name + ' cok guzel bir sarkiydi')
   
   // birinci task  
    this.newCustomer= detail

      // ikinci task
  let container ={...detail}
  console.log("costomer name" + container.name )
  

  container.name = container.name.toUpperCase()
  container.age=container.age-3
  this.ikincitask = container

   }
   disconnectedCallback(){
    unregisterAllListeners(this)
  }
  }