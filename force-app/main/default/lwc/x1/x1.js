import { LightningElement } from 'lwc';
export default class X1 extends LightningElement {

Isimler= ['x','y','z']

girilenIndex=0
handleIndex(event){
this.girilenIndex=event.target.value
}

//secilenIsimFiltre=this.Isimler[this.girilenIndex]

get secilenIsimFiltreGet(){
if(this.girilenIndex < this.Isimler.length){
    return this.Isimler[this.girilenIndex]
}else{
    windows.alert('oooppps')


}

}





}