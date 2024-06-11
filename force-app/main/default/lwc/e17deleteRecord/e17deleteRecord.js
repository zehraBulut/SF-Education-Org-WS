import { LightningElement, api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class DeleteAccount extends LightningElement {

    @api recordId = '0018d00000iUJhLAAW';
    @api objectApiName;

    deleteRecord() {
        deleteRecord(this.recordId)
            .then(() => {

                console.log('Record is deleted successfully');
            })
            .catch(error => {

                console.error(error);
            });
    }
}