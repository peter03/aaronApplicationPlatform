import { IId } from 'src/app/interface/aaap/IId';

export class Role implements IId {

  id: number;
  rolegroupId: number;
  name: string;
  description: string;
  ruleId?: number[];

  constructor() {
    this.rolegroupId = 1;
  }

}
