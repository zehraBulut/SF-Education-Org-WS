import { LightningElement,api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
export default class E18deleteRecordNavigateTable extends LightningElement {
    @api recordId ='0038b00002in40SAAQ';
    @api objectApiName;

    deleteRecord() {
        deleteRecord(this.recordId)
            .then(() => {
                // Record is deleted successfully
                console.log('Record is deleted successfully');
                // Navigate to account table
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Account',
                        actionName: 'list'
                    },
                });
            })
            .catch(error => {
                // Handle error while deleting the record
                console.error(error);
            });
    }


}