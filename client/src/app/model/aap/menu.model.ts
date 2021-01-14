import { IId } from 'src/app/interface/aap/IId';

export class Menu implements IId {

  id: number;
  parentId?: number;
  name: string;
  description: string;
  route: string;
  ruleId?: number;
  sort?: number;
  
  constructor() {
  }

}
