import { LightningElement } from 'lwc';
export default class A16eventBubbling extends LightningElement {

    innerDiv =0
    middleDiv=0
    outerDiv =0

    handleInnerDiv(){
   this.innerDiv++
    }
    handleMiddleDiv(event){
    this.middleDiv++
    event.stopPropagation()
    }
    handleOuterDiv(){
    this.outerDiv++

    }
   }