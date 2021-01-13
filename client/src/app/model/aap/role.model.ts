import { IId } from 'src/app/interface/aap/IId';

export class Role implements IId {

  id: number;
  rolegroupId: number;
  name: string;
  description: string;

  constructor() {
    this.rolegroupId = 1;
  }

}