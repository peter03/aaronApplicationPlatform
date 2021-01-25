import { IId } from '../../interface/aap/IId';

export class User implements IId {

  id: number;
  loginName: string;
  personId: number;
  //person: Person;
  isDisabled: boolean;
  roleId?: number[];
  ruleId?: number[];

  password: string;
  confirmPassword: string;

  //get isAdmin(): boolean {
  //  return this.loginName.toLocaleLowerCase() === "admin";
  //}

  constructor() {
    //this.person = new Person()
  }


}
