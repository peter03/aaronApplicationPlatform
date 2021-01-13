import { IId } from 'src/app/interface/aap/IId';

export class Menu implements IId {

  id: number;
  name: string;
  route: string;
  parentId: number;

  constructor(id, name, route, parentId) {
    this.id = id;
    this.name = name;
    this.route = route;
    this.parentId = parentId;
  }

}
