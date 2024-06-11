import { LightningElement, api } from 'lwc';

export default class A13getChildObject extends LightningElement {

    container 
get childCustomer(){
return this.container
}
@api
set childCustomer(data){
 //spread operator 1.yontem
 let geciciCustomer = {...data}
 geciciCustomer.name = geciciCustomer.name.toUpperCase() + 'abi'
 geciciCustomer.age = geciciCustomer.age -5


 //spread operator 2.yontem(manıpule edıyoruz 1.yontemdekı valueları)
 let geciciCustomer2 = {...data , name: data.name.toUpperCase() + 'buyuk abi ***' }
 //let geciciCustomer3= {...data , age: data.age+ 10  }
 this.container= geciciCustomer2
  //this.container= geciciCustomer3


}

}