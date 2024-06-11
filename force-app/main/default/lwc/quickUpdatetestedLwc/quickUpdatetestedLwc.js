import { LightningElement , api } from 'lwc';
import { showToastEvent} from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent} from 'lightning/actions';

export default class QuickUpdatetestedLwc extends LightningElement {
    
    @api recordId;
    @api objectApiName;
    handleSuccess(event){
    this.dispatchEvent(new CloseActionScreenEvent());
    this.dispatchEvent(
   new showToastEvent({
   title: 'Success',
   message: 'Record updated',
   variant: 'Success'
    })
   );
  }
}