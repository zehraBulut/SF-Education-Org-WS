import { LightningElement } from 'lwc';

export default class E16createAccount extends LightningElement {
    successMessage;
    contactDetails;
    handleSuccess(event) { 
        this.successMessage ='New Contact has been created. ID: ' + event.detail.id;
    }

}