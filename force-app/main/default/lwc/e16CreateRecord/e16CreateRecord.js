import { LightningElement } from 'lwc';

export default class E16CreateRecord extends LightningElement {

    successMessage;
    successHandler(e){
        this.successMessage=' new account has been created id: ' + e.detail.id;
    }

}