import { LightningElement } from 'lwc';
export default class E12renderDomElementsConditionally extends LightningElement {

    firstName;
    lastName;
    rollNumber;
    grade;
    display=true;

    handlerFirstName(e){
        this.firstName=e.target.value;
    }

    handlerLastName(e){
        this.lastName=e.target.value;
    }

    handlerRollNumber(e){
        this.rollNumber=e.target.value;
    }

    handlerGrade(e){
        this.grade=e.target.value;
    }

    saveButtonHandler(e){
        this.display=false;
    }

}