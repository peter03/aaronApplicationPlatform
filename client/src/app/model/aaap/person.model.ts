import { IId } from 'src/app/interface/aaap/IId';

export class Person implements IId {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  addressId: number;
  //address: Address;

  constructor() {
    //this.person = new Person()
  }


}
