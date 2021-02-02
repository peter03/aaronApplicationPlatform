import { IId } from 'src/app/interface/aaap/IId';

export class Rule implements IId {

  id: number;
  rulegroupId: number;
  name: string;
  description: string;

  constructor() {
  }

}
