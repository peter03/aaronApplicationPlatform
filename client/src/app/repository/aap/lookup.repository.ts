import { Injectable } from "@angular/core";

import { Lookup } from 'src/app/model/aap/lookup.model';
import { RolegroupRepository } from "./rolegroup.repository";
import { RoleRepository } from "./role.repository";

@Injectable()
export class LookupRepository {

  constructor(private rolegroupRep: RolegroupRepository,
  public roleRepo: RoleRepository) {
  }

  getRolegroupList(): Lookup[] {

    let res: Lookup[] = [];
    this.rolegroupRep.getList().forEach(el => {
      res.push(new Lookup(el.id, el.name));
    });
    return res;
  }

  getRolegroupById(id: number) {
    return this.getRolegroupList().find(e => e.id == id);
  }

  getRoleList(): Lookup[] {

    let res: Lookup[] = [];
    this.roleRepo.getList().forEach(el => {
      res.push(new Lookup(el.id, el.name));
    });
    return res;
  }

    
}
