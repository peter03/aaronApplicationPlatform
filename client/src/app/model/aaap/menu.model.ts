import { IId } from 'src/app/interface/aaap/IId';

export class Menu implements IId {

  id: number;
  parentId?: number;
  name: string;
  description: string;
  route: string;
  ruleId?: number;
  sort?: number;
  settingAsJson: string;
  setting: object;
  
  constructor() {
  }

}
