import { LightningElement, api } from 'lwc';
export default class A13setChildObject extends LightningElement {
    container 
    get childCustomer(){
    return this.container
    }

    @api
    set childCustomer(data){
     //spread operator 1.yontem
     let geciciCustomer = {...data}
     geciciCustomer.name = geciciCustomer.name.toUpperCase() + ' fenerbahce'
     geciciCustomer.age = geciciCustomer.age -9

     this.container = geciciCustomer

     //spread operator 2. yontem
     let geciciCustomer2 = {...data , name: data.name.toUpperCase() + ' BESIKTAS  ' , age: data.age -3 } 
     this.container = geciciCustomer2


      //Object.assign({} , data) yontemi
      let geciciCustomer3 = Object.assign({} , data)
      geciciCustomer3.name= geciciCustomer3.name +' **///**///*' 
      geciciCustomer3.age= geciciCustomer3.age-10
      this.container = geciciCustomer3

      /*_.cloneDeep yontemi !!!(bu calısmadı sonra bakarsın)
      let geciciCustomer4= _.cloneDeep(data)
      geciciCustomer3.name= geciciCustomer3.name + 'djhfhd'
      this.container = geciciCustomer4 */
}



}