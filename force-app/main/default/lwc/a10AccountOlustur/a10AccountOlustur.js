import { LightningElement } from 'lwc';
 import accOlustur from '@salesforce/apex/AccountOlusturLwcile.accountOlustur';
 import { ShowToastEvent } from 'lightning/platformShowToastEvent';


 export default class A10AccountOlustur extends LightningElement {

 accountName

 handleAccountName(event){
 this.accountName = event.target.value
 }

 //Lwc Toast message
   handleClick(){
   accOlustur({accName:this.accountName})

    .then((response) => { 
    if(response === 'MALADETS' ){
 
   this.dispatchEvent( new ShowToastEvent({
   title: 'TEBRIKLER!',
   message: 'Tebrikler bir adet accout olusturdunuz',
   variant: 'success',

 }))

    }else if (response == 'IZVINI' ){
       this.dispatchEvent( new ShowToastEvent({
           title: 'Warning!',
           message: 'sory',
           variant: 'error'
         }))

    }

    } )
 .catch((error)=>{console.log('Error olustu')})


 }



 }